function calculateSleepTime(times) {
  // You have to write your code here
  totoalTime = 0;

  for (const element of times) {
    if (typeof element !== "number") {
      return "Invalid";
    }
    totoalTime += element;
  }

  let sleepSecond = totoalTime;
  let hour = Math.floor(sleepSecond / 3600);
  sleepSecond = sleepSecond % 3600;
  let minute = Math.floor(sleepSecond / 60);
  sleepSecond = sleepSecond % 60;

  let result = {
    hour: hour,
    minute: minute,
    second: sleepSecond,
  };
  return result;
}

const sleepTime = [100, 3800];
console.log(calculateSleepTime(sleepTime));
