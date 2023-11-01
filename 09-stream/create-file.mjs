import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

if (!process.argv[2] || !process.argv[3]) {
    console.log('waiting for arguments...');
    process.exit(0);
}

const fileName = process.argv[2];
const linesNum = parseInt(process.argv[3]);
if (isNaN(linesNum)) {
    console.log('linesNum should be number');
    process.exit(0);
}

const filePath = path.join(__dirname, `./html/${fileName}`);

const writeStream = fs.createWriteStream(filePath);

console.log('start', performance.now());

for (let i = 1; i <= linesNum; i++) {
    writeStream.write(`This is line #${i}\n`);
}

writeStream.end(() => {
    console.log(`File ${fileName} with ${linesNum} lines was created`);
});

console.log('end', performance.now());
setTimeout(() => console.log('Timeout', performance.now(0)));
