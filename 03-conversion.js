
// 1 feet to 12 inch

function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feet = parseInt(feetFraction);
    const remainingInch = inch % 12;
    const result = feet + ' ft ' + remainingInch + ' inch. '
    return result;
}

console.log(inchToFeet(75));