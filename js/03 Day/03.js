"use strict";

//! String methods
// indexOf, lastIndexOf, search, includes
// slice, substring, substr
let text =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
/*  
indexOf() - indexOf(searchString: string, position?: number)
String - Returns the position of the first occurrence of a substring. 
Number - The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
If it is not returns -1
*/
console.log(text.indexOf("brown", 10));

/* 
lastIndexOf() - The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.
*/
console.log(text.lastIndexOf("dog", 51));

/* search() -  it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern */
console.log(text.search("dog")); // not second argument

/* includes() = It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false. */
console.log(text.includes("fox"));

//============================================

/* 
  slice() - Returns the part of the string from start to (but not including) end.
*/
console.log(text.slice(40, 44)); // where, end 40, 41 , 42 < 43

/* 
  substring() - not negative number like slice
  str.substring(start [, end])
  Returns the part of the string between start and end.
*/
console.log(text.substring(0, 43));

/* 
  substr(start, length)	from start get length characters. Allows negative start
*/
console.log(text.substr(-1, 44));