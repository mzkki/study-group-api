const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// server port
const port = 3000;

// route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
})

// starting server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})