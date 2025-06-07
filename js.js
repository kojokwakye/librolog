//  js was running before the html
document.addEventListener("DOMContentLoaded", () => {
  const bookInput = document.querySelector('[name="name"]');

  bookInput.addEventListener("invalid", () => {
    bookInput.setCustomValidity("Please enter your book.");
  });

  bookInput.addEventListener("input", () => {
    bookInput.setCustomValidity("");
  });
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
