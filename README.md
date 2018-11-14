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

   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:
   
<img width="610" alt="concertthis" src="https://user-images.githubusercontent.com/37203104/48500916-978cd280-e801-11e8-8189-1a322ef53a3d.png">

   * Name of Band/Artist/Lineup (For some reason my reponse show the name but afterwards shows me an error and highlights the lineup. Most likely needs additional debugging.)
   * Name of the venue
   * Venue location
   * Date of the Event (use moment to format this as "MM/DD/YYYY")
     
<img width="810" alt="concertthiserror" src="https://user-images.githubusercontent.com/37203104/48500989-be4b0900-e801-11e8-867a-e685fe39a624.png">


2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from
     
<img width="703" alt="spotifythis" src="https://user-images.githubusercontent.com/37203104/48500797-54cafa80-e801-11e8-8e9c-3bad186ad80f.png">

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
<img width="605" alt="aceofbase" src="https://user-images.githubusercontent.com/37203104/48500738-2ea55a80-e801-11e8-814e-ea0a02b0ca96.png">

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

        * Movie Title
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.
       
<img width="934" alt="moviethis" src="https://user-images.githubusercontent.com/37203104/48501048-d884e700-e801-11e8-8d2e-7648c312b6be.png">
    
   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


4. `node liri.js do-what-it-says`

   * LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
   
<img width="734" alt="dowhatitsays" src="https://user-images.githubusercontent.com/37203104/48501097-fb170000-e801-11e8-8c25-47b57b31bcf6.png">

   * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
   * In this command, I get the error from the switch function "I don't understand, ask Foogle-Bot."
   * Additional debugging would most likely get this to fixed since everything is lonked properly. 
     
 
