// If else, switch, ternary
let a = 55;
let b = 7;
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
// ========
switch (a) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesdat");
    break;
  case 4:
    console.log("Thusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid number");
}
//========================================
// Ternary
console.log(a === b ? "yes" : "no");
