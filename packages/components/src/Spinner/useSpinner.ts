import { createElement } from 'react';
import { dj, useThemeStyles } from '@danji/styled';
import { SpinnerProps } from './spinner.types';

/**
 * @todo 유틸 클래스 system prop으로 전달가능하도록 타입, 로직 추가.
 */
const srOnly = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
} as const;

const createLabel = (label?: string) =>
  typeof label === 'string'
    ? createElement(
        dj.span,
        {
          _styles: srOnly,
        },
        label,
      )
    : null;

const useSpinner = (props: SpinnerProps) => {
  const { size = 'md', theme = 'primary', label: labelProp, ...rest } = props;

  const Component = dj.div;

  const themeStyles = useThemeStyles('Spinner', { size, theme });
  const label = createLabel(labelProp);

  const getSpinnerProps = () => ({
    _styles: themeStyles,
    ...rest,
  });

  return {
    Component,
    getSpinnerProps,
    label,
  };
};

export default useSpinner;
