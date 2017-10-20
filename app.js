// EASY: Create a node application that will read all of the planets in the 
// solar system from a text file and print them to the console.
// Text file: mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto

// Load in Node module File System
const fs = require('fs');

// Set up the file to be read as the third [2] argument in the command line (after 'node app.js')
fileToBeRead = process.argv[2];

// Read the file with the arguments (file, options, callback)
// Make sure to use 'utf8' or it will return a buffer and not the plain text
fs.readFile(fileToBeRead, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('File: ' + fileToBeRead);
    console.log('Contents: ' + data);
});



 
  