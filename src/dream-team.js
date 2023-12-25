const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  console.log('members: ', members);
  let arr = [];
  const res = [];
  members.forEach(element => {
    if (typeof element === 'string') {
      arr.push(element.trim());
    }
  });

  arr.forEach(element => {
    res.push(element[0].toUpperCase());
  });

  return res.sort().join('');
}

module.exports = {
  createDreamTeam
};
