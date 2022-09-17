const axios = require("axios");
const RetrieveLyrics = require("./utilities/extract");
const songIdURL = "https://api.genius.com/songs/";

/**
 * @param {(number|string)} ID
 * @param {string} APIKey
 */
module.exports = async function (ID, APIKey) {
  if (!ID) throw "No ID was provided";
  try {
    let {
      data: {
        response: { Song },
      },
    } = await axios.get(`${songIdURL}${ID}&access_token=${APIKey}`);
    const lyrics = await RetrieveLyrics(Song.url);
    return {
      id: Song.id,
      Title: Song.full_title,
      url: Song.url,
      lyrics,
      Album_Art: Song.song_art_image_url,
    };
  } catch (error) {
    throw error;
  }
};
