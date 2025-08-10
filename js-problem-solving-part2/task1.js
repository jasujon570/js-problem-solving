/* Find the lowest number in the array below.
    const findLowest = [167, 190, 120, 165, 137];
*/

const findLowest = [167, 190, 120, 165, 137];
function LowestNumber(numbers) {
  let minNumber = numbers[0];
  for (const number of numbers) {
    // console.log(number);
    if (number < minNumber) {
      minNumber = number;
    }
  }
  return minNumber;
}

const result = LowestNumber(findLowest);
console.log("The lowest nunber is:", result);
console.log("---------------------------------");

const heighestNumber = [185, 415, 75, 14, 782, 45, 15, 154];
heighestNumber.push(981);
heighestNumber.unshift(1015);

function findBig(numbers) {
  // console.log(heighestNumber);
  let maximum = numbers[0];
  for (const element of numbers) {
    if (element > maximum) {
      maximum = element;
    }
  }
  return maximum;
}

const max = findBig(heighestNumber);
console.log("The heighest number is:", max);
