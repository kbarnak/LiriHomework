/** Dependencies **/
require("dotenv").config();

const fs = require('fs');
const request = require('request');


let Spotify = require("node-spotify-api");
let moment = require("moment");
let keys = require("./keys");


let spotify = new Spotify(keys.spotify);
let spID = spotify.credentials.id;
let spSecret = spotify.credentials.secret;
// console.log("spotify", spotify);
// console.log("spID", spID, "spSecret", spSecret);

let apiInfo = keys.apiInfo;
let omdbAPI = apiInfo.omdbAPI;
let bitAPI = apiInfo.bitAPI;
// console.log("apiInfo", apiInfo);
console.log("omdbAPI", omdbAPI, "bitInfo", bitAPI);




//Get the user input
const input = process.argv[2];

//make a decision based on the command that you type in terminal
switch (input) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
    // console.log("I don't understand, ask Foogle-Bot");
}

function spotifyThisSong() {
    console.log("SPOTIFY THIS SONG: " + process.argv[3]);
}

function concertThis() {
    console.log("CONCERT THIS");
}

//`movie-this`


// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.
//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'



// //`do-what-it-says`

// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
// for (var i = 2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {

//     movieName = movieName + "+" + nodeArgs[i];

//   }

//   else {

//     movieName += nodeArgs[i];

//   }
// }
console.log(nodeArgs.slice(2));
console.log(nodeArgs.slice(2).join(" "));
console.log("" + nodeArgs.slice(2));
movieName = nodeArgs.slice(2).join("+")
console.log(movieName);

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function (error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log("Release Year: " + JSON.parse(body).Year);
    }
});