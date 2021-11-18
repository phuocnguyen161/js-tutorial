function searchPerson() {
  const searchText = $("searchText").value;
  const searchOption = $("searchOption").value;

  const filterPerson = personList.filter(function (person) {
    return person[searchOption]
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  renderResultTable(filterPerson);
}
