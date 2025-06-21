// const mainpage = document.querySelector("mainpage");
// const content = document.querySelector(".content");
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

// function readStatus() {

// }


checkBox.addEventListener("click", () => {
  if (checkBox.checked === true) {
    console.log("read");
  } else {
    console.log("not read");
  }
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
  this.checkbox = checkBox.value; // suppose to read  checkbox
  // this.checkbox = checkBox.readStatus();
}

function addBookToLibrary(title, author, pages) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);

  for (i in myLibrary) {
    console.log(
      myLibrary[i].title,
      myLibrary[i].author,
      myLibrary[i].pages,
      myLibrary[i].id,
      myLibrary[i].checkbox
      // myLibrary[i].checkBox.readStatus()
    );
  }
  let displayBooks = document.querySelector(".shelf");
  displayBooks.innerText += `title : ${myLibrary[i].title}
  author : ${myLibrary[i].author}
  number of pages : ${myLibrary[i].pages}
  id: ${myLibrary[i].id}
 read: ${myLibrary[i].checkBox} `;
}

let bookLog = document.getElementById("bookLog");
bookLog.addEventListener("submit", (event) => {
  event.preventDefault();

  addBookToLibrary();
  // console.log(myLibrary[i]);

  title.value = "";
  author.value = "";
  pages.value = "";
});
