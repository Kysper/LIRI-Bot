// Adds the dependencies for the node packages
require("dotenv").config();

var  inquirer = require("inquirer");
var fs = require("fs");
var moment = require("moment")
 const keys = require('./keys.js');
 const Spotify = require('node-spotify-api');
 var request = require("request");

// Creates an object with keys for spotify
const spotify = new Spotify(keys.spotify);
console.log(spotify);

// // Clears the node array
// process.argv.splice(0,2);

// //Variable that grabs the command argument
// var commandArg = process.argv.shift();
// var searchTerm = process.argv.shift().join(" ");


// //Starts the application
// liriBotActivate();
// function liriBotActivate(){

//   //User Input + Questions
// inquirer.prompt([
//   { type:"input",
//     message:"Hello! I am Liri-Bot. What should I call you?",
//     name:"user",
// },


//   { type:"input",
//     message:"Hello "+user+" Here's what I can help you with.\n [concert-this]\n[spotify-this-song]\n[movie-this]\n[do-what-it-says]",
//     name:commandArg,searchTerm
//   },    
// ])
// .then(function(commandArg,searchTerm) {
// //Checks the conditions for which commandArg was typed
//   switch(commandArg)
//   {
//     case 'concert-this':
//     getConcert(searchTerm);
//     break;

//     case 'spotify-this-song':
//     console.log("Ok searching for the song");
//     spotifySong(searchTerm);
//     break;

//     case 'movie-this':
//     console.log("Let's see what's near you shall we?");
//     getMovieInfo(SearchTerm);
//     break;

//     case 'do-what-it-says':
//     console.log("Ok");
//     doWhatItSays(SearchTerm);
//     break;
//   }
// });
// }






// function spotifySong(song){
//   //Sends a request to the spotify API server using the song name
//   spotify.search({type: 'track', query: song}, function (err, data) {
//    //displays error if errored
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }
//       let songInfo = data.tracks.items[0];
//       let songDisplay = console.log(songInfo.artist[0].name);
//                         console.log(songInfo.name);
//                         console.log(songInfo.album.name);
//                         console.log(songInfo.preview_url);
                        
//     console.log(songDisplay);
    
//   });
//   };




    