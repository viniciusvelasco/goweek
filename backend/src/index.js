const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://goweek:goweek123@ds041177.mlab.com:41177/goweek-viniciusvelasco", 
{
  useNewUrlParser: true
});

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
