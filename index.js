'use strict'

const mysql = require('mysql')
const express = require('express')
const app = express()
const PORT = 3000
const path = require('path') //optional

require('dotenv').config();
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true
});

//optional, if you don't send .html
//without it, .html won't have access to other files in assets folder, such as pictures
app.use(express.static('assets'));

// custom middleware
const LoggerMiddleware = (req,res,next) =>{
  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
  next()
}
app.use(LoggerMiddleware)

app.get('/', (req, res) => {
  //same as: res.sendFile(__dirname + '/assets/HelloCat.html')
  res.sendFile(path.join(__dirname, 'assets/HelloCat.html'))
  //res.send(__dirname + '/assets/how-cat-rolls.jpg') //sends string
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  console.log(`Database is ${conn === null ? 'NOT ' : ''}available`);
});