const fs = require('fs');

(function(process) {
  console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length-1);
})(process);