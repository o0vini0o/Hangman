import { tastatur } from "./components/tastatur.js";
export const createTastatur = () => {
  const myTastatur = document.getElementById("my-tastatur");
  const tastEl = document.createElement("article");
  tastEl.classList.add("keyboard");

  tastatur.forEach((letter, index) => {
    const btn = document.createElement("button");
    btn.textContent =
      index === tastatur.length - 1 ? letter : letter.toUpperCase();
    btn.classList.add("key");
    btn.classList.add("unactive");
    btn.disabled = true;
    tastEl.appendChild(btn);
  });

  myTastatur.appendChild(tastEl);

  const answerC = document.getElementById("char-container");

  const keys = document.querySelectorAll(".key");
  keys.forEach((key, index) => {
    if (index >= 24) {
      key.style.gridColumnStart = index - 22;
    }

    /*themaBtn.addEventListener("click", () => {
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
  */

    key.addEventListener("click", () => {
      key.classList.add("pressed");
      console.log(window.word);
      if (!window.word) return;

      const answerChars = [...window.word.toUpperCase()];
      const slots = document.querySelectorAll(".letter-card");
      let count = 0;

      let found = false;
      const keyPressed = key.textContent;

      answerChars.forEach((char, index) => {
        if (char === keyPressed) {
          slots[index].textContent = char;
          found = true;
        }
      });

      if (!found) {
        window.tryCount++;
        key.classList.add("wrong");
      } else {
        key.classList.add("correct");
      }

      setTimeout(() => {
        key.classList.remove("pressed");
      }, 100);

      //key.classList.add("unactive");
      key.disabled = true;

      slots.forEach((slot) => {
        if (slot.textContent !== "") count++;
      });

      if (count === slots.length) {
        alert("Gluckwunssch 🎉");
        document.querySelectorAll(".key").forEach((k) => {
          if (!k.classList.contains("correct")) {
            k.disabled = true;
            k.classList.add("unactive");
          }
        });
      }
    });
  });
};
