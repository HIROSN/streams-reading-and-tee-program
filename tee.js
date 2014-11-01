'use strict';

var fs = require('fs');
var path = process.argv[2];

if (path) {
  process.stdin.pipe(fs.createWriteStream(path));
}

process.stdin.pipe(process.stdout);
