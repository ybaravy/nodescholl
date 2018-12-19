const http = require('http')
const bl = require('bl');

let count = 0;
function getMe(url) {
  http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }))
  })
}

getMe(process.argv[2]);