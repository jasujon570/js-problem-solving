/* Find the lowest number in the array below.
    const heights2 = [167, 190, 120, 165, 137];
*/

const numbersArr = [167, 190, 120, 165, 137, 10];
numbersArr.push(4);
function lowestNumber(numbers){
        let minNumber = numbers[0];
        for (const number of numbers) {
            if(number < minNumber){
                minNumber = number;
            }
        }
        return minNumber;
    }



const min = (lowestNumber(numbersArr));
console.log('Lowest number is:',min);