var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var conn = new Sequelize('wordtranslation' ,'root', '' , {
    dialect: 'mysql',
    'host': "localhost",
    "port": "3006"
} );

var connUser = new Sequelize('user' ,'root', '' , {
    dialect: 'mysql',
    'host': "localhost",
    "port": "3006"
} );


var words = conn.define('words' , {
    word_in_english: Sequelize.STRING,
    translation: Sequelize.TEXT
});

var user = connUser.define({
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

var express = require('express');
var app = express();
app.listen(process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '5mb' }));
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});



app.post('/insertWordInDb', function (req, res) {
  if (!req.body) {
      return res.sendStatus(400);
  }
  words.create(
      req.body
  ).then(data => {
     res.send("data entered ");
  });
});

app.get('/getPreviousData', function(req, res) {
    words.findAll().then(words => {
         res.send(words);
         return words;
    });
});

app.get('/signUp', function(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    user.create(
        req.body
    ).then(data => {
       res.send("data entered ");
    });
});
