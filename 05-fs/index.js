// const fs = require('fs');
// const path = require('path');

// filepath = path.join(__dirname, 'first.txt');

// fs.writeFile(filepath, 'First file text', (err) => {
//     if (err) console.log(err);
//     else {
//         console.log('File was written');
//         fs.appendFile(filepath, '\nOne more line', (err) => {
//             if (err) console.log(err);
//             else {
//                 console.log('Appended text');
//                 fs.rename(
//                     filepath,
//                     path.join(__dirname, 'renamed.txt'),
//                     (err) => {
//                         if (err) console.log(err);
//                         else console.log('file was renamed');
//                     }
//                 );
//             }
//         });
//     }
// });
