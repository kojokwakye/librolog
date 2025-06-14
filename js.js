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
  event.preventDefault();
  bookDialog.close();
});

const myLibrary = [];

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  // take params, create a book then store it in the array
}
