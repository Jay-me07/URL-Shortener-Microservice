require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
let bodyParser = require('body-parser');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

const urlDatabase = {};

app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/shorturl', function(req, res) {
  const { url } = req.body;

  //URL validation to check if starts with http or https
  if(!url.includes('http://') && !url.includes('https://')) {
    return res.json({ error: 'invalid url' })
  }

  //Generate a short id
  const shortId = Math.floor(Math.random() * 1000).toString();

  //Store the url
  urlDatabase[shortId] = url;

  res.json({
    original_url: url,
    short_url: shortId
  })
})

app.get('/api/shorturl/:shortId', function(req, res) {
  const { shortId } = req.params;
  const original_url = urlDatabase[shortId];

  if(original_url){
    res.redirect(original_url);
  } else {
    res.json({ error: 'invalid url' });
  }
})


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
