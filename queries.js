/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
var connection = mongoose.connect(config.db.uri);


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({name: 'Library West'}, function(err, l){
	   if(err) throw err;
	   console.log(l);
   });
   
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
	Listing.findOneAndRemove({code: 'CABL'}, function(err, l){
		if(err) throw err;
		console.log(l);
	});
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
	Listing.findOneAndUpdate({code: 'PHL'},{address: "1199 Jake St, Gainesville, FL 32611, United States"} , function(err, l){
		if(err) throw err;
	});
	Listing.find({code: 'PHL'}, function(err, l){
	   if(err) throw err;
	   console.log(l);
	});
   
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
	Listing.find({}, function(err, l){
	   if(err) throw err;
	   console.log(l);
	});
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();