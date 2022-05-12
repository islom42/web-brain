//! 1 Parol encoding
let input = "A3B2C3A5";
//output AAABBCCCA

function showEncoding(str) {
  let output = str
    .split("")
    .map((value, index, arr) =>
      value > 0 ? arr[index - 1].repeat(value - 1) : value
    )
    .join("");

  console.log(output);
}
showEncoding(input);
//========================================================
//=============================================
//!2 delete from array
let array = ["olma", "apelsin", "banan"];

function deleteMeva(arr, val) {
  val = val.toLowerCase();
  arr.map((value) => {
    val === value ? arr.splice(arr.indexOf(val), 1) : "Not found";
  });
  return arr;
}
// console.log(deleteMeva(array, "Olma"));
//=============================================

//! Birinchi kelgan juflik
let str = "ABBACC";
function getSame(str) {
  let first = str.split("");
  for (let i = 0; i <= first.length; i++) {
    if (first[i] === first[i + 1]) {
      console.log(first[i]);
      break;
    }
  }
}
// getSame(str);
