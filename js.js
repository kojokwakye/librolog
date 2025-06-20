// const mainpage = document.querySelector("mainpage");
// const content = document.querySelector(".content");
const dialog = document.querySelector("dialog");
const logButton = document.querySelector("dialog  + button");
const closButton = document.querySelector("dialog button");
const submitBtn = bookDialog.querySelector("#submit");

logButton.addEventListener("click", () => {
  dialog.showModal();
  // dialog.close();
});

// if (title.value == "" || author.value == "" || pages.value == "") {
// }
submitBtn.addEventListener("click", () => {
  if (title.value == "" || author.value == "" || pages.value == "") {
  } else {
    dialog.close();
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
}

function addBookToLibrary(title, author, pages) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);

  // if (myLibrary.length === 0) {
  //   myLibrary.innertext = '<div class="no-users">No users remaining</div>';
  //   return;
  // }

  for (i in myLibrary) {
    console.log(
      myLibrary[i].title,
      myLibrary[i].author,
      myLibrary[i].pages,
      myLibrary[i].id
    );
  }
  let displayBooks = document.querySelector(".shelf");
  displayBooks.innerText += `title : ${myLibrary[i].title},
  author : ${myLibrary[i].author}
  pages read: ${myLibrary[i].pages}`;
  // const removebtn = document.createElement(".shelf + button");
  // removebtn.addEventListener("click", (event) => {});
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

// let displayBooks = document.querySelector(".shelf");
// displayBooks.innerText += `title : ${myLibrary[i].title},
//   author : ${myLibrary[i].author}
//   pages read: ${myLibrary[i].pages}`;
