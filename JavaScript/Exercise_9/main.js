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

var rIndex,
  table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
  var isEmpty = false,
    Row = document.getElementById("row").value;
  (UID = document.getElementById("UID").value),
    (fname = document.getElementById("fname").value),
    (lname = document.getElementById("lname").value),
    (city = document.getElementById("city").value),
    (postalCode = document.getElementById("code").value),
    (phoneNumber = document.getElementById("number").value),
    (Position = document.getElementById("pos").value);

  // console.log(UID);

  if (fname === "") {
    alert("First Name Connot Be Empty");
    isEmpty = true;
  } else if (lname === "") {
    alert("Last Name Connot Be Empty");
    isEmpty = true;
  } else if (UID === "") {
    alert("UID Connot Be Empty");
    isEmpty = true;
  } else if (city === "") {
    alert("City Connot Be Empty");
    isEmpty = true;
  } else if (postalCode === "") {
    alert("Postal Code Connot Be Empty");
    isEmpty = true;
  } else if (phoneNumber === "") {
    alert("Phone Number Connot Be Empty");
    isEmpty = true;
  } else if (Position === "") {
    alert("Position Connot Be Empty");
    isEmpty = true;
  } else if (Row === "") {
    alert("First Name Connot Be Empty");
    isEmpty = true;
  }

  return isEmpty;
}

// add Row
function addHtmlTableRow() {
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
      cell = newRow.insertCell(0),
      cell1 = newRow.insertCell(1),
      cell2 = newRow.insertCell(2),
      cell3 = newRow.insertCell(3),
      cell4 = newRow.insertCell(4),
      cell5 = newRow.insertCell(5),
      cell6 = newRow.insertCell(6),
      cell7 = newRow.insertCell(7),
      row = document.getElementById("row").value,
      UID = document.getElementById("UID").value,
      fname = document.getElementById("fname").value,
      lname = document.getElementById("lname").value,
      city = document.getElementById("city").value,
      postalCode = document.getElementById("code").value,
      phoneNumber = document.getElementById("number").value,
      Position = document.getElementById("pos").value;

    console.log(newRow);
    cell.innerHTML = row;
    cell1.innerHTML = UID;
    cell2.innerHTML = fname;
    cell3.innerHTML = lname;
    cell4.innerHTML = city;
    cell5.innerHTML = postalCode;
    cell6.innerHTML = phoneNumber;
    cell7.innerHTML = Position;
    // call the function to set the event to the new row
    selectedRowToInput();
  }
}

// display selected row data into input text
function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("row").value = this.cells[0].innerHTML;
      document.getElementById("UID").value = this.cells[1].innerHTML;
      document.getElementById("fname").value = this.cells[2].innerHTML;
      document.getElementById("lname").value = this.cells[3].innerHTML;
      document.getElementById("city").value = this.cells[4].innerHTML;
      document.getElementById("code").value = this.cells[5].innerHTML;
      document.getElementById("number").value = this.cells[6].innerHTML;
      document.getElementById("pos").value = this.cells[7].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
  var age = document.getElementById("UID").value,
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    city = document.getElementById("city").value,
    postalCode = document.getElementById("code").value,
    phoneNumber = document.getElementById("number").value,
    Position = document.getElementById("pos").value;
  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[1].innerHTML = age;
    table.rows[rIndex].cells[2].innerHTML = fname;
    table.rows[rIndex].cells[3].innerHTML = lname;
    table.rows[rIndex].cells[4].innerHTML = city;
    table.rows[rIndex].cells[5].innerHTML = postalCode;
    table.rows[rIndex].cells[6].innerHTML = phoneNumber;
    table.rows[rIndex].cells[7].innerHTML = Position;
  }
}

function removeSelectedRow() {
  table.deleteRow(rIndex);
  // clear input text
  document.getElementById("UID").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("city").value = "";
  document.getElementById("code").value = "";
  document.getElementById("number").value = "";
  document.getElementById("pos").value = "";
}
