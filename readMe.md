# Lyrics Fetcher Genius

# How to Use

# Installation

```
npm install --save lyricsfetchergenius@latest
```

# Methods and Examples in Javascript

[Get the genius APIKey/Token here](https://genius.com/developers)

**Using Typescript**

```ts
import lyricsfetchergenius from "lyricsfetchergenius";
```

**Using Javascript**

Using GetLyrics:

```js
const lyricsfetchergenius = require("lyricsfetchergenius");
// example of options 1
var options = {
  APIKey: "your-genius-api-key",
  Title: "Late Night Trips",
  Artist: "Alex1",
  OptimizeQuery: true, // optimizes the query for best results. default is false
  AuthHeader: true, // include auth header in the search request. default is false
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
  OptimizeQuery: true, // optimizes the query for best results. default is false
  AuthHeader: true, // include auth header in the search request. default is false
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

Using GetAlbumArt:

```js
const lyricsfetchergenius = require("lyricsfetchergenius");
// example of options 1
var options = {
  APIKey: "your-genius-api-key",
  Title: "Late Night Trips",
  Artist: "Alex1",
  OptimizeQuery: true, // optimizes the query for best results. default is false
  AuthHeader: true, // include auth header in the search request. default is false
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
  OptimizeQuery: true, // optimizes the query for best results. default is false
  AuthHeader: true, // include auth header in the search request. default is false
};

async () => {
  try {
    const albumArt = await lyricsfetchergenius.GetAlbumArt(options);
    console.log(albumArt); // you can do somthing else with it other than console.log
  } catch (error) {
    throw error;
  }
};
```

Using GetSong:

```js
const lyricsfetchergenius = require("lyricsfetchergenius");
// example of options 1
var options = {
  APIKey: "your-genius-api-key",
  Title: "Late Night Trips",
  Artist: "Alex1",
  OptimizeQuery: true, // optimizes the query for best results. default is false
  AuthHeader: true, // include auth header in the search request. default is false
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
  OptimizeQuery: true, // optimizes the query for best results. default is false
  AuthHeader: true, // include auth header in the search request. default is false
};

async () => {
  try {
    const albumArt = await lyricsfetchergenius.GetSong(options); // returns an object
    console.log(albumArt); // you can do somthing else with it other than console.log
  } catch (error) {
    throw error;
  }
};
```

Using GetSongByID:

```js
const lyricsfetchergenius = require("lyricsfetchergenius");
const songID = "368385"; // just an example
const APIKey = process.env.APIKEY || "your-genius-api-key";
async () => {
  try {
    const song = await lyricsfetchergenius.GetSongByID(ID, APIKey); // returns an object
    console.log(song); // you can do somthing else with it other than console.log
  } catch (error) {
    throw error;
  }
};
```

Using SearchSong:

```js
const lyricsfetchergenius = require("lyricsfetchergenius");
// example of options 1
var options = {
  APIKey: "your-genius-api-key",
  Title: "Late Night Trips",
  Artist: "Alex1",
  OptimizeQuery: true, // optimizes the query for best results. default is false
  AuthHeader: true, // include auth header in the search request. default is false
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
  OptimizeQuery: true, // optimizes the query for best results. default is false
  AuthHeader: true, // include auth header in the search request. default is false
};

async () => {
  try {
    let song = await lyricsfetchergenius.SearchSong(options);
    console.log(song); //returns a object. you can do somthing else with it other than console.log
  } catch (error) {
    throw error;
  }
};
```
