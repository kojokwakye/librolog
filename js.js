const dialog = document.querySelector("dialog");
const logButton = document.querySelector("dialog  + button");
const closButton = document.querySelector("dialog button");
const submitBtn = bookDialog.querySelector("#submit");

// // form
// let title = document.getElementById("title");
// let author = document.getElementById("author");
// let pages = document.getElementById("pages");

logButton.addEventListener("click", () => {
  dialog.showModal();
});

closButton.addEventListener("click", () => {
  dialog.close();
});

const myLibrary = [];

function Book(title, author, pages) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
  // addBookToLibrary();
}

function addBookToLibrary(title, author, pages) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}
let bookLog = document.getElementById("bookLog");
bookLog.addEventListener("submit", (event) => {
  event.preventDefault();
  // let title = document.getElementById("title");
  // let author = document.getElementById("author");
  // let pages = document.getElementById("pages");

  if (title.value == "" || author.value == "" || pages.value == "") {
    console.log("please fill the form");
  } else {
    console.log(`${title.value} ${author.value}. ${pages.value}`);
  }
  title.value = "";
  author.value = "";
  pages.value = "";
  addBookToLibrary();
console.log(myLibrary);

});
