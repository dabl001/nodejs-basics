const comments = require('./data');
const fs = require('fs');
const http = require('http');
const path = require('path');
const qs = require('querystring');

function getPage(req, res) {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(
            path.join(__dirname, './html/comment-form.html'),
            (err, data) => {
                if (err) {
                    console.log(err);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Server error');
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data);
                }
            }
        );
    } else if (req.method === 'GET' && req.url === '/html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello from http server</h1>');
    } else if (req.method === 'GET' && req.url === '/text') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('just a plain text');
    } else if (req.method === 'GET' && req.url === '/comments') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        const responseData = {
            comments: comments,
            addCommentLink: '/',
        };

        res.write(JSON.stringify(responseData));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Page not found</h1>');
    }
}

function postComment(req, res) {
    res.setHeader('Content-Type', 'text/plain');

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        req.on('data', (chunk) => (body += chunk));
        req.on('end', () => {
            try {
                const parsedBody = qs.parse(body);
                // Convert "id" to a number using parseInt
                parsedBody.id = parseInt(parsedBody.id);
                comments.push(parsedBody);
                res.statusCode = 302;
                res.setHeader('Location', '/comments');
                res.end();
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid form');
            }
        });
    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = '';

        req.on('data', (chunk) => (commentJSON += chunk));

        req.on('end', () => {
            try {
                res.statusCode = 200;
                console.log('Received JSON data:', commentJSON);
                comments.push(JSON.parse(commentJSON));
                res.end(`Your comment was received and added to the cache`);
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid JSON');
            }
        });
    } else {
        res.statusCode = 400;
        res.end('Not appropriate content type (JSON format or form needed)');
    }
}

module.exports = { getPage, postComment };
