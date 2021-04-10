export const findByTestAttr = (wrapper, key) =>
  wrapper.find(`[data-test="${key}"]`)
