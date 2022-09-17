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
    const rawData = await axios.get(
      AuthHeader ? RequestURL : `${RequestURL}&access_token=${APIKey}`,
      AuthHeader && { Headers }
    );
    if (rawData.data.response.hits.length === 0) return null;
    const results = rawData.data.response.hits.map((value) => {
      const { Full_Title, Song_Art_Image_URL, ID, URL } = value;
      return { ID, Title: Full_Title, Album_Art: Song_Art_Image_URL, URL };
    });
    return results;
  } catch (error) {
    throw error;
  }
};
