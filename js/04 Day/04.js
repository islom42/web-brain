"use strict";
// Function and scope

// Function: declaration, expression, arrow
//! Declaration
function calcAgeDec(/* Here is parametr*/ age = 18) {
  // code body
  return age;
}
let calcAgeFunc = calcAgeDec(20);
console.log(calcAgeFunc);

//! Expression
const calcAgeExpress = function (/* Here is parametr*/ age = 18) {
  // code body
  return age;
}
console.log(calcAgeExpress(5));

//! Arrow ES6
const calcAgeArrow = (age =  18) => {
  return age
}
console.log(calcAgeArrow(30));

//===============================================
//!Scope
// Global, block, function
// Global
var globalVar = 'This is global'
//Block
{
  // block scope
  // switch, if, for
  let blockScope = "This is block"
  var functScopeVar = 5
}
console.log(functScopeVar);
// Function scope
const functScope = function(age = 5) {
  var functScopeVar = 5
  return age
}
console.log(functScopeVar);