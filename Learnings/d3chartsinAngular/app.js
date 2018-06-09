var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');
var conn = new Sequelize('User' ,'root', '' , {
    dialect: 'mysql',
    'host': "localhost",
    "port": "3006",
    define: {
        timestamps: false
    }
} );


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

app.get('/getSunburstData' ,function(req, res) {
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('./src/assets/json/flare.json', 'utf8'));
    res.send(obj);
    return obj;
});

app.get('/treemap' ,function(req, res) {
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('./src/assets/json/treemap.json', 'utf8'));
    res.send(obj);
    return obj;
});

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
