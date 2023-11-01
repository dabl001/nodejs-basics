const http = require('http');
const { getPage, postComment } = require('./handlers');
const comments = require('./data');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        getPage(req, res);
    } else if (req.url === '/html') {
        getPage(req, res);
        res.end();
    } else if (req.url === '/text') {
        getPage(req, res);
        res.end();
    } else if (req.url === '/comments') {
        if (req.method === 'GET') {
            getPage(req, res);
            return res.end();
        }
        if (req.method === 'POST') {
            return postComment(req, res);
        }
    } else {
        getPage(req, res);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
