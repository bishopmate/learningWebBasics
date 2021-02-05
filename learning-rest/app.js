const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { config } = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Now we have the ability to create routes
app.get('/', (req, res) => {
  res.send('We are on the home page');
});

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Connect to DB
config();
mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser : true, useUnifiedTopology : true})
.then( () => {app.listen(3000); console.log("Connected to DB")})
.catch( (error) => {console.log(error.message)});
