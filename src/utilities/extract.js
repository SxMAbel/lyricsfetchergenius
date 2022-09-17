const axios = require("axios");
const cheerio = require("cheerio");

/**
 * @param {String} url
 */
module.exports = async (url) => {
  try {
    let rawData = await axios.get(url);
    const $ = cheerio.load(rawData.data);
    const ly = $(".lyrics");
    if (ly.length) {
      const lyrics = ly.text().trim();
      if (!lyrics) return null;
      return lyrics;
    }
  } catch (error) {
    throw error;
  }
};
