import { Global as EmotionGlobal } from '@emotion/react';

const reset = `
  :where(*, *::before, *::after) {
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
    word-wrap: break-word;
  }
`;

function CssReset() {
  return <EmotionGlobal styles={reset} />;
}

export default CssReset;
