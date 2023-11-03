const express = require('express');

const app = express();

const firstHandler = (req, res, next) => {
    console.log('Response from first handler');
    next();
};
const secondHandler = (req, res) => {
    console.log('second handler');
    res.send('Response from second handler');
};

app.get('/', firstHandler, secondHandler);

app.listen(5000, () => console.log('App is listening on port 5000...'));
