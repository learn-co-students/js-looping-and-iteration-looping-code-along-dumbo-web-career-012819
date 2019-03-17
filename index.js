// Code your solutions in this file

function printBadges (element){
    for (let i = 0; i < element.length; i++) {
        console.log(`Welcome ${element[i]}! You are employee #${(i + 1)}.`);
    }
    return element;
}


// Creates a function called tails never fails...  no arguments passed in
const tailsNeverFails = () => {
    // initializes tails to 0
    let tails = 0;
// sets up while loop.
while (Math.random() >= 0,5){
    // everytime we flip tails we add one to the counter
    tails ++;
    }
    // Always returns the number of tails you flipped
    return `You got ${tails} in a row!`;
};
