const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, calba) {
  fs.readdir(dir, 'utf8', (err, list) => {
    if (err) return calba(err);
    list = list.filter(l => path.extname(l).includes(ext));
    return calba(null, list);
  });
};