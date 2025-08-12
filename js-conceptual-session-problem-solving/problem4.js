function validProposal(input1, input2) {
    if (
      input1.gender === input2.gender &&
      Math.abs(input1.age - input2.age) > 7
    ) {
      return false;
    }
    return true;

  // if (
  //   input1.gender !== input2.gender &&
  //   Math.abs(input1.age - input2.age) >! 7
  // ) {
  //   return true;
  // }
  // return false;
}
console.log(
  validProposal(
    { name: "Rahul", gender: "male", age: 28 },
    { name: "Joya", gender: "female", age: 21 }
  )
);
