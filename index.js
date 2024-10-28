require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})