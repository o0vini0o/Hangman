export const createResult = (win, msg) => {
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("result-container");
  resultContainer.textContent = msg;
  if (win) {
    resultContainer.classList.add("win");
  } else {
    resultContainer.classList.add("lost");
  }
  return resultContainer;
};
