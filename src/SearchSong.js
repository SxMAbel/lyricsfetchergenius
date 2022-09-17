const axios = require("axios");
const { OptionsChecker, RetrieveTitle } = require("./utilities");
const Search_Endpoint = "https://api.genius.com/search?q=";

/**
 * @param {{APIKey: String, Title: String, Artist: String}} options
 */
module.exports = async function (options) {
  try {
    OptionsChecker(options);
    const {
      APIKey,
      Title,
      Artist,
      OptimizeQuery = false,
      AuthHeader = false,
    } = options;
    const Song = OptimizeQuery
      ? RetrieveTitle(Title, Artist)
      : `${Title} ${Artist}`;
    const RequestURL = `${Search_Endpoint}${encodeURIComponent(Song)}`;
    const Headers = {
      Authorization: "Bearer" + APIKey,
    };
    const { data } = await axios.get(
      AuthHeader ? RequestURL : `${RequestURL}&access_token=${APIKey}`,
      AuthHeader && { Headers }
    );
    if (data.response.hits.length === 0) return null;
    const results = data.response.hits.map((value) => {
      const { full_title, song_art_image_url, id, url } = value.result;
      return { id, Title: full_title, Album_Art: song_art_image_url, url };
    });
    return results;
  } catch (error) {
    throw error;
  }
};
