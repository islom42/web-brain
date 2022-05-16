// Data base
/* let user = "Islom1";
let password = 123456;

const checkUser = function (userName, userPassword) {
  return new Promise((resoleve, reject) => {
    setTimeout(() => {
      if (user === userName && userPassword === password) {
        resoleve("Logged in");
      } else reject("Not allawed");
    }, 3000);
  });
};
checkUser("Islom", 123456)
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  }); */
//======================================

let backEnd = "https://api.sampleapis.com/coffee/hot";
// fetch(backEnd)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//======================================
const friends = [
  { name: "Islom", id: 11, coffee: "Cappucino" },
  { name: "Muhammadali", id: 22, coffee: "Black" },
];

function getIngredient() {
  return fetch(backEnd);
}

function checkUser(id) {
  const coffee = friends.find((value) => value.id === id).coffee;
  getIngredient()
    .then((response) => response.json())
    .then((data) =>
      console.log(data.find((value) => value.title === coffee).description)
    )
    .catch((error) => console.log(error));
}
checkUser(22);
