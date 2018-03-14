// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}




 for (let age = 30; age < 40; age++) {
   console.log(`I'm ${age} years old. Happy birthday to me!`);
 }

function wrapGifts(gifts) {
  for (i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`)
  }
  return gifts;
}

function printBadges(array) {
  for (let i = 0; i < array.length; i++){
  console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array;
}


let countdown = 10;

while (countdown > 0) {
  console.log(--countdown);
}

function tailsNeverFails(){
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
