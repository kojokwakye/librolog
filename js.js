const dialog = document.querySelector("dialog");
const logButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const bookLog = document.getElementById("bookLog");

let checkBox = bookDialog.querySelector("#checkbox");

logButton.addEventListener("click", () => {
  dialog.showModal();
  document.body.style.filter = "blur(1px)";
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
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  // create a new div for this book
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookDiv.setAttribute("data-book-id", newBook.id);

  // add book details inside the div
  bookDiv.innerHTML = `<p class="title">${newBook.title}</p>
 <p>${newBook.author} </p>
 <p> ${newBook.pages} pages </p>
 <p>${newBook.id} </p>
 <p class="isread">${newBook.checkbox }</p>
<div><button class="toggle-read">Read</button>
  <button class="remove">remove</button> </div>
`;

  for (const book of myLibrary) {
    console.log(book.title, book.author, book.pages, book.id, book.checkbox);
  }
  let displayBooks = document.querySelector(".shelf");
  displayBooks.appendChild(bookDiv);
}

// submit
bookLog.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readStatus = document.getElementById("checkbox").checked;
  addBookToLibrary(title, author, pages, readStatus);
  bookLog.reset();
  dialog.close();
  document.body.style.filter = ""; // remove blur
});

// sanple library
addBookToLibrary(
  "The Housekeeper and the Professor ",
  "Yōko Ogawa",
  295,
  false
);
addBookToLibrary("Anxious People", "Fredrik Backman", 290, true);
addBookToLibrary("Under the Whispering Door", "TJ Klune", 300, false);

// close button
closeButton.addEventListener("click", () => {
  dialog.close();
  document.body.style.filter = ""; // remove blur
});
