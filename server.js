const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = 3002;

// use it before all route definitions
// app.use(cors({origin: 'http://localhost:5001'}));
app.use(cors());

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});