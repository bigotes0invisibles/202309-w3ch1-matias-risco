const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  validateForm(event.target);
});

formElement
  .querySelector(".form-check-box")
  .addEventListener("click", (event) => {
    if (event.target.checked) {
      formElement
        .querySelectorAll(".date-time")
        .forEach((element) => element.classList.remove("hidden"));
    } else {
      formElement
        .querySelectorAll(".date-time")
        .forEach((element) => element.classList.add("hidden"));
    }
  });
