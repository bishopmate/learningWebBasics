var animals = require('./animals');
const express = require('express');
const app = express();
const PORT = 5569;
app.get('/', function homeGet(req, res){
  res.send('Hello');
  res.end();
})
app.use('/animals', animals);
app.listen(PORT, ()=>{
  console.log(`Listening at port ${PORT}`);
})