// Solving algorithms
//!1
let a = "black";
let b = "white";
let cTepm = a;
a = b;
b = cTepm;
console.log(a, b);

//!2
// Bob Alice
//alice 1  3   5  7   9    ... odd
//bob    2   4  6   8   10  ... even
let step = 12;
console.log(step % 2 === 0 ? "Bob wins" : "Alice Wins");

//!3
let firstName = "Islombek";
let countVowels = 0;
firstName = firstName.toLowerCase();
for (let i = 0; i <= firstName.length; i++) {
  switch (firstName[i]) {
    case "a":
    case "e":
    case "u":
    case "o":
    case "i":
    case "y":
      countVowels++
      break;
  }
}
console.log(countVowels);
