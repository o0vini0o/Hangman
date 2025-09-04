import { createTastatur } from "./tastatur.js";

createTastatur();
/* Our questions are in arrays */
/* for each type one array for easier handling */

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
      "Kalmar",
      "Boa",
      "Zwergfalke",
      "Alpensteinbock",
      "Atlasfalter",
      "Axolotl",
      "Feuersalamander",
      "Kröte",
      "Australische Hüpfmaus",
      "Blauer Pfau",
      "Ameise",
      "Bartagame",
      "Blattschneiderameise",
      "Jaguar",
      "Vogelspinne",
      "Baikalente",
      "Blauer Morpho",
      "Bonobo",
      "Buntwaran",
      "Dorcasgazelle",
      "Ceylon-Lanzenotter",
      "Erdmännchen",
      "Emu",
      "Fennek",
      "Goldkopf-Löwenäffchen",
      "Großer Ameisenbär",
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
      "Abarth",
      "Academy",
      "Ackerman",
      "Adams",
      "Renault",
      "Citroen",
      "Peugeot",
      "Dacia",
      "Skoda",
      "Alfa Romeo",
      "Amphicar",
      "Ford",
      "Bentley",
      "Bitter",
      "Borgward",
      "Brabham",
      "Brabus",
      "Pontiac",
      "Ganzhong",
      "General Motors",
      "Gemballa",
      "Hainan",
      "Hanomag",
      "Moskwitsch",
      "Nanjing Soyat",
      "Opel",
      "Oldsmobile",
      "Pittsburgh",
      "Plymouth",
      "Polestar",
      "Pullman",
      "Ranger",
      "Rolls-Royce",
      "Saab",
      "Samsung",
      "Fiat",
      "Triumph",
      "Talbot",
      "Tarantula",
      "Tatra",
      "Toyota",
      "Trabant",
      "Wartburg",
      "Vauxhall",
      "Yamaha",
      "Nissan",
      "Maserati",
      "Chrysler",
      "Lancia",
    ],
  },
  {
    name: "Länder",
    words: [
      "Deutschland",
      "China",
      "Togo",
      "Frankreich",
      "Schottland",
      "Kanada",
      "Norwegen",
      "Finnland",
      "Dänemark",
      "Uruguay",
      "Brasilien",
      "Argentinien",
      "Honduras",
      "Ägypten",
      "Tunesien",
      "Marokko",
    ],
  },
  {
    name: "Obst",
    words: [
      "Apfel",
      "Banane",
      "Birne",
      "Pflaume",
      "Himbeere",
      "Erdbeere",
      "Kiwi",
      "Stachelbeere",
      "Zitrone",
      "Limone",
      "Orange",
      "Apfelsine",
      "Kumquat",
      "Quitte",
      "Elsbeere",
      "Mispel",
      "Vogelbeere",
      "Aprikose",
      "Kirsche",
      "Mirabelle",
      "Grapefruit",
      "Pampelmuse",
    ],
  },
  {
    name: "Beruf",
    words: [
      "Programmierer",
      "Web Developer",
      "Arzt",
      "Technischer Zeichner",
      "Modellbauer",
      "Mechatroniker",
      "Automobilkaufmann",
      "Bürokaufmann",
      "Immobilienkaufmann",
      "Justizfachangestellter",
      "Notarfachangestellter",
      "Patentanwaltsfachangestellter",
      "Steuerfachangestellter",
      "Reiseverkehrskaufmann",
      "Fachkraft für Postdienstleistungen",
      "Luftverkehrskaufmann",
      "Schifffahrtskaufmann",
      "Berufskraftfahrer",
      "Hafenschiffer",
      "Aufbereitungsmechaniker",
      "Büchsenmacher",
      "Graveur",
      "Galvaniseur",
      "Feinwerkmechaniker",
      "Schleifer",
    ],
  },
];

const themeList = themen.map((thema) => thema.name);
const nav = document.querySelector("nav");
nav.classList.add("container_question_buttons");

themeList.forEach((thema) => {
  const themaBtn = document.createElement("div");
  themaBtn.textContent = thema;
  themaBtn.classList.add("container_question_button");
  nav.appendChild(themaBtn);

  themaBtn.addEventListener("click", () => {
    const themaWords = themen.find((th) => th.name === thema).words;
    const word = getNewWord(themaWords);

    const answerContainer = document.getElementById("answer-container");
    answerContainer.innerHTML = " ";

    const answerChars = [...word.toUpperCase()];

    answerChars.forEach((letter) => {
      const charContainer = document.createElement("div");
      charContainer.classList.add("letter-card");
      answerContainer.appendChild(charContainer);
    });
  });
});

function getNewWord(words) {
  const actualQuestion = words[Math.floor(Math.random() * words.length)];
  return actualQuestion;
}
