
  
//   const theHobbit = new Book(
//     "the hobbit",
//     "j.r.r tolkien",
//     "295",
//     "not read yet"
//   );
//   console.log(theHobbit.info());


const myLibrary = []

function Book(title, author,pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function () {
      return `${title} by ${author}, ${pages} pages, ${readStatus}`;
    };
  
}

function addBookTolibrary() {

}