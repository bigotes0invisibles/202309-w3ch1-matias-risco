const validateForm = (element, target) => {
  switch (element.id) {
    case "receiver":
    case "remitter":
      return validateCamp(element) && validateEmail(element);
      break;
    case "date-time":
      if (target[5].checked) {
        return validateCamp(element);
      }
      break;
    case "check-box":
      break;
    case "attached-file":
      break;
    case "body":
      if (element.value.length < 10) {
        console.log("el cuerpo es demasiado pequeño");
        return false;
      }
      return validateCamp(element);
    default:
      return validateCamp(element);
      break;
  }
  return true;
};

const validateCamp = (element) => {
  if (element.value === "" || element.value === false) {
    console.log(`${element.name} esta vacio`);
    return false;
  }
  return true;
};

const validateEmail = (element) => {
  if (
    element.value.indexOf("@") === -1 ||
    -1 === element.value.split(".").slice(-1).indexOf("com")
  ) {
    console.log(`${element.name} not a email`);
    return false;
  }
  return true;
};
