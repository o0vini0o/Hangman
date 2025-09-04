import { createTastatur } from "./tastatur.js";

createTastatur();
/* Our questions are in arrays */
/* for each type one array for easier handling */

window.tryCount = 0;

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

  themaBtn.addEventListener("click", () => {
    document.querySelectorAll(".container_question_button").forEach((btn) => {
      btn.classList.remove("active");
      btn.disabled = false;
    });

    document.querySelectorAll(".key").forEach((keyBtn) => {
      keyBtn.classList.remove("unactive");
      keyBtn.disabled = false;
    });

    themaBtn.classList.add("active");
    themaBtn.disabled = true;

    document.getElementById("selected-theme").textContent = thema;

    const themaWords = themen.find((th) => th.name === thema).words;
    window.word = getNewWord(themaWords);

    const answerContainer = document.getElementById("answer-container");
    answerContainer.innerHTML = " ";

    const answerChars = [...window.word.toUpperCase()];

    answerChars.forEach((letter) => {
      const charContainer = document.createElement("div");
      charContainer.classList.add("letter-card");
      answerContainer.appendChild(charContainer);
    });
  });

  nav.appendChild(themaBtn);
});

function getNewWord(words) {
  const actualQuestion = words[Math.floor(Math.random() * words.length)];
  return actualQuestion;
}
