/* let sum = 0; */
/* let person = 0; */
/* let data = [
  { name: "John", age: 20 },
  { name: "John", age: 30 },
  { name: "John", age: 25 },
]; */
/* let obj = data.map((value) => {
  person++;
  sum += value.age;
}); */
/* console.log(`There are ${person}, and total age ${sum}`) */ //!

//====================================
/* let sumOfAges = 0;
const dataOfUser = [
  {
    name: "Joe",
    age: 42,
  },
  {
    name: "Mia",
    age: 12,
  },
  {
    name: "Mae",
    age: 2,
  },
  {
    name: "Doe",
    age: 53,
  },
  {
    name: "Kate",
    age: 19,
  },
];

const getAge = function (data) {
  data.forEach((person) => {
    sumOfAges += person.age;
  });
  return sumOfAges;
};
console.log(getAge(dataOfUser)); */

//====================================

/* let sumOfAges = 0;
const dataOfUser = [
  {
    name: "Joe",
    age: 42,
  },
  {
    name: "Mia",
    age: 12,
  },
  {
    name: "Mae",
    age: 2,
  },
  {
    name: "Doe",
    age: 53,
  },
  {
    name: "Kate",
    age: 19,
  },
];

const getAge = function (data) {
  data.forEach((person) => {
    person.age % 2 ? (sumOfAges += person.age) : "even number";
  });
  return sumOfAges;
};
console.log(getAge(dataOfUser)); */

//====================================

const dataOfUser = [
  {
    name: "joe",
    age: 42,
  },
  {
    name: "mia",
    age: 12,
  },
  {
    name: "mae",
    age: 2,
  },
  {
    name: "doe",
    age: 53,
  },
  {
    name: "kate",
    age: 19,
  },
];
let firsChar = "";
const getUpperCaseFirstLetter = function (data) {
  data.map((person) => {
    console.log(
      person.name[0].toUpperCase() + person.name.slice(1, person.name.length)
    );
  });
};
getUpperCaseFirstLetter(dataOfUser);
