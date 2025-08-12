function countVowels(str) {
    if(typeof str !== 'string'){
        return 'Invalid';
    }
  // console.log(str);
  let totalNumbersOfVowels = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == 'a' ||
      str[i] == 'e' ||
      str[i] == 'i' ||
      str[i] == 'o' ||
      str[i] == 'u'
    ) {
      totalNumbersOfVowels++;
    }
  }

  return totalNumbersOfVowels;
}

const result = countVowels('Jhankar miA');
// console.log(result);


console.log('-------------------');

function vowelsCounter(thisIsAString){
    if(typeof thisIsAString !== 'string'){
        return 'Invalid';
    }
    // console.log(thisIsAString);
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (const element of thisIsAString) {
        if(vowels.includes(element)){
            count++;
        }
    }
    return count;
}

console.log(vowelsCounter(["Jhankar miA"]));
