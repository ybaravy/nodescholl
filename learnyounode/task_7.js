const http = require('http');

function getMe(url) {
  http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on("data", chunk => console.log(chunk));
  })
}

getMe(process.argv[2]);