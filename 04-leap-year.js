function isLeapYear (year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0){
        return true;
    }else {
        return false;
    }
}

console.log(isLeapYear(2032));


// Ternary Operator


function isLeapYear2(year){
   return ((year % 4===0 && year % 100 !==0) || year % 400 ===0) ? (`The ${year} is a leap year`): (`The ${year} is not a leap year`);
}

console.log(isLeapYear2(2032));