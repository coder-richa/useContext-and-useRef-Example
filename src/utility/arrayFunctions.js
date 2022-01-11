/**
 * Helper function to convert an array of strings to a single string
 * @param {Array} array - Array of strings
 * @param {String} separator - Separator to use between strings
 * @returns {String} - Single string
 **/
export const arrayToString = (array, separator = ",") =>
  array.join(`${separator} `);
