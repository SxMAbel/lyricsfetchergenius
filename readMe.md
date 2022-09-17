# Lyrics Fetcher Genius 

# How to Use

Using GetLyrics:

```js
const lyricsfetchergenius = require("lyricsfetchergenius");
// example of options 1
var options = {
  APIKey: "your-genius-api-key",
  Title: "Late Night Trips",
  Artist: "Alex1",
  OptimizeQuery: true,
};

// example of options 2
const APIKey = process.env.APIKEY || "your-genius-api-key";
// below player is erela.js || you can use anything.
const songTitle = player.queue.current.title;
const songArtist = player.queue.current.author;
var options = {
  APIKey: APIKey,
  Title: songTitle,
  Artist: songArtist,
  OptimizeQuery: true,
};

async () => {
  try {
    let lyrics = await lyricsfetchergenius.GetLyrics(options);
    lyrics = lyrics.replace(/(\[.+\])/g, ""); // optional
    console.log(lyrics); // you can do somthing else with it other than console.log
  } catch (error) {
    throw error;
  }
};
```
