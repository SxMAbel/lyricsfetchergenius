const { OptionsChecker } = require("./utilities");
const SearchSong = require("./SearchSong");

/**
 * @param {{APIKey: String, Title: String, Artist: String, OptimizeQuery: Boolean}} options
 */
module.exports = async function (options) {
  OptionsChecker(options);
  const results = await SearchSong(options);
  if (!results) return null;
  return results[0].Album_Art;
};
