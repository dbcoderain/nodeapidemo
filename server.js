const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});