// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

}
module.exports = vowels;





// The recursive solution takes into account that if there is no match the return is null, which is falsy.

// const matches = str.match(/[aeiou]/gi);
// return matches ? matches.length : 0;



// With the iterative solution one can discuss a case where an additional string, such as 'abcd' could be included in the array but could not be included in a string used to check for items

// let count = 0;
// const checker = ['a', 'e', 'i', 'o', 'u'];

// for (let char of str.toLowerCase()) {
//   if (checker.includes(char)) {
//     count++;
//   }
// }
// return count;
