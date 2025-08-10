/**
 * ### Task-5: 
Generate a random number between 10 to 20.
 */
// * RandomInt=Math.floor(Math.random() * (max - min + 1)) + min
// Random number generate a number (0 to 1) 0 inclusive and 1 exclusive


    const randomNumber = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    console.log('A random number between 10 to 20 is:',randomNumber);