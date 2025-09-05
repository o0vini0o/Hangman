import { imagesHangman } from "./imagesHangman.js";
import { themen } from "./themen.js";
export const createThemenList = () => {
  /* Our questions are in arrays */
  /* for each type one array for easier handling */
  const nav = document.querySelector("nav");

  const themeList = themen.map((thema) => thema.name);

  themeList.forEach((thema) => {
    const themaBtn = document.createElement("div");
    const img = document.getElementById("hangman");
    themaBtn.textContent = thema;
    themaBtn.classList.add("container_question_button");

    themaBtn.addEventListener("click", (e) => {
      const keys = document.querySelectorAll(".key");
      document.querySelectorAll(".container_question_button").forEach((btn) => {
        btn.classList.remove("active");
        btn.disabled = false;
      });
      // keyboard init
      keys.forEach((keyBtn) => {
        keyBtn.classList = ["key"];
        keyBtn.disabled = false;
      });
      // count and hangman init
      window.tryCount = 0;
      img.src = imagesHangman[window.tryCount];
      // result container init
      const resultContainer = document.querySelector(".result-container");
      if (resultContainer) resultContainer.remove();
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
        if (letter === "-" || letter === " ") {
          charContainer.textContent = letter;
          charContainer.classList.add("space-card");
        }
        charContainer.classList.add("letter-card");
        answerContainer.appendChild(charContainer);
      });
    });
    nav.appendChild(themaBtn);
  });
};

function getNewWord(words) {
  const actualQuestion = words[Math.floor(Math.random() * words.length)];
  return actualQuestion;
}
