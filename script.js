import { createTastatur } from "./tastatur.js";
import { builtHangman } from "./hangman.js";
import { themen } from "./themen.js";

createTastatur();
builtHangman();
/* Our questions are in arrays */
/* for each type one array for easier handling */

window.tryCount = 0;
// create an Array with themen name and display as buttons in nav
const themeList = themen.map((thema) => thema.name);
const nav = document.querySelector("nav");

themeList.forEach((thema) => {
  const themaBtn = document.createElement("div");
  themaBtn.textContent = thema;
  themaBtn.classList.add("container_question_button");

  themaBtn.addEventListener("click", (e) => {
    const allTastatur = document.querySelectorAll(".key");
    document.querySelectorAll(".container_question_button").forEach((btn) => {
      btn.classList.remove("active");
      btn.disabled = false;
    });

    allTastatur.forEach((keyBtn) => {
      keyBtn.classList = ["key"];
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
