const monorepoRoots = ['apps', 'packages'];
const packageTypes = ['components', 'core', 'same level'];

async function selectPackageDomain(prompter) {
  return prompter.select({
    type: 'select',
    name: 'packageDomain',
    message: '패키지 도메인을 선택하세요',
    choices: monorepoRoots,
  });
}

async function selectPackageType(prompter) {
  return prompter.select({
    type: 'select',
    name: 'packageType',
    message: 'components, core 또는 같은 레벨의 패키지 중 선택하세요',
    choices: packageTypes,
  });
}

async function inputPackageName(prompter) {
  return prompter.prompt({
    type: 'input',
    name: 'packageName',
    message: '생성할 패키지 이름을 입력하세요',
  });
}

function calculatePackageDomain(
  packageDomain,
  packageType,
  packageName,
  relativeRootPath,
) {
  if (packageType !== 'same level') {
    return {
      packageDomain: `${packageDomain}/${packageType}`,
      packageName,
      relativeRootPath: `${relativeRootPath}../`,
    };
  }
  return { packageDomain, packageName, relativeRootPath };
}

module.exports = {
  prompt: async ({ prompter }) => {
    const packageDomain = await selectPackageDomain(prompter);
    const relativeRootPath = '../../';

    if (packageDomain === 'packages') {
      const packageType = await selectPackageType(prompter);
      const { packageName } = await inputPackageName(prompter);
      return calculatePackageDomain(
        packageDomain,
        packageType,
        packageName,
        relativeRootPath,
      );
    }

    const { packageName } = await inputPackageName(prompter);
    return { packageDomain, packageName, relativeRootPath };
  },
};
