// Loops
/* 
Loops are a way to repeat the same code multiple times.
for,while,do while, 
*/
//===================================

/* 
for (begin; condition; step) {
  // ... loop body ...
} 
*/

for (let i = 0; i <= 10; i++) {
  console.log("Hello", i);
}
//reversed
for (let i = 10; i > 0; i--) {
  console.log("Hello", i);
}

//====================================
/* 
While loop
  while (condition) {
    // code
    // so-called "loop body"
  }
*/
let i = 0;
while (i <= 10) {
  console.log("Hello from while loop", i);
  i++;
}

let randomNumber = Math.floor(Math.random() * 1000);
let name1 = "Sardorbek";
let whileI = 0;
while (name1 === "Sardorbek") {
  console.log(whileI);
  whileI++;
  if (whileI === randomNumber) {
    break;
  }
}
//=========================================
/* 
The “do…while” loop
The condition check can be moved below the loop body using the do..while syntax:

do {
  // loop body
} while (condition);

The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again
*/
let doi = 0;
do {
  console.log(doi);
  doi++;
} while (doi < 3);
