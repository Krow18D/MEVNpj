//api
const express = require("express")
const users = express.Router()
const cors = require("cors")
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "user"
});
users.use(cors())

users.post("/register", (req, res) => {
  const data = [
    req.body.username,
    req.body.password,
    req.body.role
  ]


  //add to db
  con.connect(function (err) {

    console.log("Connected!: Checking");
    con.query(`SELECT USERNAME FROM user_table WHERE USERNAME = '${data[0]}'`, function (err, result) {
      console.log(data)
      if (err) throw err;

      if (result.length > 0) {
        message = "Username already exits"
        res.send(message)
        console.log("Username is already exits")
      } else {
        console.log("Add Data to DB");
        var sql = `INSERT INTO user_table (USERNAME,PASSWORD,ROLE) VALUES ('${data[0]}','${data[1]}','${data[2]}')`;
        console.log(sql)
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
        res.send()
      }

    });
  });
  //
})


module.exports = users