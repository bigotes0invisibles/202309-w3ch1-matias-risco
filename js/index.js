const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  for (let index = 0; index < event.target.length; index++) {
    if (!validateForm(event.target[index], event.target)) {
      return false;
    }
  }
  setVoidFormValue(event.target);
  console.log("No hay problemas el formulario ha sido enviado");
  return true;
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

const setVoidFormValue = (target) => {
  for (let index = 0; index < target.length; index++) {
    const element = target[index];
    element.value = "";
  }
};
