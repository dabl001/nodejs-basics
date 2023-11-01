import http from 'http';
import fs from 'fs';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        const filePath = path.join(__dirname, './html/index.html');
        const readStream = fs.createReadStream(filePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        readStream.pipe(res);
    }
    if (req.url === '/no-stream' && req.method === 'GET') {
        const noStreamPath = path.join(__dirname, './html/no-stream.html');
        fs.readFile(noStreamPath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading file on server');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    }
});

server.listen(5000, () => {
    console.log('Server is listening at port 5000...');
});
