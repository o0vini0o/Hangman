import { getNewAnimal } from "./questions.js";
const question = getNewAnimal();

const answer = () => {
  const answerContainer = document.getElementById("answer-container");
  const question = "Pferd";
  const answerChars = [...question];

  answerChars.forEach((letters) => {
    const charContainer = document.createElement("div");
    charContainer.classList.add("letter-card");
  });
};
