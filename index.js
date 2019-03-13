// Code your solutions in this file
const printBadges = (arr) => {
  for(let i=0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
  }
  return arr;
}


const tailsNeverFails = () => {
  const flip = () => Math.random() < 0.5 ? "heads" : "tails";
  let i = 0;
  while(flip() === "tails") {
    i++
  }
  return `You got ${i} tails in a row!`;
}

// . If the Math.random() evaluates to less than 0.5, the coin landed on 'Heads', and the 'Tails' streak is broken. At the end of the function, return a message to the user indicating how many times the coin landed on 'Tails' in a row, e.g.:
