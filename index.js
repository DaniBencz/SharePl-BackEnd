'use strict'

const mysql = require('mysql')
const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  //console.log(`Database is ${conn === null ? 'NOT ' : ''}available`);
});