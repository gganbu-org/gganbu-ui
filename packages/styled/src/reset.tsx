import { Global } from './providers';

const reset = `
  :where(*, *::before, *::after) {
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
    word-wrap: break-word;
  }
`;

function CssReset() {
  return <Global styles={reset} />;
}

export default CssReset;
