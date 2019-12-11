'use strict'

const mysql = require('mysql')
const express = require('express')
const app = express()
const PORT = 3000

require('dotenv').config();
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  console.log(`Database is ${conn === null ? 'NOT ' : ''}available`);
});