const express = require('express');
const app = express();
const port = 5569;

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`);
})
console.log(require.main === module);
console.log(require.main.filename);
