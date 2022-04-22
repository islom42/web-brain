"use strict";

/* 
let string = 'WebBr@in Ac@demy'
output => WebBrain Academy
*/
let string = "WebBr@in Ac@demy";
string = string.replace(/@/g, 'a');
console.log(string);

//=========================================

/* 
let str = 'Ass#a###lamu al#e#kum
output => Assalamu alekum
*/
let str = "Ass#a###lamu al#e#kum";
str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
console.log(str);

//================================================
// Removing all space beetween words task from during lesson
let stringEmpty = "Assalamu alekum The red fox WebBrain Academy"
console.log(stringEmpty.replace(/ /g, ""));
stringEmpty[0] = "V";
console.log(stringEmpty);