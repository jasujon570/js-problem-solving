let details = 'This is my limited edition new arrival t-shirt. It was sale on the man showroom yesterday. It is made by pure cotton';
const lowerDetails = details.toLowerCase();
const productDescription = [];

if(lowerDetails.includes('cotton')) {
    productDescription.push('Materials: cotton');
} if(lowerDetails.includes('sale')) {
     productDescription.push('Category: Sale Item');
} if(lowerDetails.includes('new arrival')) {
    productDescription.push('Status: New Arrival');
} if(lowerDetails.includes('limited edition')) {
    productDescription.push('Availability: Limited');
} else {
    productDescription.push('Tag: Default');
}

console.log(productDescription);



let productDetails = 'This is my limited edition new arrival t-shirt. It was sale on the man showroom yesterday. It is made by pure cotton';
const theLowerDetails = productDetails.toLowerCase();
const productDescriptions = [];

if(productDetails.includes('cotton')) {
    productDescriptions.push('Materials: cotton');
} if(productDetails.includes('sale')) {
     productDescriptions.push('Category: Sale Item');
} if(productDetails.includes('new arrival')) {
    productDescriptions.push('Status: New Arrival');
} if(productDetails.includes('limited edition')) {
    productDescriptions.push('Availability: Limited');
} else {
    productDescriptions.push('Tag: Default');
}

console.log(productDescriptions);



// Employee database

let person1 = {
    firstName: 'Kazi',
    lastName: 'Sujon',
    employeeId: 101,
    depertmentCode: 'HR',
    companyName: 'Alphacorp'
}


if(person1.lastName < 3){
    lastThreeCh = person1.lastName.toLowerCase;
} else {
    lastThreeCh = person1.lastName.slice(0, 3).toLowerCase();

}

let result = lastThreeCh + person1.employeeId + '@' + person1.companyName.toLowerCase() + '.com';
console.log('username:', result);

let password = person1.firstName.slice(0, 3).toLowerCase() + '#' + person1.depertmentCode;
console.log('Pwd:', password);


