var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var path = require('path');
var conn = new Sequelize('User' ,'root', '' , {
    dialect: 'mysql',
    'host': "localhost",
    "port": "3006",
    define: {
        timestamps: false
    }
} );
var obj;

var user = conn.define('user_details' , {
    user_id: {type: Sequelize.INTEGER ,primaryKey: true},
    username: Sequelize.STRING,
    first_name: Sequelize.STRING,
    last_name: Sequelize.TEXT,
    gender: Sequelize.STRING,
    password: Sequelize.STRING,
    status: Sequelize.INTEGER
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

//Fetches distinct user count from db
app.get('/getDistinctNames', function(req, res){
    user.findAll({
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('*')), 'WORD_COUNT'],
        'first_name'],
        group: 'first_name'
     }).then(users => {
         res.send(users);
         return users;
    });
});

//groups data by gender from db
app.get('/getDataByGender', function(req, res){
    user.findAll({
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('*')), 'USER_COUNT'],
        'gender'],
        group: 'gender'
     }).then(users => {
         res.send(users);
         return users;
    });
});

//adds user to db
app.use('/addUser', function (req, res) {
  if (!req.body) {
      return res.sendStatus(400);
  }
  user.create(
      req.body
  ).then(data => {
     res.send("data entered ");
  });
});

//gets data from json file
app.get('/getSunburstData' ,function(req, res) {
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('./json/flare.json', 'utf8'));
    res.send(obj);
    return obj;
});

//gets data for treemap
app.get('/treemap' ,function(req, res) {
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('./json/treemap.json', 'utf8'));
    res.send(obj);
    return obj;
});

app.use(express.static(__dirname + '/html'));
// app.listen(process.env.PORT || 4000);
app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, 'html', 'treemap.html'))
});





//FB try
// console.log(passport.authenticate('facebook'));

passport.use(new FacebookStrategy({
    clientID: '145491112763537',
    clientSecret: 'a16f2d8230f42d0446b0a3dd4e01cc81',
    callbackURL: "http://localhost:4000/auth/facebook/callback",
    profileFields: ['feed']
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(profile._raw);
      obj = profile._raw;
        fs.writeFile('./json/test.json', obj , function (err) {
          if (err) throw err;
          console.log('Saved!');
        });

  }
));
app.get('/fb' ,function(req, res) {
    res.send("hi");
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/fb',
                                      failureRedirect: '/' }));
// 
// app.get('/auth/facebook/callback' , function(req , res) {
//     res.send("hello");
//     console.log("hi");
// });
