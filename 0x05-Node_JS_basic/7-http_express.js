const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let dbInfo = 'This is the list of our students\n';
  await countStudents(process.argv[2])
    .then((msg) => {
      dbInfo += msg;
      res.send(dbInfo);
    })
    .catch((err) => {
      res.send('Cannot load the database');
    });
});

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
