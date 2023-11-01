import EventEmitter from 'events';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fileEmitter = new EventEmitter();

const filepath = path.join(__dirname, 'first.txt');

fileEmitter.on('finishedWriting', () => {
    console.log('File was written');
    fs.appendFile(filepath, '\nOne more line', () => {
        fileEmitter.emit('finishedAppending');
    });
});

fileEmitter.on('finishedAppending', () => {
    console.log('File was appended');
    fs.rename(filepath, path.join(__dirname, 'renamed.txt'), () => {
        fileEmitter.emit('finishedRenaming');
    });
});

fileEmitter.on('finishedRenaming', () => {
    console.log('file was renamed');
});

fs.writeFile(filepath, 'First file text', () => {
    fileEmitter.emit('finishedWriting');
});
