const myName = 'Abylay';
const hobbies = ['swimming', 'boxing', 'cycling'];
const favoriteNum = 99;

// console.log('text from multiple...');

//module.exports and exports reference the same object in memory
module.exports.myName = myName;
exports.hobbies = hobbies;
exports.favoriteNum = favoriteNum;
