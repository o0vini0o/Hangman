export const createTastatur = () => {
  const tastatur = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "ä",
    "Ö",
    "ü",
    "ß",
  ];

  const myTastatur = document.getElementById("my-tastatur");
  const tastEl = document.createElement("article");
  tastEl.classList.add("keyboard");

  tastatur.forEach((letter, index) => {
    const btn = document.createElement("button");
    btn.textContent =
      index === tastatur.length - 1 ? letter : letter.toUpperCase();
    btn.classList.add("key");
    tastEl.appendChild(btn);
  });

  myTastatur.appendChild(tastEl);

  const answerC = document.getElementById("char-container");

  const keys = document.querySelectorAll(".key");
  keys.forEach((key, index) => {
    if (index >= 24) {
      key.style.gridColumnStart = index - 22;
    }
    console.log(answerC);

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

      setTimeout(() => {
        key.classList.remove("pressed");
      }, 100);

      key.classList.add("unactive");
      key.disabled = true;
    });
  });
};
