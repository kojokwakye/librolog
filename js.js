const logButton = document.getElementById("log");
logButton.addEventListener("click", () => {
  document.getElementById("form").style.display = "block";
  document.getElementById("log").style.display = "none";
});

const closButton = document.getElementById("closebtn");
closButton.addEventListener("click", () => {
  document.getElementById("form").style.display = "none";
  document.getElementById("log").style.display = "block";
});
