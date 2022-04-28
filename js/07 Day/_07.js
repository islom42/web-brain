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
console.log(reversedWord());

//!6
function maxNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num1 && num2 > num3) return num2;
  return num3;
}
console.log(maxNumber(5, 3, 4));

function minNumber(num1, num2, num3) {
  if (!(num1 > num2 && num1 > num3)) return num1;
  if (num2 < num1 && num2 < num3) return num2;
  return num3;
}
console.log(minNumber(-60, -55, -5));

//!7
let string = "#Web##brain# academy";
let newString = " "
function changeSymbol(sym1 = "(", sym2 = ")") {
  return string.replace("#", sym1).replace("#", sym2).replace("#", sym1).replace("#", sym2)
}

console.log(changeSymbol(string));
