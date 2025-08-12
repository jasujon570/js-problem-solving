function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }
  // console.log(contact);
  if (
    contact.length !== 11 || // true
    !contact.startsWith("01") || // false
    contact.includes(" ") // true
  ) {
    return false;
  } else {
    return true;
  }
}


function isContactValid(number) {
  if (typeof number !== "string") {
    return "Invalid";
  }
  if (
    number.length == 11 &&
    number.startsWith("01") === true &&
    number.includes(" ") == false
  ) {
    return true;
  } else {
    return false;
  }
}



function isNumberValid(number) {
  if (typeof number !== "string") {
    return "Invalid";
  }

  if (number.length != 11) {
    return false;
  }
  if (number.startsWith("01") == false) {
    return false;
  }

  if (number.includes(" ") == true) {
    return false;
  }
  return true;
}

console.log(isNumberValid(true));
console.log(validContact(true));
console.log(isContactValid(true));