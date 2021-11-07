function validateFullName() {
    const fullNameValue = document.getElementById("fullName").value;
    const nameMessage = document.getElementById("nameMessage");
    const regExpPattenFullName = /^[a-zA-Z\s]*$/g;
    let isValid = true;
    if (fullNameValue === "") {
      nameMessage.innerHTML =
        '<span class="text-danger">This field is required.</span>';
      isValid = false;
    } else if (fullNameValue.indexOf(" ") === -1) {
      nameMessage.innerHTML =
        '<span class="text-danger">Full Name must contain at least 2 words</span>';
      isValid = false;
    } else if (!regExpPattenFullName.test(fullNameValue)) {
      nameMessage.innerHTML =
        '<span class="text-danger">Only include the alphabetical characters in range: a-z and A-Z</span>';
      isValid = false;
    } else {
      nameMessage.innerHTML = '<span class="text-success">Good job!</span>';
    }
    return isValid;
  }
  
  function validateEmail() {
    const emailValue = document.getElementById("email").value;
    const emailMessage = document.getElementById("emailMessage");
    const regExpPattenEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regExpPattenEdu = /^([\w]*[\w\.]*@edu.com.vn)/g;
    let isValid = true;
    if (emailValue === "") {
      emailMessage.innerHTML =
        '<span class="text-danger">This field is required.</span>';
      isValid = false;
    } else if (!regExpPattenEmail.test(emailValue)) {
      emailMessage.innerHTML =
        '<span class="text-danger">Your email is invalid. Please correct your email.</span>';
      isValid = false;
    } else if (!regExpPattenEdu.test(emailValue)) {
      emailMessage.innerHTML =
        '<span class="text-danger">We only accept educational emails.</span>';
      isValid = false;
    } else {
      emailMessage.innerHTML = '<span class="text-success">Good job!</span>';
    }
    return isValid;
  }
  
  function validateSchool() {
    const schoolValue = document.getElementById("school").value;
    const schoolMessage = document.getElementById("schoolMessage");
    let isValid = true;
    if (schoolValue === "4") {
      schoolMessage.innerHTML =
        '<span class="text-danger">Please select School</span>';
      isValid = false;
    } else {
      schoolMessage.innerHTML = "";
    }
    return isValid;
  }
  
  function validateAge() {
    const age = document.getElementById("age").value;
    const ageMessage = document.getElementById("ageMessage");
    const ageLabel = document.getElementById("ageLabel");
    ageLabel.innerHTML = `Age - ${age}`;
    if (age <= 30) {
      ageMessage.innerHTML =
        '<span class="text-success">You’re still young!</span>';
    } else {
      ageMessage.innerHTML = "";
    }
  }
  
  function validateFavorite() {
    const favoriteElement = document.getElementsByClassName("favorite");
    const favoriteMessage = document.getElementById("favoriteMessage");
    let isValid = false;
    for (var i = 0; i < favoriteElement.length; i++) {
      if (favoriteElement[i].checked) {
        isValid = true;
      }
    }
    if (!isValid) {
      favoriteMessage.innerHTML =
        '<span class="text-danger">You should select at least one option.</span>';
    } else {
      favoriteMessage.innerHTML = "";
    }
    return isValid;
  }
  
  function validateYourWish() {
    const yourWishValue = document.getElementById("yourWish").value;
    const yourWishMessage = document.getElementById("yourWishMessage");
    let isValid = true;
    if (yourWishValue === "") {
      yourWishMessage.innerHTML =
        '<span class="text-danger">This field is required</span>';
      isValid = false;
    } else {
      yourWishMessage.innerHTML = "";
    }
    return isValid;
  }
  
  function handleReset() {
    document.getElementById("validation").reset();
    document.getElementById("nameMessage").innerHTML = "";
    document.getElementById("emailMessage").innerHTML = "";
    document.getElementById("schoolMessage").innerHTML = "";
    document.getElementById("favoriteMessage").innerHTML = "";
    document.getElementById("yourWishMessage").innerHTML = "";
  }
  
  function handleSubmit() {
    const isValidFullName = validateFullName();
    const isValidEmail = validateEmail();
    const isValidSchool = validateSchool();
    const isValidFavorite = validateFavorite();
    const isValidYourWish = validateYourWish();
    if (
      isValidFullName &&
      isValidEmail &&
      isValidSchool &&
      isValidFavorite &&
      isValidYourWish
    ) {
      alert("Sent data! We will contact you as soon as possible.");
    }
  }
  