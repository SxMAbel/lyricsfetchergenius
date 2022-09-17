const { OptionsChecker } = require("./utilities");
const RetrieveLyrics = require("./utilities/extract");
const SearchSong = require("./SearchSong");

/**
 * @param {{APIKey: String, Title: String, Artist: String, OptimizeQuery: Boolean}} options
 */
module.exports = async function (options) {
  try {
    OptionsChecker(options);
    const results = await SearchSong(options);
    if (!results) return null;
    const lyrics = await RetrieveLyrics(results[0].URL);
    return {
      ID: results[0].ID,
      Title: results[0].Title,
      URL: results[0].URL,
      lyrics,
      Album_Art: results[0].Song_Art_Image_URL,
    };
  } catch (error) {
    throw error;
  }
};
