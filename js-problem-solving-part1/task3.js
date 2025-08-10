/***
 * ### Task-3: 
Write a function to count the number of vowels in a string.
 */



function countVowels(str){
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (const element of str) {
        if(vowels.includes(element)){
            count++;
        }
    }
    return count;
}

const str = 'I love you';
console.log(countVowels(str));

