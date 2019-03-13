// Code your solutions in this file



const names = ["Ada", "Shemar", "Cris"]


const printBadges = params => {
  let i = 0
  for (const element of params) {
    i++
    console.log("Welcome " + element + "! You are employee #" + i + ".");
  }

  return params;
}

printBadges(names)


const tailsNeverFails = () => {
  let tails = 0;
  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}

tailsNeverFails()