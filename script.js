const firstNameInput = document.querySelector("#first-name-input");
const submitBtn = document.querySelector("#submit-btn");
const lastNameInput = document.querySelector("#last-name-input");
const PassInput = document.querySelector("#password-input");
const emailInput = document.querySelector("#email-input");
//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.classList.remove("is-valid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
};

PassInput.onkeyup = () => {
  PassInput.classList.remove("is-invalid");
  PassInput.classList.remove("is-valid");
};

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isPassOk = false;
  let isEmailOk = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  if (PassInput.value === "" || PassInput.value.length < 6) {
    PassInput.classList.add("is-invalid");
  } else {
    PassInput.classList.add("is-valid");
    isPassOk = true;
  }

  if (emailInput.value === "" || validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
  } else if (validateEmail(emailInput.value) === true) {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }
  if (isFirstNameOk && isLastNameOk && isPassOk && isEmailOk) {
    alert("Registered successfully");
  }
};
