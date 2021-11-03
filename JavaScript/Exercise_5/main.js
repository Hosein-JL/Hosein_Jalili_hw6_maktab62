let input = document.createElement("input");
document.getElementsByTagName("body")[0].appendChild(input);

let text = document.createElement("p");
document.getElementsByTagName("body")[0].appendChild(text);

input.style.margin = "10px";
text.style.fontSize = "1.2rem";
text.style.margin = "10px";

input.onkeyup = function () {
  text.textContent = this.value;
};
