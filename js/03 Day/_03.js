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
