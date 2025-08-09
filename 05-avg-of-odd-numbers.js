function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const number of odds) {
    sum += number;
  }

  const oddsLength = odds.length;
  const avg = sum / oddsLength;
  return avg;
}
const numbers = [15, 25, 32, 45, 82, 92, 78, 62, 68, 64, 91, 31, 71];
const avg = oddAverage(numbers).toFixed(2);
console.log("Average of the odd numbers is:", avg);
