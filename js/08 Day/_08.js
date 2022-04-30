//!1
let array = [2, 4, 1, 3, 5,];
function getHalf(arr) {
  let evenArray = (arr[(arr[Math.ceil(arr.length / 2)] + arr[Math.ceil(arr.length / 2) - 1]) / 2])
  if (!(arr.length % 2))  return evenArray;
  return arr[Math.trunc(arr.length / 2)];
}
console.log(getHalf(array));

//!2
let arrayNum = [6, 44, 7, 2, 9];
let evenNums = [];
function getEvenNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2)) evenNums.push(arr[i])
  }
  return evenNums;
}
console.log(getEvenNumber(arrayNum));

//!3

let arr = ["Najot", "MIT", "Webbrain", "PDP", "INTEGER", "WBA",];
arr.splice(1, arr.length - 2)
console.log(arr);

/* function getFirstAndLast(arr) {
  let slicedString = `${arr.slice(0, 1)} ${arr.slice(arr.length - 1)}`
  return slicedString.split(" ")
}
console.log(getFirstAndLast(arr)); */