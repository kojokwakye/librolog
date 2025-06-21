const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const dialog = document.querySelector("dialog");
const logButton = document.querySelector("dialog  + button");
const closButton = document.querySelector("dialog button");
const submitBtn = bookDialog.querySelector("#submit");
let checkBox = bookDialog.querySelector("#checkbox");

logButton.addEventListener("click", () => {
  dialog.showModal();
  // dialog.close();
});

submitBtn.addEventListener("click", () => {
  if (title.value == "" || author.value == "" || pages.value == "") {
    // do nothingI
  } else {
    dialog.close();
  }
});

function readStatus() {
  checkBox.addEventListener("click", () => {
    if (checkBox.checked === true) {
      console.log("read");
    } else {
      console.log("not read");
    }
  });
}

closButton.addEventListener("click", () => {
  dialog.close();
});

const myLibrary = [];

function Book(title, author, pages, isRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
  this.checkbox = isRead ? "read" : "not read";
}

function addBookToLibrary(title, author, pages, isRead) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);

  for (const book of myLibrary) {
    console.log(book.title, book.author, book.pages, book.id, book.checkbox);
  }
  let displayBooks = document.querySelector(".shelf");
  displayBooks.innerText += `title : ${newBook.title}
  author : ${newBook.author}
  number of pages : ${newBook.pages}
  id: ${newBook.id}
 read: ${newBook.checkbox} `;
}

let bookLog = document.getElementById("bookLog");
bookLog.addEventListener("submit", (event) => {
  event.preventDefault();

  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    checkBox.checked
  );

  title.value = "";
  author.value = "";
  pages.value = "";
  checkBox.checked = false;
});
