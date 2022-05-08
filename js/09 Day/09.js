//! Advanced array and methods

//reverse
let arr = [1, 2, 3, 4];
console.log(arr.reverse());

//map
arr.map((value, index) => {
  console.log(value, index);
});

//ForEach
arr.forEach((value, index) => {
  console.log(value, index);
});

//Difference map and forEach is return keyword
// it works on map() and it is ARRAY

//sort((a,b) => a - b)
arr.sort();
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//filter() - saralaydi
console.log(
  arr.filter((value, index) => {
    console.log(value % 2 ? value : "not");
  })
);
