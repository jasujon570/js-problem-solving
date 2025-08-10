function canPay(changeArray, totalDue) {
  // check if the first input is empty array
  if (Array.isArray(changeArray) && changeArray.length === 0) {
    return "You have no coin to pay!";
  }
  // sum of total coins
  let sum = 0;
  for (item of changeArray) {
    sum = sum + item;
  }
  // check if the total sum of coin is greater than or less than of chips price
  if (sum >= totalDue) {
    return "You can buy the chips";
  } else {
    return "You don't have enough money";
  }

  // another checking option
  //return sum >= totalDue;
}

console.log(canPay([1, 2, 5], 10));
