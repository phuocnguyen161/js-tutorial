const Person = function (
  fullName,
  age,
  email,
  gender,
  height,
  weight,
  address
) {
  this.fullName = fullName;
  this.age = age;
  this.email = email;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
  this.bmi = getBMI(this.height, this.weight);
  this.healthStatus = getHealthStatus(this.bmi);
  this.address = address;
};

const fullNames = [
  "Tan Phuoc",
  "Ronaldo",
  "messi",
  "quang hai",
  "cong phuong",
  "kane",
  "son",
  "Tieu yeu",
  "hoang linh",
  "kaka",
];
const ages = [15, 18, 33, 21, 26, 50];
const emails = [
  "tanphuoc@gmail.com",
  "ronaldo@gmail.com",
  "messi@gmail.com",
  "quanghaigmail.com",
  "kane@gmail.com",
];
const genders = ["male", "female", "other"];
const heights = [1.8, 1.77, 1.5, 1.72, 1.9, 2.02];
const weights = [70, 84, 77, 82, 105, 110];
const addresses = ["vietnam", "nga", "anh"];

function generatePerson() {
  const limit = $("limit").value;
  for (let count = 0; count < limit; count++) {
    const person = new Person(
      fullNames[randomInt(0, 9)],
      ages[randomInt(0, 5)],
      emails[randomInt(0, 4)],
      genders[randomInt(0, 2)],
      heights[randomInt(0, 5)],
      weights[randomInt(0, 5)],
      addresses[randomInt(0, 2)]
    );
    personList.push(person);
  }
  localStorage.setItem("personList", JSON.stringify(personList));
  renderResultTable(personList);
}

function emptyPerson() {
  personList.length = 0;
  localStorage.setItem("personList", JSON.stringify(personList));
  renderResultTable(personList);
}
