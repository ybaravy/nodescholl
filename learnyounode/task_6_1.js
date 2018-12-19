const fs = require('fs');
const path = require('path');
const colba = require('./task_6_2');

const dir = process.argv[2];
const ext = process.argv[3];

function cb(err, list) {
  if (err) return console.log(err);
  return list.map(m => console.log(m));
};

colba(dir, ext, cb);