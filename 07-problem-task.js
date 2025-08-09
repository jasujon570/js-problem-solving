function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  }

  if (arr[0] === arr[1]) {
    return "equal";
  }
  return arr.sort((a, b) => b - a);
}

console.log(sortMaker([13, 9]));
