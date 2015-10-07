'use strict';
var fs = require('fs');
var path = process.argv[2];
var cli = require('cli-color');
var recursive = require('recursive-readdir');

// takes argument and recursively lists all paths to files
recursive(path, function (err, files) {
  console.log(cli.blue.underline.bgWhite('filesize: ') );
  if (files) {
    files.forEach(function (path) {
      stats(path);
    });
  } else {
    stats(path);
  }
});

function stats(path) {
  fs.stat(path, function(error, stats) {
    console.log(cli.underline(path) + ': ' + cli.green(Math.floor(stats.size/1024) + ' kb'));
  });
}