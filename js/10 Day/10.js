// ! Objects
let person = {
  name: "Islom",
  age: 20,
  languages: ["uz", "ru", "eng", "turk"],
  greet() {
    return `User age is ${this.age} and name is ${this.name}`; // this is method in object
  },
  ["this is complex key"]: "with brackets",
};
/* console.log(person.greet());
console.log(person["this is complex key"]); */

//=================================================

//! getting key and value Object.entries()
/* const newPerson = Object.entries(person);
const newP = newPerson.map((p) => {
  console.log(p);
}); */
//=================================================

//! Object.keys()
/* console.log(
  Object.keys(person).map(function (n) {
    console.log(n);
  })
); */
//=================================================

//! Object.values()

console.log(
  Object.values(person).forEach((n) => {
    console.log(n);
  })
);
