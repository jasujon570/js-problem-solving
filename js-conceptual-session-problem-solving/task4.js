// function signature/sample

function cashOut(money) {
  if (money < 0 || typeof money !== "number") {
    return "Invalid";
  }
  result = (money * 1.75) / 100;
  return result;
}
let money = 2000;
const cashoutCharge = cashOut(money);
console.log(`Cashout charge of ${money} Taka is: ${cashoutCharge} Taka.`);

