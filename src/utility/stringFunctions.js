/**
 *
 * @param  {...any} args array of values to be converted to string and test if they are empty
 * @returns {Boolean} true if any values are empty, false otherwise
 */
export const checkEmpty = (...args) =>
  args.some((value) => `${value}`.trim() === "");
