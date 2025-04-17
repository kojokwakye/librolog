const myLibrary = [];

function Book() {
  // the constructor...

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${readStatus}`;
  };
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
