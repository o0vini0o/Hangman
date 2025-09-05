import { imagesHangman } from "./components/imagesHangman.js";
import { tastatur } from "./components/tastatur.js";
import { createResult } from "./components/createResult.js";
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
      const slots = document.querySelectorAll(".letter-card");
      if (wordToFind.includes(letterPressed)) {
        // find letter in word
        key.classList.add("correct");

        // render letter card in answer card
        [...wordToFind].forEach((char, index) => {
          if (char === letterPressed) {
            slots[index].textContent = letterPressed;
          }
        });
        // check if all slots filled, is win
        const win = [...slots].every((slot) => slot.textContent !== "");
        if (win) {

  slots.forEach((card) => {
              card.classList.add("gewinnen");
            });
          document
            .querySelector(".hangman-container")
            .insertBefore(
              createResult(win, "Glückwunssch! Sie haben gewonnen! 🎉🎉🎉"),
              document.getElementById("my-tastatur")
            );
          disableAllKeys();
          // setTimeout(() => {
          //   alert("Glückwunssch! Sie haben gewonnen! 🎉🎉🎉");
          //   disableAllKeys();
          // }, 100);

          window.tryCount = 0;
        }
      } else {
        // don't find letter in word
        key.classList.add("wrong");
        // render hangman image
        if (window.tryCount < imagesHangman.length - 1) {
          window.tryCount++;
          img.src = imagesHangman[window.tryCount];
          // check lost
          if (window.tryCount === imagesHangman.length - 1) {
            document
              .querySelector(".hangman-container")
              .insertBefore(
                createResult(false, "Schade, Sie haben verloren! 👽👽👽"),
                document.getElementById("my-tastatur")
              );
            disableAllKeys();
            // setTimeout(() => {
            //   alert("Schade, Sie haben verloren!");
            //   disableAllKeys();
            // }, 100);
            window.tryCount = 0;
          }
        }
      }
      key.disabled = true;
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
