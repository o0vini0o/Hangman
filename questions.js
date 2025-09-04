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

const themen = [
  {
    name: "Animals",
    words: [
      "Elefant",
      "Kanguroo",
      "Gecko",
      "Pferd",
      "Biene",
      "Schäferhund",
      "Tiger",
      "Python",
    ],
  },
  {
    name: "Autos",
    words: [
      "BMW",
      "Porsche",
      "Mercedes",
      "Audi",
      "Chevrolet",
      "Daihatsu",
      "Suzuki",
      "Honda",
      "Hyundai",
    ],
  },
  {
    name: "Länder",
    words: [
      "Deutschland",
      "China",
      "Togo",
      "Frankreich",
      "Kanada",
      "Norwegen",
      "Schweden",
      "Finnland",
    ],
  },
  { name: "Obst", words: ["Apfel", "Banana", "...."] },
  { name: "Beruf", words: ["Programmierer", "Web Developer", "Arzt", "...."] },
];

const themeList = themen.map((thema) => thema.name);
const nav = document.querySelector("nav");
themeList.forEach((thema) => {
  const li = document.createElement("li");
  const themaBtn = document.createElement("div");
  themaBtn.textContent = thema;

  themaBtn.addEventListener("click", () => {
    const themaWords = themen.find((th) => th.name === thema).words;
    console.log(themaWords);
  });
  nav.appendChild(themaBtn);
});
let numLastLevel = 0;
let actualQuestion = "";

export function getNewAnimal() {
  const numQuestion = Math.floor(Math.random() * arrAnimals.length);
  actualQuestion = arrAnimals[Math.floor(Math.random() * arrAnimals.length)];
  return actualQuestion;
}
