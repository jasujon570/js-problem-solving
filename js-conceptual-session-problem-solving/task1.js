// function sum(a,b) {
//     const sum = a + b;
//     const multiply = a * b;
//     const total = sum + multiply;
//     return total;
// }

console.log(sum(4, 5));

function sum(input1, input2) {
  let result = input1 + input2;
  return result;
}

function multiply(input1, input2) {
  let result = input1 * input2;
  return result;
}


let result = sum(4, 5) + multiply(4, 5);
console.log(result);
