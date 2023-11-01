import fs from 'fs';

const fileName = './html/test.txt';
const copiedFile = './html/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFile);

readStream.pipe(writeStream);

readStream.on('end', () => console.log('Read stream ended'));
writeStream.on('finish', () => console.log('File was copied'));
writeStream.on('close', () => console.log('Write stream closed'));
