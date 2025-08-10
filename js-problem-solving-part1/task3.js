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


console.log('--------check which vowels found in the string------------');


function totalVowels(string){
    const vowels = 'aeiouAEIOU';
    let countVowels = 0;
    let foundVowels = [];
    for(const char of string){
        if(vowels.includes(char)){
            countVowels++;
            foundVowels.push(char.toLowerCase());
        }
    }
    console.log('Vowels found in the string:', foundVowels.join(', '));
    return countVowels;
}

const getVowels = 'I love JavaScript';
console.log(totalVowels(getVowels));

