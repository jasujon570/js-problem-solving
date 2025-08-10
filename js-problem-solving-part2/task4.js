/**
 * ### Task-4: 

You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.

**Input**

<br>

        const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
        ];

 * 
 */

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
  let sum = 0;
  // console.log(phones);
  for (const phone of phones) {
    // console.log(phone);
    sum += phone.price;
    // console.log(phone.price);
  }
  let avg = sum / phones.length;
  return avg.toFixed(2);
}
const average = findAveragePhonePrice(phones);
console.log(average);

console.log("--------------------------------");

function findavg(phones) {
  let sumof = 0;
  for (const key in phones) {
    // console.log(key);
    sumof += phones[key].price;
  }
  const avgOfPhonePrice = sumof / phones.length; 
  return avgOfPhonePrice.toFixed(2);

}

console.log(findavg(phones));
