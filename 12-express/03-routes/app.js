const express = require('express');
const router = require('./routes/index');

const app = express();

app.use(router);

app.listen(5000, () => console.log('App is listening on port 5000...'));
