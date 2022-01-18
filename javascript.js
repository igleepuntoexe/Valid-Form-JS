const form = document.getElementById("form")
const username = document.getElementById("nam2")

form.addEventListener("submit", e => {
  e.preventDefault();
  validateInputs();
});