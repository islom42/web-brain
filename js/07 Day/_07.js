//!4
function firstLetter(name = "islom") {
  return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
}
// console.log(firstLetter("webbrain"));

//!5
let reverWord = "";
function reversedWord(str = "webbrain") {
  for (let i = str.length - 1; i >= 0; i--) {
    reverWord += str[i];
  }
  return reverWord;
}
// console.log(reversedWord());

//!6
function maxNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num1 && num2 > num3) return num2;
  return num3;
}
// console.log(maxNumber(5, 3, 4));

function minNumber(num1, num2, num3) {
  if (!(num1 > num2 && num1 > num3)) return num1;
  if (num2 < num1 && num2 < num3) return num2;
  return num3;
}
// console.log(minNumber(-60, -55, -5));

//!7
//let string = "#Web##brain# a#cadem#y";
let string = "If I were a perfect developer #job profession#, I could do this exercise #mission# #activity#"
function changeSymbol(str) {
  let count = 1;
  for (let i = 0; i <= str.length; i++) {
    if (count % 2 === 0) {
      count++;
      str = str.replace("#", ")");
    } else {
      count++;
      str = str.replace("#", "(");
    }
  }
  console.log(str);
}
changeSymbol(string);
