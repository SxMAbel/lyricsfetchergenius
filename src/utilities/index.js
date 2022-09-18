/**
 * @param {Object} options
 */
function OptionsChecker(options) {
  if (!("APIKey" in options) || !options.APIKey) {
    throw '"APIKey" property must be present in options';
  }
  if (!("Title" in options) || !options.Title) {
    throw '"Title" property must be present in options';
  }
  if (!("Artist" in options) || !options.Artist) {
    throw '"Artist" property must be present in options';
  }
}

/**
 * @param {String} Title
 * @param {String} Artist
 */
function RetrieveTitle(Title, Artist) {
  return `${Title} ${Artist}`
    .toLowerCase()
    .replace(/ *\([^)]*\) */g, "")
    .replace(/ *\[[^\]]*]/, "")
    .replace(/feat.|ft./g, "")
    .replace(/\s+/g, " ")
    .trim();
}

module.exports = {
  OptionsChecker,
  RetrieveTitle,
};
