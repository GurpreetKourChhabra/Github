var nodemailer = require('nodemailer');
var http = require("http");

http.createServer(function(request , response) {
var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port:25,
  auth: {
    user: 'gurpreetkourchhabra@gmail.com'
  },
  tls : {
      rejectUnauthorized: false
  }
});

var mailOptions = {
  from: 'gurpreetkourchhabra@gmail.com',
  to: 'sonirashmi01910@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}).listen(8080);
