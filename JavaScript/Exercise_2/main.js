let div = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(div);
div.style.height = "300px";
div.style.width = "300px";
div.style.backgroundColor = "red";

let text = document.createTextNode("hover over me!");
div.appendChild(text);
div.style.textAlign = "center";
div.style.color = "white";

div.onmouseover = function () {
  div.style.backgroundColor = "blue";
};

div.onmouseout = function () {
  div.style.backgroundColor = "red";
};
