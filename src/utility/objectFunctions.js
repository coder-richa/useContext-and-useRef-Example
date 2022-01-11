/**
 * Helper function to retrieve an array of property values by spliting object properties name string
 * @param {Object} obj - Object from where to retrieve the property values
 * @param {String} propertiesName - String of properties names separated by separator
 * @param {String} separator - Separator to use between properties names
 * @returns {Array} - Array of property values
 **/
export const getValuesFromPropertyName = (
  obj,
  propertiesName,
  separator = " "
) => {
  return propertiesName
    .split(`${separator}`)
    .map((propertyName) => obj[propertyName]);
};
