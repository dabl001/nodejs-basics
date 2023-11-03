const express = require('express');
// const http = require('http');

// Without express
// const server = http.createServer((req, res) => {
//     res.end('Response from the server');
// });

const app = express();

app.get('/', (req, res) => res.send('Response from express'));

app.listen(5000, () => console.log('App is listening on port 5000...'));
