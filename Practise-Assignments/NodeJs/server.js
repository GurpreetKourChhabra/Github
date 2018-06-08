var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var express = require('express');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 3000);
app.use(bodyParser.json({ limit: '5mb' }));
const post = require('./post.js');
// Add headers

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/getAllPost', function(req, res){
    post.findAll({
        order: [
          ['id', 'DESC']]
      }
    ).then(post => {
         res.send(post);
         return post;
    });
});

app.post('/insertPost', function(req, res) {
  console.log("req.body");
      if (!req.body) {
          return res.sendStatus(400);
      }
        console.log(req.body);

      post.create(
          req.body
      ).then(data => {
        // console.log(data);
         res.send("data entered ");
      });
      // }
    });
// app.get('*', function(req, res){
//   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// });
