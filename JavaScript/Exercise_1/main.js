let div = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(div);

let text = document.createTextNode("Click here and watch the text change!");
div.appendChild(text);

div.onclick = function () {
  div.textContent += "Click here and watch the text change!";
};

div.style.height = "300px";
div.style.width = "300px";
div.style.backgroundColor = "green";
div.style.overflow = "auto";
div.style.fontSize = "1.1rem";
