function sumOfArray(arr) {
  if (Array.isArray(arr) !== true) {
    return "Invalid";
  }
  // console.log(arr);
  let sum = 0;
  for (const num of arr) {
    if (typeof num !== "number") {
      return "Invalid";
    }
    sum += num;
  }
  return sum;
}

const myArray = [1, 2, 3];
const result = sumOfArray(myArray);
// console.log(result);


// using simple for loop

function sumThisArray(theArray) {
//   console.log(theArray);
    let sum = 0;
    for(let i = 0; i < theArray.length; i++){
        sum += theArray[i];
    }
    return sum;
}


const thisIsArray = [12, 25, 36, 445, 14, 7];
const output = sumThisArray(thisIsArray);
console.log(output);

