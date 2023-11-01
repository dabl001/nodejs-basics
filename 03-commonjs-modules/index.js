const greetingFn = require('./single-export');
const { myName, hobbies, favoriteNum } = require('./multiple-exports');
const {
    myName: myOtherName,
    friendsName,
    myHobbies,
} = require('./export-and-import');
// const greetingFn = require('/Users/abylaidauletkhan/Desktop/Backend/nodeJsBase/03-commonjs-modules/single-export.js');

//imports from multiple-exports
console.log(myName);
console.log(hobbies);
console.log(favoriteNum);

//arrays and objects can be changed from every module/file where exported and imported!
hobbies.push('codding');

//import from single export
console.log(greetingFn);
greetingFn(myName);

//imports from export-and-import
console.log(myOtherName, 'and', friendsName);
console.log(myHobbies);
