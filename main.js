const shareContainer = document.querySelector(".share-container");
const shareBtn = document.querySelectorAll(".share-btn");
const arrow = document.querySelector(".arrow");
// event listener
shareBtn.forEach((btn) => {
  btn.addEventListener("click", showShareContainer);
});

function showShareContainer() {
  shareContainer.classList.toggle("show-share-container");
  arrow.classList.toggle("show-arrow");
}
