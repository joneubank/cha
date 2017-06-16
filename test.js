const cha = require('./main');
const fs = require('fs');
const path = require('path'); 


var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('testwords.csv')
});

lineReader.on('line', function (line) {
  console.log(line, ':', cha.hash(line));
});


