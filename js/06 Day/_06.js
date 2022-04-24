//1
let whileI = 1;
while (whileI <= 10) {
  // console.log(whileI);
  whileI++;
}

//2
let oddNumber = 1;
while (oddNumber <= 100) {
  // if (oddNumber % 2) console.log(oddNumber);
  oddNumber++;
}

//3
//for (let i = 1; i <= 100; i++) if (!(i % 2)) console.log(i);

//4
/* function getPyramid(symobol = "*", row = 6, col = 6){
  let i = 0;
  while (i < col){
    console.log(symobol.repeat(row))
    i++
  } 
}
getPyramid(); */

//5
let spaceStr;
let symbol
const getTrianglePyramid = function(sym = "*", num = 10) {
  for(let i = 1; i <= num; i++){
    spaceStr = " ".repeat(num - i)
    symbol = sym.repeat(i * 2 - 1)
    console.log(spaceStr + symbol + spaceStr); 
  }
}
getTrianglePyramid();


