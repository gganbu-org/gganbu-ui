const monorepoRoots = ['apps', 'packages'];

module.exports = {
  prompt: async ({ prompter }) => {
    const packageDomain = await prompter.select({
      type: 'input',
      name: 'packageDomain',
      message: '패키지 도메인을 선택하세요',
      choices: [...monorepoRoots],
    });

    const { packageName } = await prompter.prompt({
      type: 'input',
      name: 'packageName',
      message: '생성할 패키지 이름을 입력하세요',
    });

    return { packageDomain, packageName };
  },
};
