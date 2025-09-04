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

const keys = document.querySelectorAll(".key");
keys.forEach((key, index) => {
  if (index >= 24) {
    key.style.gridColumnStart = index - 22;
  }

  key.addEventListener("click", () => {
    key.classList.add("pressed");

    setTimeout(() => {
      key.classList.remove("pressed");
    }, 100);

    key.classList.add("unactive");
    key.disabled = true;
  });
});
