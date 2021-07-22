
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");

const router = require('./Routes');

mongoose.connect(process.env.MONGOURL,{ useNewUrlParser: true ,useUnifiedTopology: true})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());


app.use('/api',router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});