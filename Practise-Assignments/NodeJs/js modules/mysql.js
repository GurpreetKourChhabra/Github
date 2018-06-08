var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    port: '3006',
    username: 'root',
    password: '',
    database: "world"
});

arr = [];
conn.connect(function(error) {
    if (error) throw error;
    console.log("connected");
    var femaleCount = "SELECT count(*) FROM user_details where gender = 'Female'";
    var maleCount = "SELECT count(*) FROM user_details where gender = 'Male'";

    var chartData = "SELECT first_name, count(*) as COUNT FROM `user_details` GROUP BY first_name";
    // conn.query(femaleCount,function (err, result , fields) {
    // if (err) throw err;
    // console.log(result);
    // });
    //   conn.query(maleCount,function (err, result , fields) {
    //   if (err) throw err;
    //   console.log(result);
    // });

    conn.query(chartData,function (err, result , fields) {
      if (err) throw err;
      result.map(function(data , index) {
          var obj = {
              id: index,
              label: data.first_name ,
              value1: data.COUNT
          }
          arr.push(obj);
      });
      console.log(arr);
    });

});
