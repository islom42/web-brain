// CRUD - create, read, update, delete
const students = [
  { id: 1, status: "BS", name: "Islom Numanov" },
  { id: 2, status: "BS", name: "Ergashev Durbek" },
  { id: 3, status: "CS", name: "Shamirboyev Muhammadbobur" },
  { id: 4, status: "IT", name: "Butaev Khusan" },
  { id: 5, status: "BS", name: "Ahmadaliyeva Dilorom" },
  { id: 6, status: "BS", name: "Mahsudov Ilhom" },
  { id: 7, status: "CS", name: "Shermatova Dilbar" },
  { id: 8, status: "BS", name: "Musurmonkulov Oybek" },
  { id: 9, status: "IT", name: "Mahmudov Asadbek" },
];

//! create - add
const createObj = (id, status, name) => ({ id, status, name });

function addStudent(obj) {
  students.push(obj);
  return students;
}
console.log(addStudent(createObj(10, "IT", "Mukhtorov Sardorbek")));
console.log(addStudent(createObj(11, "BS", "Akhmadjonova Nozima")));