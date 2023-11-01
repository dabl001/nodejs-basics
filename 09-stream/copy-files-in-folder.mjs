import fs from 'fs';
import path from 'path';

const sourceDir = './html';
const copiedDir = './html-copy';
const readDir = fs.readdir;

if (!fs.existsSync(sourceDir)) {
    console.warn(`Source dir ${sourceDir} doesn't exists!`);
    console.log('Exiting...');
    process.exit(0);
}

if (fs.existsSync(copiedDir)) {
    console.warn(`Source dir ${copiedDir} exists!`);
    const fileNames = fs.readdirSync(copiedDir);

    fileNames.forEach((fileName) => {
        const filePath = path.join(copiedDir, fileName);
        fs.unlinkSync(filePath);
    });
    fs.rmdirSync(copiedDir);
    // fs.rmdirSync(copiedDir, {recursive: true, force: true});
    console.log('Copied dir removed');
    process.exit(0);
}

console.log('start', performance.now());

fs.mkdirSync(copiedDir);
console.log('Copied dir was created');

fs.readdir(sourceDir, (err, fileNames) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    fileNames.forEach((fileName, i) => {
        const sourceFile = path.join(sourceDir, fileName);
        const copiedFile = path.join(copiedDir, `copy-${fileName}`);

        const readStream = fs.createReadStream(sourceFile);
        const writeStream = fs.createWriteStream(copiedFile);

        readStream.pipe(writeStream);
        writeStream.on('finish', () => {
            console.log(`Copied ${fileName} to ${copiedFile}`);
        });
    });
});

console.log('end', performance.now());
