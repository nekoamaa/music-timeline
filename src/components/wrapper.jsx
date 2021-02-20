const wrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default wrapper;