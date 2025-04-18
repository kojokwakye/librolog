const myLibrary = [];

// function Book() {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.readStatus = readStatus;
//   this.info = function () {
//     return `${title} by ${author}, ${pages} pages, ${readStatus}`;
//   };
// }

function addBookToLibrary() {
  // take params, create a book then store it in the array
  let book = prompt("name of the book", "enter title");
  if (book != null) {
    document.getElementById("demo").innerHTML =
      "you added " + book + " to your library";
  }
}
