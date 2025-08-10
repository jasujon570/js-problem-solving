/***
 * ### Task-4: 
Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: Programming
 */

const loggestWord = "I am learning Programming to become a programmer";
function loggestString(string) {
  const words = string.split(" ");
  let longWord = string[0];
  for (const word of words) {
    // console.log(word);
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
}

const output = loggestString(loggestWord);
console.log(output);
