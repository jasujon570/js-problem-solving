function willSuccess(marks) {
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  }
  let countPass = 0;
  let countFails = 0;
  for (const element of marks) {
    if (element >= 50) {
      countPass++;
    } else {
      countFails++;
    }
  }
  if (countPass > countFails) {
    return true;
  }
  return false;
}

console.log(willSuccess([60, 70, 80, 40, 30]));

// simple for loop:

function sucess(marks) {
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  }
  let pass = 0;
  let fail = 0;

  for (i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
      pass++;
    } else {
      fail++;
    }
  }

  return pass > fail;
}

console.log(sucess([60, 70, 80, 40, 30]));

// ternary operator:

function checkSucess(marks) {
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  }

  let totalPass=0; let totalFails=0;
  for (const element of marks) {
    element >= 50 ? totalPass++:totalFails++;
  }
  return totalPass > totalFails;

}
console.log(sucess([60, 70, 80, 40, 30]));

