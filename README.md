# LIRI-Bot
Bot developed inside of node.js
#Make Liri be able to search spotify for songs, bands that in town on concerts, and OMDB for movies

# API used for Spotify

# API used for requesting input

#Request to grab data from OMDB API and bands in town API

# Will need to use moment and DotEnv.

# Screenshots of the app are here:
-----------------------------------------
# Concert-This
The first commmand is the concert-this command it will give you the date location and city as well as name of band that you type just after the command line.
![alt text](https://github.com/Kysper/LIRI-Bot/blob/master/concert-this.png)

# Spotify-This-Movie
This second command feature is one that allows you to call on any song that you wish and it will return the song name the artist the album name and if there is a preview url for the song to listen to and the output looks like this.
![alt_text](https://github.com/Kysper/LIRI-Bot/blob/master/spotify-this-song.png)

# Movie-This
The third feature that is brought up is one that helps you find information on a movie once you type in a movie name after the command line of movie-this it will display the name of the movie, the ratings from IMDB and Rotten Tomatoes,The year it came out and the actors that played in it.
![alt text](https://github.com/Kysper/LIRI-Bot/blob/master/movie-this.png)

# Do-what-it-says 
The final feature that is still a work in progress is the do-what-it-says in which you only have to type the command line and Liri-Bot will do the rest and give you a randomized command and search word which can be updated by adding or subtracting the commands and searchterms in the random.txt file. 
![alt text](https://github.com/Kysper/LIRI-Bot/blob/master/Desktop%20Screenshot%202018.10.20%20-%2000.30.03.19%20(2).png)

So that is the product currently avaliable if you would like to try the porduct yourself then please feel free to go to  
# BandsInTown: http://www.artists.bandsintown.com/bandsintown-api 
and ask for a free api-key.
The next on the list is 
# Spotify API https://developer.spotify.com/my-applications/#!
Create a new app and input your information to them and they will create two keys for you one for your client_Id and one for your secret create a .env file and type out client_ID=<Your API KEY HERE> without chevrons then right below it type SECRET_ID=<your secret key here>
 and that all there is to spotify.
  # The third thing to do to get it working is to go to OMDB.com API http://www.omdbapi.com/apikey.aspx
  and add your email to the first modal and it will send you an API key to use in the OMDB API server
  The rest of the files and infomation will be provided to you so all you need to do is supply the keys.
  
  Well I hope you enjoy the app I will continue to strive in building it better and more functional thank you!
