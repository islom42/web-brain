//! 1) str1 va str2 stringlar berilgan agar str1 va str2 uzunligi bir biriga teng bolsa str1 ni aks holda str2 ni qaytaruvchi funksiya tuzing
const isEqual = function (str1 = "String 1", str2 = "String 2") {
  return str1.length === str2.length ? str1 : str2;
};
// console.log(isEqual("str1", "str2"));

//! 2)
/* string berilgan uning oxirgi va boshidagi qiymatlarni olib tashlang
   remove("Hello") => ell
   remove('abs') => b
   remove('va') => '' */
const removeIndex = function (str = "Islom") {
  return str.slice(1, str.length - 1);
};
// console.log(removeIndex("va"));

//! 3)
/* 
String(str) va number(n) berilgan agar n toq son bolsa str ning oxirgi n tasini n marta qaytaruvchi agar n juft bolsa boshidagi n ta elementni n marta qaytaruvchi funksiya yozing agar n, str uzunligidan katta bolsa n/str.length ga bolgandagi qoldiq olinsin

   repeatStr('webbrain',3) =>ainainain
   repeatStr('webbrain',2) => wewe
   repeatstr('code',10) => coco {code.length=4 10/4 ning qoldigi 2)
*/
const repeatStr = function (str, n) {
  if (n > str.length) {
    let dNumber = Math.trunc(n / str.length);
    return str.slice(0, 2).repeat(dNumber);
  } else if (n % 2 === 0) {
    return str.slice(0, 2).repeat(n);
  } else {
    return str.slice(str.length - n, str.length).repeat(n);
  }
};
// console.log(repeatStr('webbrain', 3));
// console.log(repeatStr('webbrain', 2));
// console.log(repeatStr("code", 10));

//!4
const getDayOfWeek = function (num = 5) {
  if (typeof num === "number") {
    switch (num) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesdat";
      case 4:
        return "Thusday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid number";
    }
  } else {
    return "Plese enter number";
  }
};
// console.log(getDayOfWeek());

//!5 Check if number odd or even
const checkNumber = function (num = 2) {
  num = Math.abs(num);
  return num % 2 === 0 ? "even" : "odd";
};
// console.log(checkNumber(3));

//!6 Find max beetween two numbers
const getMaxOfTwo = function (num1 = 2, num2 = 2) {
  return num1 > num2 ? num1 : num1 === num2 ? "they are equal" : num2;
};
// console.log(getMaxOfTwo(55, 55));

//!7 Find max beetween three numbers
const getMaxOfThree = function (num1 = 7, num2 = 5, num3 = 3) {
  return num1 > num2 && num1 > num3
    ? num1
    : num2 > num1 && num2 > num3
    ? num2
    : num3;
};
// console.log(getMaxOfThree(10, 12, 13));

//! 8
/* 
Write a JS programm to input marks of five subjects Phsics, Chemistry, Biology, mathematics and Computer.
   Calculate percentage and grade according to following:
   Percentage >= 90% : Grade A
   Percentage >= 80% : Grade B
   Percentage >= 70% : Grade C
   Percentage >= 60% : Grade D
   Percentage >= 40% : Grade E

   Percentage <> 40% : Grade F
*/
let marks = [89, 89, 89, 89, 89];
let averageMark = 0;

const getAverageMark = function (marks) {
  for (let mark of marks) {
    averageMark += mark / marks.length;
  }
  return averageMark;
};

// calculate persantage
const calcPersangeOfMark = function (mark) {
  console.log(`Average mark in persantage ${mark}`);
  if (mark < 60) return "E";
  if (mark < 70) return "D";
  if (mark < 80) return "C";
  if (mark < 90) return "B";
  return "A";
};
console.log(calcPersangeOfMark(getAverageMark(marks)));
