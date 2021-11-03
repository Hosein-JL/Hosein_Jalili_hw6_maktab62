let form = document.createElement("form");
let container = document.createElement("fieldset");
let table = document.createElement("table");
let userName = document.createElement("input");
let para = document.createElement("p");
let table2 = document.createElement("table");
let title = document.createElement("legend");
let password = document.createElement("input");
let para1 = document.createElement("p");
let table3 = document.createElement("table");
let confirmPassword = document.createElement("input");
let para2 = document.createElement("p");
let button = document.createElement("button");

document.getElementsByTagName("body")[0].appendChild(form);
document.getElementsByTagName("body")[0].style.direction = "rtl";
document.getElementsByTagName("body")[0].style.backgroundColor = "#F3F7FA";
document.getElementsByTagName("body")[0].style.fontFamily = "vazir";

form.appendChild(container);
container.appendChild(table);
container.appendChild(userName);
container.appendChild(para);
container.appendChild(table2);
container.appendChild(password);
container.appendChild(para1);
container.appendChild(table3);
container.appendChild(confirmPassword);
container.appendChild(para2);
container.appendChild(title);
container.appendChild(button);

//######################## function #############################

function validateUserNameAndPass() {
  var passw = /[A-Za-z]/;
  var passw1 = /[0-9]/;
  if (userName.value.trim() === "") {
    para.textContent = "الزامی";
    para.style.color = "red";
    userName.style.borderColor = "red";
    button.type = "button";
  } else if (userName.value.length < 4) {
    para.textContent = "نام کاربری حداقل 4 کاراکتر باشد";
    para.style.color = "red";
    button.type = "button";
    userName.style.borderColor = "red";
  } else if (password.value.length < 8) {
    para1.textContent = "رمز عبور حداقل 8 کاراکتر و یک حرف و یک عدد باشد ";
    para1.style.color = "red";
    button.type = "button";
    password.style.borderColor = "red";
  } else if (password.value != confirmPassword.value) {
    para2.textContent =
      "متاسفانه رمز عبور شما با تکرار رمز عبور شما مطابقت ندارد";
    para2.style.color = "red";
    button.type = "button";
    confirmPassword.style.borderColor = "red";
  } else if (password.value.trim() === "") {
    para1.textContent = "رمز عبور حداقل 8 کاراکتر و یک حرف و یک عدد باشد ";
    para1.style.color = "red";
    button.type = "button";
    password.style.borderColor = "red";
  } else {
    if (password.value.match(passw) && password.value.match(passw1)) {
      button.type = "submit";
    } else {
      para1.textContent = "رمز عبور حداقل 8 کاراکتر و یک حرف و یک عدد باشد ";
      para1.style.color = "red";
      button.type = "button";
    }
  }
}

// str.match(/abc/ig) //Array(3) ["Abc","abc","abc"]

button.onclick = validateUserNameAndPass;

//######################## style #############################

title.textContent = "ثبت نام";
title.style.fontFamily = "vazir";
title.style.fontSize = "1.2rem";
title.style.color = "black";
title.style.fontWeight = "bolder";
container.style.position = "fixed";
container.style.direction = "rtl";
container.style.right = "40%";
container.style.top = "20%";
container.style.borderRadius = "10px";
userName.style.display = "block";
password.style.display = "block";
confirmPassword.style.display = "block";
userName.style.margin = "30px";
password.style.margin = "30px";
confirmPassword.style.margin = "30px";
userName.style.marginTop = "0px";
password.style.marginTop = "0px";
confirmPassword.style.marginTop = "0px";
userName.style.marginBottom = "0px";
password.style.marginBottom = "0px";
confirmPassword.style.marginBottom = "0px";
userName.style.borderRadius = "3px";
password.style.borderRadius = "3px";
confirmPassword.style.borderRadius = "3px";
userName.style.height = "30px";
password.style.height = "30px";
confirmPassword.style.height = "30px";
userName.style.width = "300px";
password.style.width = "300px";
confirmPassword.style.width = "300px";
userName.style.fontFamily = "vazir";
password.style.fontFamily = "vazir";
confirmPassword.style.fontFamily = "vazir";
userName.type = "text";
password.type = "text";
confirmPassword.type = "password";
// password.required = "true";
// confirmPassword.required = "true";
// userName.required = "true";
userName.style.backgroundColor = "#F1F1F1";
password.style.backgroundColor = "#F1F1F1";
confirmPassword.style.backgroundColor = "#F1F1F1";
userName.style.borderBlockStart = "inherit";
password.style.borderBlockStart = "inherit";
confirmPassword.style.borderBlockStart = "inherit";
button.type = "submit";
button.style.float = "left";
button.style.marginLeft = "50px";
button.style.marginLeft = "50px";
button.style.width = "100px";
button.style.height = "35px";
button.textContent = "ثبت نام";
button.style.fontFamily = "vazir";
button.style.marginBottom = "20px";
button.style.borderRadius = "4px";
button.style.fontSize = "1.1rem";
button.style.backgroundColor = "#474E5D";
button.style.color = "#fff";
table.style.marginRight = "30px";
table2.style.marginRight = "30px";
table3.style.marginRight = "30px";
para.style.marginRight = "40px";
para1.style.marginRight = "40px";
para2.style.marginRight = "40px";
para.style.marginTop = "0px";
para1.style.marginTop = "0px";
para2.style.marginTop = "0px";
para.style.fontSize = "0.8rem";
para1.style.fontSize = "0.8rem";
para2.style.fontSize = "0.8rem";
userName.placeholder = "نام کاربری حداقل 4 کاراکتر";
password.placeholder = "رمز عبور حداقل 8 کاراکتر";

table.textContent = "نام کاربری";
table2.textContent = "رمز عبور";
table3.textContent = "تایید رمز عبور";
