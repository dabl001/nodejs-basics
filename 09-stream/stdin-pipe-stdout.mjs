import { Transform } from 'stream';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

// fs.open(filePath, (err) => {
//     if (err) console.log(err);
//     else console.log('File created');
// });

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const filePath = path.join(__dirname, './html/text.txt');
const writeFile = fs.createWriteStream(filePath);

const upperCaseStream = new Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase();
        cb(null, upperCased);
    },
});

const backwardStream = new Transform({
    transform: function (chunk, encoding, cb) {
        const backwarded = chunk.toString().split('').reverse().join('');
        cb(null, backwarded);
    },
});

process.stdin.pipe(upperCaseStream).pipe(backwardStream).pipe(writeFile);
