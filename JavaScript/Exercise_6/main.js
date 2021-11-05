//########################## variables ############################

let mouse = document.createElement("p");
document.getElementsByTagName("body")[0].appendChild(mouse);

let circle = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(circle);

let showcircle = document.createElement("p");
document.getElementsByTagName("body")[0].appendChild(showcircle);
circle.setAttribute("id", "circle");
let point = document.getElementById("circle");

let showBox = document.createElement("p");
document.getElementsByTagName("body")[0].appendChild(showBox);

let offset = 15;
let circleMarginLeft = 25;
let circleMarginTop = 25;
let fontMarginTop = 82;
let circleHalf = 3.75;
let marginMouse = 20;
let boxes = document.createElement("div");
let redBox = document.createElement("div");
let blackBox = document.createElement("div");

document.getElementsByTagName("body")[0].appendChild(boxes);
document.getElementsByTagName("body")[0].style.height = "700px";
document.getElementsByTagName("body")[0].style.margin = "0px";
document.getElementsByTagName("body")[0].appendChild(blackBox);
document.getElementsByTagName("body")[0].appendChild(redBox);

//########################## function ############################

document.addEventListener("mousemove", function (e) {
  var mouseX = e.clientX;
  var mouseY = e.clientY;
  point.style.left = `${mouseX + offset}px`;
  point.style.top = `${mouseY + offset}px`;
  circleInBox(
    e.x,
    e.y,
    redBox,
    blackBox,
    offset,
    circleMarginLeft,
    circleMarginTop,
    circleHalf
  );
});

mouse.textContent = window.addEventListener("mousemove", function (e) {
  mouse.textContent = `Mouse: (x:${e.x}) | (y:${e.y})`;
  showcircle.textContent = `circle: (x:${
    e.x + offset + circleMarginLeft
  }) | (y:${e.y + offset + circleMarginTop})`;
});

function circleInBox(
  mouseX,
  mouseY,
  redBox,
  blackBox,
  offset,
  circleMarginLeft,
  circleMarginTop,
  circleHalf,
  marginMouse = 20
) {
  if (
    mouseX + offset + circleMarginLeft >= blackBox.offsetLeft + circleHalf &&
    mouseX + offset + circleMarginLeft <=
      blackBox.offsetLeft +
        blackBox.offsetWidth -
        offset -
        circle.offsetWidth +
        marginMouse &&
    mouseY + offset + circleMarginTop >= blackBox.offsetTop + circleHalf &&
    mouseY + offset + circleMarginTop <=
      blackBox.offsetTop + blackBox.offsetHeight - circleHalf * 2
  ) {
    circle.style.backgroundColor = "red";
    showBox.style.visibility = "visible";
    showBox.textContent = `Red Circle in Black Box: (x: ${
      mouseX - blackBox.offsetLeft + offset + marginMouse
    }) | (y: ${mouseY - blackBox.offsetTop + offset + marginMouse})`;
  } else if (
    mouseX + offset + circleMarginLeft >= redBox.offsetLeft + circleHalf &&
    mouseX + offset + circleMarginLeft <=
      redBox.offsetLeft +
        redBox.offsetWidth -
        offset -
        circle.offsetWidth +
        marginMouse &&
    mouseY + offset + circleMarginTop >= redBox.offsetTop + circleHalf &&
    mouseY + offset + circleMarginTop <=
      redBox.offsetTop + redBox.offsetHeight - circleHalf * 2
  ) {
    circle.style.backgroundColor = "black";
    showBox.style.visibility = "visible";
    showBox.textContent = `Black Circle in Red Box: (x: ${
      mouseX - redBox.offsetLeft + offset + marginMouse
    }) | (y: ${mouseY - redBox.offsetTop + offset + marginMouse})`;
  } else {
    showBox.style.visibility = "hidden";
    circle.style.backgroundColor = "blue";
  }
}

//########################## style ############################

mouse.style.fontSize = "1.4rem";
mouse.style.margin = "0";
showcircle.style.fontSize = "1.4rem";
showcircle.style.margin = "0";
showBox.style.fontSize = "1.4rem";
showBox.style.margin = "0";
circle.style.width = "15px";
circle.style.height = "15px";
circle.style.borderRadius = "50%";
circle.style.backgroundColor = "#4A78C7";
circle.style.position = "absolute";
circle.style.marginLeft = "20px";
circle.style.marginTop = "20px";
boxes.style.marginTop = "200px";
redBox.style.width = "200px";
redBox.style.height = "200px";
redBox.style.backgroundColor = "red";
redBox.style.float = "right";
redBox.style.marginRight = "450px";
blackBox.style.width = "200px";
blackBox.style.height = "200px";
blackBox.style.backgroundColor = "black";
blackBox.style.float = "left";
blackBox.style.marginLeft = "450px";
