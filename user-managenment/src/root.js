function $(id) {
  return document.getElementById(id);
}

const personList = JSON.parse(localStorage.getItem("personList")) || [];
console.log("🚀 ~ file: root.js ~ line 6 ~ personList", personList);

function getBMI(height, weight) {
  return (weight / Math.pow(height, 2)).toFixed(2);
}

function getHealthStatus(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderResultTable(data) {
  let resultHTML = "";
  data.forEach(function (item, index) {
    resultHTML =
      resultHTML +
      `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${item.fullName}</td>
          <td>${item.age}</td>
          <td>${item.email}</td>
          <td>${item.gender}</td>
          <td>${item.bmi}</td>
          <td>${item.healthStatus}</td>
          <td>${item.address}</td>
          <td>
            <button
              class="btn btn-outline-primary"
              onclick="showEditModal(${index})"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
            >
              Edit
            </button>
            <button
              class="btn btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              onclick="showDeleteModal(${index})"
            >
              Delete
            </button>
          </td>
        </tr>
      `;
  });

  $("result").innerHTML = resultHTML;
}

renderResultTable(personList);
