/** Dependencies **/
require("dotenv").config();

const fs = require('fs');
const request = require('request');


let Spotify = require("node-spotify-api");
let moment = require("moment");
let keys = require("./keys");


let spotify = new Spotify(keys.spotify);

//Checks to see if apis are connected to main JS 
// console.log("spotify", spotify);
// console.log("spID", spID, "spSecret", spSecret);

let apiInfo = keys.apiInfo;
let omdbAPI = apiInfo.omdbAPI;
let bitAPI = apiInfo.bitAPI;

// User commands
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

function switchCommand() {
    // User commant options
    switch (userInput) {
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
            console.log("I don't understand, ask Foogle-Bot");
            break;
    };
};

switchCommand(userInput, userQuery);

// Spotify This Song Code
function spotifyThisSong() {
    // Making sure unserQuery has an input
    // If no input, display "The Sign" by Ace of Base
    if (!userQuery.length) {
        userQuery = "Ace of Base - The Sign"
    };

    spotify.search({
        type: 'track',
        query: userQuery,
        limit: 4
    }, function (err, data) {
        if (err) {
            return
            console.log(error + "\n");
        }
        else {
            // Create an array to use in the for loop
            let arrayLimit = data.tracks.items;

            for (i = 0; i < arrayLimit.length; i++) {
                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
                console.log("Artist(s): ", data.tracks.items[i].album.artists[0].name);
                console.log("Song Title: ", data.tracks.items[i].name);
                console.log("Preview link: ", data.tracks.items[i].external_urls.spotify);
                console.log("Album: ", data.tracks.items[i].album.name);
                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            }
        };
    });
};


// Concert This Code
function concertThis() {
    request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=" + bitAPI, function (error, response, body) {
        // If the request finds a result
        if (!error && response.statusCode === 200) {
            // Parse the response into a JSON format
            let banddata = JSON.parse(body);
            for (i = 0; i < body.length; i++) {
                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
                console.log("Artist(s): " + banddata[i].lineup[0])
                console.log("Venue: " + banddata[i].venue.name)
                console.log(`Location: " ${banddata[i].venue.city}, ${banddata[i].venue.country}`)
                console.log("Date and Time: " + moment(banddata[i].datetime).format("MM/DD/YYYY hh:00 A"))
                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            };

        } else {
            // If request is not found
            console.log("Sorry! No matches at this time!");
        };
    });
};


// Movie This Code
function movieThis() {
    // Making sure unserQuery has an input
    // If no input, display "Mr Nobody"
    if (!userQuery.length) {
        userQuery = "Mr Nobody"
    };

    request("http://www.omdbapi.com/?t=" + userQuery + "&apikey=" + omdbAPI, function (error, response, body) {
        // Parse the response into a JSON format
        // let movieDetails = JSON.parse(body);


        if (!error && response.statusCode == 200) {

            // sends data to console
            console.log('')
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            console.log(" Title: " + JSON.parse(body)["Title"]);
            console.log(" Release Year: " + JSON.parse(body)["Released"]);
            console.log(" IMDB Rating: " + JSON.parse(body)["imdbRating"]);
            console.log(" Country: " + JSON.parse(body)["Country"]);
            console.log(" Language: " + JSON.parse(body)["Language"]);
            console.log(" Plot: " + JSON.parse(body)["Plot"]);
            console.log(" Actors: " + JSON.parse(body)["Actors"]);
            console.log(" Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            console.log('')

        } else {
            //Throw error
            console.log("Error occurred. Please try again")
        }
    });
};


// Do What It Says Code
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        // If any errors occur. Display error. 
        if (error) {
            return console.log(error);
        }
        // Then split it by commas so that it is easier to read
        let dataArr = data.split(",");

        // Takes data from random.txt and displays it
        userInput = dataArr[0];
        userQuery = dataArr[1];

        // Function call 
        switchCommand(userInput, userQuery);

    });
};