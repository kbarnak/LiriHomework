### LiriHomework

## Welcome to Liri-bot!

# Introduction
LIRI is like iPhone's SIRI. The only difference is that SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. Specifically, you will be able to search Spotify for songs, Bands in Town for concerts, and OMDB for movies using LIRI.

# APIs
The API's utilized in this assignment are:
1) Bands in Town API (https://rest.bandsintown.com/artists/)
2) Spotify API (https://www.npmjs.com/package/node-spotify-api)
3) OMDB API (http://www.imdb.com/title/tt0485947/)

## What Each Command Should Do

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     * Name of Band/Artist/Lineup (For some reason my reponse show the name but afterwards shows me an error and highlights the lineup. Most likely needs additional debugging.)

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")



2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.


3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
    
   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


4. `node liri.js do-what-it-says`

   * LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     * In this command, I get the error from the switch function "I don't understand, ask Foogle-Bot."
     * Additional debugging would most likely get this to fixed since everything is lonked properly. 
