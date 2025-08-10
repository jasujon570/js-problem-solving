/* Find the lowest number in the array below.
    const findLowest = [167, 190, 120, 165, 137];
*/

const findLowest = [167, 190, 120, 165, 137];
function LowestNumber(numbers){
    let minNumber = numbers[0];
    for (const number of numbers) {
        // console.log(number);
        if(number < minNumber){
            minNumber = number;
        }
    }
    return minNumber;
}

const result = LowestNumber(findLowest);
console.log('The lowest nunber is:', result);
