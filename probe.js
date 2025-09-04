import { imagesHangman } from "./components/imagesHangman.js";
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

  const keys = document.querySelectorAll(".key");

  const img = document.getElementById("hangman");
  const slots = document.querySelectorAll(".letter-card");
  let tryCount = 1;
  keys.forEach((key, index) => {
    if (index >= 24) {
      key.style.gridColumnStart = index - 22;
    }

    key.addEventListener("click", () => {
      key.classList.add("pressed");
      console.log(window.word);
      if (!window.word) return;
      const wordToFind = window.word.toUpperCase();
      const letterPressed = key.textContent;

      if (wordToFind.includes(letterPressed)) {
        // find letter in word
        key.classList.add("correct");

        // render letter card in answer card

        [...wordToFind].forEach((char, index) => {
          if (char === letterPressed) {
            slots[index].textContent = char;
          }
        });
      } else {
        // don't find letter in word
        key.classList.add("wrong");
        // render hangman image
        if (tryCount < imagesHangman.length - 1) {
          img.src = imagesHangman[tryCount];
          tryCount++;
        } else {
          img.src = imagesHangman[tryCount];
          setTimeout(() => {
            alert("You lost!");
            disableAllKeys();
          }, 100);
          tryCount = 0;
        }
      }
    });
  });
  const disableAllKeys = () => {
    keys.forEach((key) => {
      key.classList = ["key"];
      key.classList.add("unactive");
      key.disabled = true;
    });
  };
};
