interface WrapperProps {
  condition: boolean;
  wrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}

const Wrapper = ({ condition, wrapper, children }: WrapperProps) =>
  condition ? wrapper(children) : children;

export default Wrapper;
