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
    const lyrics = await RetrieveLyrics(Song.URL);
    return {
      ID: Song.ID,
      Title: Song.Full_Title,
      URL: Song.URL,
      lyrics,
      Album_Art: Song.Song_Art_Image_URL,
    };
  } catch (error) {
    throw error;
  }
};
