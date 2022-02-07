export function or(...funcs) {
  return (...args) => {
    let errors = [];
    for (let i = 0; i < funcs.length; i++) {
      try {
        return funcs[i](...args);
      } catch (e) {
        errors.push(e.message);
      }
    }

    throw new Error(errors.join(" | and | "));
  };
}
