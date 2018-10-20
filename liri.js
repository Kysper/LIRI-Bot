// Adds the dependencies for the node packages
require("dotenv").config();
var fs = require("fs");
var moment = require("moment")
const Spotify = require('node-spotify-api');
const keys = require('./keys.js');
var request = require("request");

// Creates an object with keys for spotify
const spotify = new Spotify(keys.spotify);

// Clears the node array
process.argv.splice(0, 2);

//Variable that grabs the command argument
var commandArg = process.argv.shift();
var searchTerm = process.argv.join(" ");


//Starts the application

function botCommands(commandArg, searchTerm) {
  switch (commandArg) {

    case 'concert-this':
    if(commandArg === "")
    {
      console.log("No input detected");
      break;
    }
      getConcert(searchTerm);
      break;

    case 'spotify-this-song':
    if(commandArg === "")
    {
      console.log("It seems you haven't typed anything any in so"+waitDot());
      song = "The Sign";
      spotifySong(song);
      break;
    }
    else
    {
      console.log("Please hold searching...");
      spotifySong(searchTerm);
    }
      break;

    case 'movie-this':

    if(commandArg === "")
    {
      var movie = "Mr. Nobody"
      getMovieInfo(movie);
      break;
    }
    else 
    {
      console.log("Great! Let's find your movie! One second...");
      getMovieInfo(searchTerm);
    }
      break;

    case 'do-what-it-says':
    if(commandArg === "")
    {
      console.log("No Input Detected");
      break;
    }
      console.log("Ok picking a random choice");
      doWhatItSays();
      break;
  }

}


function getConcert(artists) {
  request("https://rest.bandsintown.com/artists/" + artists + "/events?app_id=codingbootcamp", function(err,res,body)
  {
    if (err) {
      console.log('Error:' + err);
  }
    let json = JSON.parse(body);


    json.forEach(element => {
      let concert = "Name: " + element.venue.name +
      "\nCity: " + element.venue.city +
      "\nState: " + element.venue.region +
      "\nDate: " +  moment(element.datetime).format("MM/DD/YYYY");
      console.log(concert);
      console.log("-".repeat(30));
     
    });
  });
};

function spotifySong(song) {
  //Sends a request to the spotify API server using the song name
  spotify.search({ type: 'track', query: song }, function (err, data) {
    //displays error if errored
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    let songInfo = data.tracks.items[0];
    let songDisplay = "Name: " + songInfo.artists[0].name+ 
    "\nSong: " + songInfo.name +
    "\nAlbum: " + songInfo.album.name
    if(songInfo.preview_url != null){

     +"\nPreview: " + songInfo.preview_url
    }
    else
     {
       console.log("Sorry no preview avaliable");
     }
    console.log(songDisplay); 

  });
};


function getMovieInfo(movie) {
  request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(err,res,body)
  {
    if(err)
    {
      console.log("Error: " +err);
    }

    let json = JSON.parse(body);
    let movieData = "Title:" + json.Title +
      "\nYear: " + json.Year +
      "\nIMDB: " + json.Ratings[0].Source +
      "\nRotten Tomatoes: " + json.Ratings[1].Source +
      "\nCountry: " + json.Country +
      "\nLanguage: " + json.Language +
      "\nPlot: " + json.Plot +
      "\nActors: " +json.Actors;
      console.log(movieData);
      console.log("-".repeat(30));
    
  });
};

function doWhatItSays() {


  fs.readFile("./random.txt","utf8", function(err,data)
  {
    if(err)
    {
      console.log("Error: " + err);
    }
    let readData = data.split(",");
    botCommands(readData[0],readData[1])
  });
};
botCommands(commandArg, searchTerm);

