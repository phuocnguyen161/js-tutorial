let deleteIndex = NaN;

function showDeleteModal(index) {
  deleteIndex = index;
}

function deletePerson() {
  const fullName = $("updatedFullName").value;
  const age = parseInt($("updatedAge").value);
  const email = $("updatedEmail").value;
  const gender = $("updatedGender").value;
  const height = parseFloat($("updatedHeight").value);
  const weight = parseFloat($("updatedWeight").value);
  const address = $("updatedAddress").value;

  const bmi = getBMI(height, weight);
  const healthStatus = getHealthStatus(bmi);

  personList.splice(deleteIndex, 1);

  localStorage.setItem("personList", JSON.stringify(personList));
  renderResultTable(personList);
}
