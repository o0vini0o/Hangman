/* Our questions are in arrays */
/* for each type one array for easier handling */
const arrAnimals = [
  "Gecko",
  "Pferd",
  "Schäferhund",
  "Biene",
  "Tiger",
  "Python",
];
let numLastLevel = 0;
let actualQuestion = "";

function getNewAnimal() {
  const numQuestion = Math.floor(Math.random() * arrAnimals.length);
  actualQuestion = arrAnimals[Math.floor(Math.random() * arrAnimals.length)];
  alert(actualQuestion);
}
