const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, 'utf8', (err, list) => {
  return list.reduce((ac, file) => {
    if (path.extname(file).includes(ext)) return [...ac, file];
    return ac;
  }, []).map(m => console.log(m));
});
