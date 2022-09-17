const SearchSong = require("./SearchSong");
const { OptionsChecker } = require("./utilities");
const RetrieveLyrics = require("./utilities/extract");

/**
 * @param {({APIKey: String, Title: String, Artist: string, OptimizeQuery: Boolean}|string)} argument - options object, or Genius URL
 */
module.exports = async function (argument) {
  try {
    if (argument && typeof argument === "string") {
      const lyrics = await RetrieveLyrics(argument);
      return lyrics;
    } else if (typeof argument === "object") {
      OptionsChecker(argument);
      const results = await SearchSong(argument);
      if (!results) return null;
      const lyrics = await RetrieveLyrics(results[0].url);
      return lyrics;
    } else {
      throw "Detected Invalid Argument";
    }
  } catch (error) {
    throw error;
  }
};
