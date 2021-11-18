let editIndex = NaN;

function showEditModal(index) {
  editIndex = index;
  $("updatedFullName").value = personList[index].fullName;
  $("updatedAge").value = personList[index].age;
  $("updatedEmail").value = personList[index].email;
  $("updatedGender").value = personList[index].gender;
  $("updatedHeight").value = personList[index].height;
  $("updatedWeight").value = personList[index].weight;
  $("updatedAddress").value = personList[index].address;
}

function updatePerson() {
  const fullName = $("updatedFullName").value;
  const age = parseInt($("updatedAge").value);
  const email = $("updatedEmail").value;
  const gender = $("updatedGender").value;
  const height = parseFloat($("updatedHeight").value);
  const weight = parseFloat($("updatedWeight").value);
  const address = $("updatedAddress").value;

  const isValidFullName = validateFullName("updatedFullName");
  const isValidAge = validateAge("updatedAge");
  const isValidEmail = validateEmail("updatedEmail");
  const isValidHeight = validateHeight("updatedHeight");
  const isValidWeight = validateWeight("updatedWeight");
  const isValidAddress = validateAddress("updatedAddress");

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

    personList.splice(editIndex, 1, {
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
