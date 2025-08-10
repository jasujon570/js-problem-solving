/***
 * ### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2

<br/>

sample-input: 

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

const numbers = [5, 6, 11, 12, 98, 5];

function dupliNumbers(numbers) {
//   console.log(numbers);
  let unique = [];
  for (let number of numbers) {
    if (unique.includes(number) === false) {
      unique.push(number);
    }
  }
  return unique;
}

const duplicateNumbers = dupliNumbers(numbers);
console.log('Here is the unique data:', duplicateNumbers);

console.log('----------------------------');

function countOccurence(numbers, target) {
  let count = 0;
  for (const num of numbers) {
    if (num === target) {
      count++;
    }
  }
  return count;
}

const target = 5;
const result = countOccurence(numbers, target);
console.log(result);

console.log('----------------------------');



function countNumber(numbers, locate){
    let calculate = 0;
    for (const num of numbers) {
        // console.log(num);
        if(num === locate){
            calculate++;
        }
    }
    return calculate;
}

const locate = 25;
const output = countNumber(numbers, locate);
console.log(output);