function createPerson() {
  const fullName = $("fullName").value;
  const age = parseInt($("age").value);
  const email = $("email").value;
  const gender = $("gender").value;
  const height = parseFloat($("height").value);
  const weight = parseFloat($("weight").value);
  const address = $("address").value;

  const isValidFullName = validateFullName("fullName");
  const isValidAge = validateAge("age");
  const isValidEmail = validateEmail("email");
  const isValidHeight = validateHeight("height");
  const isValidWeight = validateWeight("weight");
  const isValidAddress = validateAddress("address");

  if (
    isValidFullName &&
    isValidEmail &&
    isValidAge &&
    isValidHeight &&
    isValidWeight &&
    isValidAddress
  ) {
    const bmi = getBMI(height, weight);
    const healthStatus = getHealthStatus(bmi);

    personList.push({
      fullName,
      age,
      email,
      gender,
      height,
      weight,
      bmi,
      healthStatus,
      address,
    });
    localStorage.setItem("personList", JSON.stringify(personList));
    renderResultTable(personList);
  }
}
