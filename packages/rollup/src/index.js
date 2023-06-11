const path = require('path');
const postcss = require(`rollup-plugin-postcss`);
const autoprefixer = require(`autoprefixer`);
const alias = require(`@rollup/plugin-alias`);
const nodeResolve = require(`@rollup/plugin-node-resolve`);
const commonjs = require(`@rollup/plugin-commonjs`);
const json = require(`@rollup/plugin-json`);
const { babel } = require(`@rollup/plugin-babel`);
const typescript = require(`rollup-plugin-typescript2`);
const terser = require(`@rollup/plugin-terser`);

const getDeps = ({ pkg, type = 'peerDependencies' }) =>
  Object.keys(pkg[type] || {});

const getModulesMatcher = (modulesNames) => {
  const regexps = modulesNames.map(
    (module) => new RegExp(`^${module}(\\/\.+)*$`),
  );
  return (id) => regexps.some((regexp) => regexp.test(id));
};

const getExternal = (pkg) => {
  const pkgPeerDependencies = getDeps({ pkg, type: 'peerDependencies' });

  return getModulesMatcher([...pkgPeerDependencies]);
};

const FORMAT = {
  ESM: 'esm',
  CJS: 'cjs',
};
const REQURIED_FIELDS = [`main`, 'exports', 'publishConfig'];
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const isProduction = process.env?.NODE_ENV === `production`;

const babelOptions = {
  babelHelpers: `bundled`,
  exclude: `node_modules/**`,
  extensions: EXTENSIONS,
};

const nodeOptions = {
  extensions: EXTENSIONS,
};

const validateRequiredField = (pkg) => {
  [...REQURIED_FIELDS].forEach((field) => {
    ensureFieldInPkg(field, pkg[field]);
  });

  return true;
};

const bundleLibraries =
  ({ moduleAlias, pkg }) =>
  (input, output, format) => {
    const isESMFormat = format === FORMAT.ESM;
    const external = getExternal(pkg);

    const esOutputConfig = {
      format,
      preserveModules: true,
      preserveModulesRoot: path.dirname(input),
      dir: output,
    };
    const cjsOutputConfig = {
      format,
      preserveModules: false,
      file: output,
    };

    const defaultPlugins = [
      postcss({
        plugins: [autoprefixer()],
      }),
      Object.keys(moduleAlias || {}).length > 0 &&
        alias({
          ...moduleAlias,
          resolve: EXTENSIONS,
        }),
      nodeResolve(nodeOptions),
      commonjs(),
      json(),
      typescript(),
      babel(babelOptions),
      isProduction && terser(),
    ];

    return {
      input,
      external,
      plugins: defaultPlugins,
      output: [isESMFormat ? esOutputConfig : cjsOutputConfig],
    };
  };

const createOutput = (opts) => {
  const { packageDir } = opts;
  const pkg = require(path.join(packageDir, 'package.json'));
  const handleBundleLibraries = bundleLibraries({
    moduleAlias: opts?.moduleAlias,
    pkg,
  });
  if (!validateRequiredField(pkg)) return;

  const { exports, publishConfig } = pkg;
  const [entrypoint] = Object.keys(exports);

  const cjsEntry = path.resolve(
    packageDir,
    ensureFieldInPkg(
      `exports[${entrypoint}].require`,
      exports[entrypoint]?.require,
    ),
  );

  const cjsOutput = path.resolve(
    packageDir,
    ensureFieldInPkg('publishConfig.main', publishConfig?.main),
  );

  const esmEntry = path.resolve(
    packageDir,
    ensureFieldInPkg(
      `exports[${entrypoint}].import`,
      exports[entrypoint]?.import,
    ),
  );

  const esmOutput = path.resolve(
    packageDir,
    ensureFieldInPkg('publishConfig.module', publishConfig?.module),
  );

  return [
    handleBundleLibraries(cjsEntry, cjsOutput, FORMAT.CJS),
    handleBundleLibraries(esmEntry, esmOutput, FORMAT.ESM),
  ];
};

const ensureFieldInPkg = (field, value) => {
  if (value == null) {
    throw new Error(`'${field}' is missing in package.json`);
  }

  return value;
};

exports.generateConfig = (opts) => createOutput(opts);
