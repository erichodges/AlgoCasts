// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}
module.exports = reverse;















// 3 to wow interviewer (lol)
// return str.split('').reduce((rev, char) => char + rev, '');  //shortened version

// longer version
//   return str.split('').reduce((reversed, character) => {
//   return character + reversed;
//   }, '');


// 2
// let reversed = '';
  
// for (let character of str) {
//   reversed = character + reversed;
// }
// return reversed;


// 1
// return str.split('').reverse().join(''); 