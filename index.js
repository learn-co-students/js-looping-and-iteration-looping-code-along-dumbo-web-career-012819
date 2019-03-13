// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);

  }
  return array
}

function tailsNeverFails() {
  let numOfTimes = 0

  while(headsOrTails()) {
    numOfTimes += 1
  }
  return `You got ${numOfTimes} tails in a row!`
}

function headsOrTails() {
  return Math.random() >= 0.5;
}
