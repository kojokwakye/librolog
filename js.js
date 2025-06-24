const dialog = document.querySelector("dialog");
const logButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const bookLog = document.getElementById("bookLog");
let checkBox = document.querySelector("#checkbox"); // Fixed: removed bookDialog

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
  this.isRead = isRead;
  this.checkbox = isRead ? "read" : "not read";
  this.id = crypto.randomUUID();
}

// add toggle method to Book prototype
Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
  this.checkbox = this.isRead ? "read" : "not read";
};

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
     <p class="isread">${newBook.isRead ? "read" : "not read"}</p>
    <div><button class="toggle-read">Toggle Read</button>
     <button class="remove">Remove</button> </div>
    `;

  // add event listener to specific book's toggle button
  const toggleButton = bookDiv.querySelector(".toggle-read");
  toggleButton.addEventListener("click", () => {
    newBook.toggleRead();

    if (newBook.checkbox == "read") {
      bookDiv.style.color = "green";
      // console.log("green");
    } else {
      bookDiv.style.color = "";
      // console.log("red");
    }
    // update the display
    const isReadElement = bookDiv.querySelector(".isread");
    isReadElement.textContent = newBook.checkbox;

    // console.log(`${newBook.title} is now: ${newBook.checkbox}`);
  });

  // remove button
  const removeButton = bookDiv.querySelector(".remove");
  removeButton.addEventListener("click", () => {
    // remove from array
    const index = myLibrary.findIndex((book) => book.id === newBook.id);
    if (index > -1) {
      myLibrary.splice(index, 1);
    }
    // remove from display
    bookDiv.remove();
    console.log(`Removed: ${newBook.title}`);
  });

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

// sample library
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
