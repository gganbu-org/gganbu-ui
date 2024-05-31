import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { genComponentStyle } from '../src/base';
import { dj } from '../src/factory';

describe('genComponentStyle function', () => {
  it('should throw an error if tag is not defined', () => {
    expect(() => {
      genComponentStyle();
    }).toThrow('Define tag to create styled component');
  });

  it('should create a React component with the specified tag when tag is defined', () => {
    const StyledComponent = genComponentStyle('div');
    const { container } = render(<StyledComponent />);

    expect(container).toBeInTheDocument();
  });

  it('should pass props to the component', () => {
    const StyledComponent = genComponentStyle('button');
    const { container } = render(<StyledComponent id="test" />);

    expect(container.querySelector('button')?.getAttribute('id')).toBe('test');
  });
});

describe('dj created DOM', () => {
  it('should create a DjComponent with the specified tag when tag is defined', () => {
    const StyledDiv = dj.div;
    const StyledButton = dj.button;

    const { container: divContainer } = render(<StyledDiv />);
    expect(divContainer.querySelector('div')).toBeInTheDocument();

    const { container: buttonContainer } = render(<StyledButton />);
    expect(buttonContainer.querySelector('button')).toBeInTheDocument();
  });

  it('should reuse cached DjComponent when the same tag is requested', () => {
    const StyledDiv1 = dj.div;
    const StyledDiv2 = dj.div;

    expect(StyledDiv1).toBe(StyledDiv2);
  });
});
