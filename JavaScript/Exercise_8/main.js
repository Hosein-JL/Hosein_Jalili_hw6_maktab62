let personData = [
  {
    uid: 112233,
    firstName: "amirhosein",
    lastName: "kazemi",
    city: "isfahan",
    postalCode: 2345672345,
    phoneNumber: "03111234234",
    position: "ui designer",
  },
  {
    uid: 223344,
    firstName: "ali",
    lastName: "ahmadi",
    city: "abhar",
    postalCode: 334563232,
    phoneNumber: "04111334452",
    position: "analyzer",
  },
  {
    uid: 334455,
    firstName: "ali",
    lastName: "ahmadi",
    city: "rasht",
    postalCode: 9945643232,
    phoneNumber: "01131394855",
    position: "ui designer",
  },
  {
    uid: 445566,
    firstName: "shahriar",
    lastName: "ahmadi gol",
    city: "mashhad",
    postalCode: 5545689232,
    phoneNumber: "04121334415",
    position: "ui designer",
  },
  {
    uid: 556677,
    firstName: "reza",
    lastName: "rahmani",
    city: "semnan",
    postalCode: 774565392,
    phoneNumber: "09331334225",
    position: "analyzer",
  },
  {
    uid: 667788,
    firstName: "mohammadhadi",
    lastName: "soleimani",
    city: "shiraz",
    postalCode: 7845482232,
    phoneNumber: "07771333455",
    position: "php programmer",
  },
  {
    uid: 778899,
    firstName: "mohsen",
    lastName: "zare",
    city: "zahedan",
    postalCode: 1145119212,
    phoneNumber: "01221399450",
    position: "ux designer",
  },
  {
    uid: 889900,
    firstName: "milad",
    lastName: "rabbani",
    city: "qom",
    postalCode: 8845383233,
    phoneNumber: "08121320452",
    position: "node programmer",
  },
  {
    uid: 990011,
    firstName: "mahdi",
    lastName: "mohseni nasab",
    city: "ahvaz",
    postalCode: 2242689035,
    phoneNumber: "02211783452",
    position: "ux designer",
  },
  {
    uid: 113344,
    firstName: "soheil",
    lastName: "hosein",
    city: "arak",
    postalCode: 1145129244,
    phoneNumber: "01221334665",
    position: "java programmer",
  },
];

// Adding the entire table to the body tag

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);
tbody.setAttribute("id", "tableData");
document.getElementsByTagName("body")[0].appendChild(table);

// Creating and adding data to first row of the table

let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
let heading_2 = document.createElement("th");
let heading_3 = document.createElement("th");
let heading_4 = document.createElement("th");
let heading_5 = document.createElement("th");
let heading_6 = document.createElement("th");
let heading_7 = document.createElement("th");
let heading_8 = document.createElement("th");

heading_1.textContent = "Row";
heading_2.textContent = "Uid";
heading_3.textContent = "First Name";
heading_4.textContent = "Last Name";
heading_5.textContent = "City";
heading_6.textContent = "Postal Code";
heading_7.textContent = "Phone number";
heading_8.textContent = "Position";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);
thead.appendChild(row_1);

function loadTableData(tableData) {
  const tableBody = document.getElementById("tableData");
  let dateHtml = "";

  for (let i = 0; i < personData.length; i++) {
    dateHtml += `<tr><td>${i + 1}</td>
       <td>${personData[i].uid}</td>
       <td>${personData[i].firstName}</td>
       <td>${personData[i].lastName}</td>
       <td>${personData[i].city}</td>
       <td>${personData[i].postalCode}</td>
       <td>${personData[i].phoneNumber}</td>
       <td>${personData[i].position}</td></tr>`;
  }
  tableBody.innerHTML = dateHtml;
}

loadTableData(personData);
