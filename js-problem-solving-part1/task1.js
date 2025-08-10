/***
 *
 * ### Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.
 */

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
const celsius = 103
const converted = celsiusToFahrenheit(celsius);
console.log(`${celsius} degree celsius is equal to ${converted} degree fahrenheit`);