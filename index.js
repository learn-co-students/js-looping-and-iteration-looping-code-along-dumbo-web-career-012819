// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  }
  return names;
}


function tailsNeverFails() {
  let i = 0;
  while (tails()){
    i++
  }
  return `You got ${i} tails in a row!`;
}
function tails(){
  if (Math.random() >= 0.5){
    return true
  }
  else {
    return false
  }
}
