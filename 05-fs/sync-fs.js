const fs = require('fs');
const path = require('path');

try {
    filepath = path.join(__dirname, 'first.txt');

    fs.writeFileSync(filepath, 'First file text');
    console.log('File was written');

    fs.appendFileSync(filepath, '\nOne more line');
    console.log('Appended text');

    fs.renameSync(filepath, path.join(__dirname, 'renamed.txt'));
    console.log('file was renamed');
} catch (err) {
    console.log(err);
}

// fs.writeFile(filepath, 'First file text')
//     .then(() => console.log('File was written'))
//     .then(() => fs.appendFile(filepath, '\nOne more line'))
//     .then(() => console.log('Appended text'))
//     .then(() => fs.rename(filepath, path.join(__dirname, 'renamed.txt')))
//     .then(() => console.log('file was renamed'))
//     .catch((err) => console.log(err));
