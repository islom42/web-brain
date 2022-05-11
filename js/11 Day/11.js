// Recursive function
//! Normal fucntion with for loop
/* function countDonw(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("Webbrain Academy");
}
countDonw(11); */

//! Recursive function
/* function countDonwRecursive(n) {
  if (n <= 0) {
    console.log("Webbrain academy");
    return;
  }
  console.log(n);
  countDonwRecursive(n - 1);
}
countDonwRecursive(5); */

//================================
//================================

//! Data Unix
/* const data = new Date();
console.log(data.getDate());
console.log(data.getDay());
console.log(data.getFullYear());
console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}
`);

console.log(data.toDateString()); //Thu May 12 2022
console.log(data.toUTCString()); //Wed, 11 May 2022 22:53:31 GMT
console.log(data.toISOString()); //2022-05-11T22:57:05.540Z
console.log(data.getTime()); // comparision true
 */
//================================
//================================

/* var myString = "Item1";

var jsObject = {
  Item1: {
    apples: "red",
    oranges: "orange",
  },
  Item2: {
    bananas: "yellow",
    pears: "green",
  },
};

var keys = Object.keys(jsObject); //get keys from object as an array
console.log(keys);
keys.forEach(function (key) {
  //loop through keys array
  console.log(key, key == myString);
}); */

let data1 = { name: "Islom" };
/*let data2 = data1;
data2 = JSON.parse(JSON.stringify(data2));
data2 = {...data1} // spread operator
data1.name = "Islombek";
console.log(data1, data2); */
//================================
//! Commparing two object
/* let data2 = Object.assign(data1, {});
console.log(data1 === data2);
console.log(JSON.stringify(data1) === JSON.stringify(data2 ));*/
//================================
//================================
//! Curry function
/* function fFunction() {
  return function () {
    return function () {
      return "Hello from third function";
    };
  };
} */
/* let first = fFunction();
let second = first();
console.log(second()); */
// console.log(fFunction()()());
//================================
//================================
// IIFE = An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog
(function () {
  /* ... */
})();
//====================
(() => {
  /* ... */
})();
//====================
(async () => {
  /* ... */
})();

/* (function () {
  console.log("Hi I am IIFE");
})(); */

//================================
//================================
//! Arguments and rest argument
//! Arguments do not work in arrow function
/* (function () {
  console.log(arguments);
  console.log(Array.from(arguments)); // returns to array
})(1, 2, 3); // retrun object

(function (...arg) {
  console.log(arg); //returns array
})(1, 2, 3); */
//================================
//================================
//! Try catch finally
let name = "Islom";
// console.log(name);
try {
  throw new SyntaxError("Ooops smth is wrong");
} catch (error) {
  console.log("Please do not make mistake ");
  console.log(error.message);
} finally {
  console.log("info inside catch{} will appear before info inside try{}");
}
console.log(name);
