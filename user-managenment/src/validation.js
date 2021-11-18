function validateFullName(id) {
  const fullNameValue = $(id).value;
  const nameMessage = $(`${id}Message`);
  let isValid = true;
  if (fullNameValue === "") {
    nameMessage.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    isValid = false;
  } else if (fullNameValue.length > 50) {
    nameMessage.innerHTML =
      '<span class="text-danger">This field must be less than 50 characters.</span>';
    isValid = false;
  } else if (fullNameValue.indexOf(" ") === -1) {
    nameMessage.innerHTML =
      '<span class="text-danger">Full Name must contain at least 2 words</span>';
    isValid = false;
  } else {
    nameMessage.innerHTML = '<span class="text-success">Good job!</span>';
  }
  return isValid;
}

function validateAge(id) {
  const ageValue = $(id).value;
  const ageMessage = $(`${id}Message`);
  const regExpNumber = /^[0-9]*$/g;
  let isValid = true;
  if (ageValue === "") {
    ageMessage.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    isValid = false;
  } else if (!regExpNumber.test(ageValue)) {
    ageMessage.innerHTML =
      '<span class="text-danger">Your age is invalid. Please correct your age.</span>';
    isValid = false;
  } else {
    ageMessage.innerHTML = '<span class="text-success">Good job!</span>';
  }
  return isValid;
}

function validateEmail(id) {
  const emailValue = $(id).value;
  const emailMessage = $(`${id}Message`);
  const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let isValid = true;
  if (emailValue === "") {
    emailMessage.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    isValid = false;
  } else if (!regExpEmail.test(emailValue)) {
    emailMessage.innerHTML =
      '<span class="text-danger">Your email is invalid. Please correct your email.</span>';
    isValid = false;
  } else {
    emailMessage.innerHTML = '<span class="text-success">Good job!</span>';
  }
  return isValid;
}

function validateHeight(id) {
  const heightValue = $(id).value;
  const heightMessage = $(`${id}Message`);
  const regExpHeight = /^[+-]?\d+(\.\d+)?$/g;

  let isValid = true;
  if (heightValue === "") {
    heightMessage.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    isValid = false;
  } else if (!regExpHeight.test(heightValue)) {
    heightMessage.innerHTML =
      '<span class="text-danger">Your height is invalid!</span>';
    isValid = false;
  } else {
    heightMessage.innerHTML = '<span class="text-success">Good job!</span>';
  }
  return isValid;
}

function validateWeight(id) {
  const weightValue = $(id).value;
  const weightMessage = $(`${id}Message`);
  const regExpWeight = /^[+-]?\d+(\.\d+)?$/g;

  let isValid = true;
  if (weightValue === "") {
    weightMessage.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    isValid = false;
  } else if (!regExpWeight.test(weightValue)) {
    weightMessage.innerHTML =
      '<span class="text-danger">Your weight is invalid!</span>';
    isValid = false;
  } else {
    weightMessage.innerHTML = '<span class="text-success">Good job!</span>';
  }
  return isValid;
}

function validateAddress(id) {
  const addressValue = $(id).value;
  const addressMessage = $(`${id}Message`);
  let isValid = true;
  if (addressValue.length > 100) {
    addressMessage.innerHTML =
      '<span class="text-danger">This field must be less than 100 characters.</span>';
    isValid = false;
  } else {
    addressMessage.innerHTML = '<span class="text-success">Good job!</span>';
  }
  return isValid;
}
