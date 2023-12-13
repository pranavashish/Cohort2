/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here

  let vowel = ["a", "e", "i", "o", "u"];
  let counter = 0;
  str = str.toLowerCase();
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (strArr[i] == vowel[j]) {
        counter++;
      }
    }
  }
  return counter;
}

module.exports = countVowels;
