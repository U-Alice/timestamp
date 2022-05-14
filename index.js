// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get("/api/timestamp/:date", (req, res) => {
  const date = new Date(req.params.date)
  const timeInMs = date.getTime()
  const unixTimeStamp = Math.floor(timeInMs / 1000)
  const timeStampUtc = date.toString()
  if (!unixTimeStamp) {
    res.json({ error: "invalid date" })
  }else{
  res.json({ unix: unixTimeStamp, utc: timeStampUtc })
  }

})



// listen for requests :)
var listener = app.listen(3010, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
