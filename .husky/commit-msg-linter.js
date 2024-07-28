const fs = require('fs');
const { execSync } = require('child_process');
const supportsColor = require('supports-color');

(function () {
  // ANSI 컬러 코드 정의
  const COLORS = {
    RED: supportsColor?.stdout ? '\x1b[0;31m' : '',
    GREEN: supportsColor?.stdout ? '\x1b[0;32m' : '',
    BLUE: supportsColor?.stdout ? '\x1b[1;34m' : '',
    EOS: supportsColor?.stdout ? '\x1b[0m' : '',
    BOLD: supportsColor?.stdout ? '\x1b[1m' : '',
  };

  // 정규식 패턴 정의
  const COMMIT_MSG_PATTERN =
    /^(fix|docs|feat|refactor|chore|ci)(\(\w+\))?:\s.+$/;

  // 예시 및 올바른 커밋 메시지 형식 정의
  const CORRECT_COMMIT_MSG_FORMAT = 'fix|docs|feat|refactor: <Message>';
  const EXAMPLES = [
    'fix: i hope this will fix it',
    'docs: i dont know, i just code',
    'feat: see last commit',
    'refactor: see last commit',
  ];

  // 파일에서 커밋 메시지 읽기
  function readCommitMessage() {
    return fs.readFileSync('.git/COMMIT_EDITMSG', 'utf-8').trim();
  }

  // 커밋 메시지에서 첫 줄 얻기
  function getFirstLine(buffer) {
    return buffer.split('\n')[0];
  }

  // 현재 브랜치 이름 얻기
  function getCurrentBranch() {
    try {
      return execSync('git rev-parse --abbrev-ref HEAD', {
        encoding: 'utf-8',
      }).trim();
    } catch (err) {
      console.error('Failed to get branch name:', err);
      return 'Unknown Branch';
    }
  }

  // 커밋 메시지 패턴 확인
  function checkCommitMessage(msg) {
    return COMMIT_MSG_PATTERN.test(msg);
  }

  // 커밋 결과 출력
  function printCommitResult(isValid, msg, branchName) {
    const commitResultMsg = isValid ? 'SUCCESS' : 'FAILED';
    const color = isValid ? COLORS.GREEN : COLORS.RED;

    console.log(
      `${COLORS.BOLD}Commit result:${COLORS.EOS} ${color}${commitResultMsg}${COLORS.EOS}`,
    );
    console.log(`${COLORS.BOLD}Current branch:${COLORS.EOS} ${branchName}`);
    console.log(
      `${COLORS.BOLD}Commit message:${COLORS.EOS} ${color}${msg}${COLORS.EOS}\n`,
    );

    if (!isValid) {
      console.log(
        `${COLORS.BOLD}Correct format:${COLORS.EOS} ${COLORS.GREEN}${CORRECT_COMMIT_MSG_FORMAT}${COLORS.EOS}`,
      );
      console.log(`${COLORS.BOLD}Examples:${COLORS.EOS}`);
      EXAMPLES.forEach((example, index) => {
        console.log(`  ${index + 1}) ${COLORS.BLUE}${example}${COLORS.EOS}`);
      });
    }

    process.exit(isValid ? 0 : 1);
  }

  function main() {
    const commitMsgContent = readCommitMessage();
    const firstLine = getFirstLine(commitMsgContent).replace(/\s{2,}/g, ' ');
    const branchName = getCurrentBranch();

    const isValid = checkCommitMessage(firstLine);

    printCommitResult(isValid, firstLine, branchName);
  }

  main();
})();
