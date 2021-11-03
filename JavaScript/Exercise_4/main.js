let div = document.createElement("div");

document.getElementsByTagName("body")[0].appendChild(div);
document.querySelector("div").style.height = "270px";
document.querySelector("div").style.width = "400px";
document.querySelector("div").style.border = "solid";

let h1 = document.createElement("h1");
document.getElementsByTagName("div")[0].appendChild(h1);
let text = document.createTextNode("MY Tasks");
div.appendChild(h1);
h1.appendChild(text);
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.marginLeft = "8px";

// creat this : <li>[text]</li>

let ul = document.createElement("ul");
ul.setAttribute("id", "my-list");
document.querySelector("div").appendChild(ul);

function createList(text) {
  var li = document.createElement("li");
  li.textContent = text;
  return li;
}

let list = [
  createList("user dashboard"),
  createList("admin dashboard"),
  createList("authentication"),
  createList("about page"),
  createList("content page"),
];

list.forEach(function (li) {
  ul.appendChild(li);
  li.style.listStyleType = "lower-roman";
});

//add id
document.querySelector("ul").children[4].setAttribute("id", "line-through");
document.getElementById("line-through").style.textDecoration = "line-through";

// creat this : <ol>[text]</ol>

let ol = document.createElement("ol");

let parentol = document.querySelector("ul").children[2].appendChild(ol);

let list2 = [createList("login"), createList("register"), createList("logout")];

list2.forEach(function (li) {
  parentol.appendChild(li);
  li.style.listStyleType = "circle";
});

//add id

ul.children[2]
  .querySelector("ol")
  .children[1].setAttribute("id", "line-through2");

document.getElementById("line-through2").style.textDecoration = "line-through";

// create button , input

let input = document.createElement("input");
let button = document.createElement("button");

document.querySelector("div").appendChild(input);
document.querySelector("div").appendChild(button);

button.textContent = "add task";
button.style.marginLeft = "5px";
input.style.marginLeft = "10px";
