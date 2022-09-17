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
    const lyrics = await RetrieveLyrics(results[0].url);
    return {
      id: results[0].id,
      Title: results[0].Title,
      url: results[0].url,
      lyrics,
      Album_Art: results[0].song_art_image_url,
    };
  } catch (error) {
    throw error;
  }
};
