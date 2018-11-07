const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://goweek:goweek123@ds041177.mlab.com:41177/goweek-viniciusvelasco", 
{
  useNewUrlParser: true
});

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
