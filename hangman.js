export function builtHangman() {
  const imagesHangman = [
    "img/hangman-1.png",
    "img/hangman-2.png",
    "img/hangman-3.png",
    "img/hangman-4.png",
    "img/hangman-5.png",
    "img/hangman-6.png",
    "img/hangman-7.png",
  ];

  let currentIndex = 0;
  const img = document.getElementById("hangman");

  img.src = imagesHangman[currentIndex];

  img.addEventListener("click", () => {
    if (currentIndex < imagesHangman.length - 1) {
      currentIndex++;
      img.src = imagesHangman[currentIndex];
    }
    console.log(currentIndex);
  });
}
