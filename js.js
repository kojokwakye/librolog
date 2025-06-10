const dialog = document.querySelector("dialog");
const logButton = document.querySelector("dialog  + button");
const closButton = document.querySelector("dialog button");

logButton.addEventListener("click", () => {
  dialog.showModal();
});

closButton.addEventListener("click", () => {
  dialog.close();
});

// const myLibrary = [];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // take params, create a book then store it in the array
// }
