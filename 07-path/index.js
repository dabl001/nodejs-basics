const path = require('path');

const filepath = '/Desktop/Backend/nodeJsBase/07-path/index.js';
const textFilepath = '/Desktop/Backend/nodeJsBase/07-path/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';
console.log(path.isAbsolute(filepath));
console.log(path.isAbsolute(relativePath));

console.log(path.basename(filepath));
console.log(path.basename(directoryPath));

console.log(path.dirname(filepath));
console.log(path.dirname(directoryPath));

console.log(path.resolve(relativePath));

console.log(path.extname(textFilepath));
console.log(path.extname(relativePath));
console.log(path.extname(directoryPath));

console.log(path.parse(filepath));

const parsedPath = path.parse(filepath);
console.log(filepath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
