// const mainpage = document.querySelector("mainpage");
// const content = document.querySelector(".content");
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

const myLibrary = [];

function Book() {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);

  for (i in myLibrary) {
    // console.log (myLibrary[i])
  }
}

let bookLog = document.getElementById("bookLog");
bookLog.addEventListener("submit", (event) => {
  event.preventDefault();

  if (title.value == "" || author.value == "" || pages.value == "") {
    console.log("please log the form");
  } else {
  }
  addBookToLibrary();
  console.log(myLibrary[i]);

  title.value = "";
  author.value = "";
  pages.value = "";
});
