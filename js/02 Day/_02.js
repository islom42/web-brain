//! Make random number from 100 and 200
let getRandomNumber = Math.floor(Math.random() * (200 - 100 + 1) + 100);
console.log(getRandomNumber);

//! Return nearest divisible number by 5
let randomNumber = 28;
const DIVISBLE = 5;
console.log(Math.round(randomNumber / DIVISBLE) * DIVISBLE);
