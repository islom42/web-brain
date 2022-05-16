// Callback, setTimeOut, asyn awit promise

let up = 123456;
let un = "Islom";

function getAccess(usNam, usPas) {
  if (usNam === un && usPas === up) {
    console.log("You are welcome");
  } else {
    console.log("You are not allowed");
  }
}
// getAccess("Islom", 123456);
//=========================================
//=========================================

// => Callback - bu boshqa bir funksiyaga argument sifatida berilgan ikkinchi funksiya.
// let name;
// setTimeout(() => {
//   name = "Islom";
// }, 3000);
// console.log(name);

function getAccess(usNam, usPas, calback) {
  setTimeout(() => {
    if (usNam === un && usPas === up) return calback("Allowed");
    return calback("Not allowed");
  }, 3000);
}

getAccess("Islom", 123456, (message) => {
  console.log(message);
});
//=========================================
//=========================================
