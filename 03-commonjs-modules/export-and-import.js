const { myName, hobbies } = require('./multiple-exports');

const friendsName = 'Stich';

module.exports.myName = myName;
module.exports.friendsName = friendsName;
//property names could be different from the variable names
module.exports.myHobbies = hobbies;
