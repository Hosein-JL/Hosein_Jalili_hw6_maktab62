let divParent = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(divParent);

let parentText = document.createTextNode("Parent node's text.");

// ####################### Style ####################
divParent.appendChild(parentText);
divParent.style.width = "800px";
divParent.style.backgroundColor = "#00ff01";
divParent.style.border = "solid";
divParent.style.marginTop = "30px";
divParent.style.marginLeft = "30px";
divParent.style.fontSize = "1.2rem";

let divTarget = document.createElement("div");
let p = document.createElement("p");
divTarget.setAttribute("id", "para-1");
divParent.appendChild(divTarget);
divTarget.appendChild(p);

let targetText = document.createTextNode("The target node");

// ####################### Style ####################

p.appendChild(targetText);
divTarget.style.border = "solid";
divTarget.style.marginRight = "140px";
divTarget.style.marginTop = "20px";
divTarget.style.marginLeft = "20px";
divTarget.style.marginBottom = "60px";
divTarget.style.fontSize = "1.2rem";

let divChild = document.createElement("div");
divParent.querySelector("div").appendChild(divChild);
let childText = document.createTextNode("The main node's child node");

// ####################### Style ####################

divChild.appendChild(childText);
divChild.style.border = "solid";
divChild.style.marginRight = "180px";
divChild.style.marginTop = "20px";
divChild.style.marginLeft = "20px";
divChild.style.marginBottom = "60px";
divChild.style.fontSize = "1.2rem";
divChild.style.height = "200px";

let parentBTN = document.createElement("button");
let childBTN = document.createElement("button");
document.getElementsByTagName("body")[0].appendChild(parentBTN);
document.getElementsByTagName("body")[0].appendChild(childBTN);

let parentBtnText = document.createTextNode("Copy Parent Text");
let childBtnText = document.createTextNode("Copy Child Text");

// ####################### Style ####################

parentBTN.appendChild(parentBtnText);
childBTN.appendChild(childBtnText);
parentBTN.style.margin = "10px";
parentBTN.style.padding = "10px";
childBTN.style.padding = "10px";

// ####################### onclick ####################

parentBTN.onclick = function () {
  document.getElementById("para-1").children[0].innerHTML = `${
    document.getElementsByTagName("div")[0].textContent
  } ${document.getElementById("para-1").children[0].textContent}`;
};

childBTN.onclick = function () {
  document.getElementById("para-1").children[0].innerHTML = `${
    document.getElementById("para-1").children[1].textContent
  }${document.getElementById("para-1").children[0].textContent}`;
};
