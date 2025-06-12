const dialog = document.querySelector("dialog");
const logButton = document.querySelector("dialog  + button");
const closButton = document.querySelector("dialog button");
const submitBtn = bookDialog.querySelector("#submit");

logButton.addEventListener("click", () => {
  dialog.showModal();
});

closButton.addEventListener("click", () => {
  dialog.close();
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  bookDialog.close(); // Have to send the select box value here.
});























// const myLibrary = [];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // take params, create a book then store it in the array
// }
