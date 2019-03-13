// Code your solutions in this file
const printBadges = (empName) => {
  
  for (let i = 0; i < empName.length; i++) {
    console.log(`Welcome ${empName[i]}! You are employee #${i + 1}.`)
  }
  return empName
}

const tailsNeverFails = () => {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}