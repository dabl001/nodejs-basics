const fs = require('fs/promises');
const path = require('path');

filepath = path.join(__dirname, 'first.txt');

fs.writeFile(filepath, 'First file text')
    .then(() => console.log('File was written'))
    .then(() => fs.appendFile(filepath, '\nOne more line'))
    .then(() => console.log('Appended text'))
    .then(() => fs.rename(filepath, path.join(__dirname, 'renamed.txt')))
    .then(() => console.log('file was renamed'))
    .catch((err) => console.log(err));
