// Code your solutions in this file
function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i]
    console.log(`Welcome ${ele}! You are employee #${i + 1}.`);
  }

  return arr;
}

function tailsNeverFails() {
  let outcomes = 0

  while (true) {
    if (Math.random() >= 0.5) {
      outcomes += 1;
    } else {
      return `You got ${outcomes} tails in a row!`;
    }
  }
}
