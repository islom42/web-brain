// Array
let array = ["Webbrain", "Islom", true, 1]
console.log(array);
console.log(array[array.length - 1]); // last index

//! Methods
// push = add from the end
// unshift = add from the start
array.push("End")
console.log(array);
array.unshift("Beginning")
console.log(array);

// pop()= remove from the end
// shift() = remove from the start
array.pop()
console.log(array);
array.shift("Beginning")
console.log(array);

//! concat - add two arrays
let arr1 = ["First", 1]
let arr2 = ["Second", 2]
console.log(arr1.concat(arr2));
//...spread operator
let arr3 = [...arr1, "Smth"]
console.log(arr3);

//! slice vs splice
// Slice - just cuts element array without changing
// Splice - cuts element from array and delet it from original array

//! JSON - JavaScript Object notation
// Json.stringfy = return array to string with []
// Json.parse = return stringfied array original array

//! join()
// Convert array to string + join(*) => with element

//!Split => string to array
let str = "Webbrain academy"
console.log(str.split(' '));

