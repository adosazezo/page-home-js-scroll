let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let elzoz = document.querySelector(".elzoz");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");

window.onscroll = function () {
  let value = scrollY;
  console.log(value);
  stars.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 1.5 + "px";
  mountains4.style.top = value * 1.2 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  elzoz.style.fontSize = value + "px";
  elzoz.style.position = "fixed";
  if (scrollY >= 67) {
    elzoz.style.fontSize = 67 + "px";
    if (scrollY >= 448) {
      elzoz.style.display = "none";
    } else elzoz.style.display = "block";
  }
  if (scrollY >= 132) {
    document.querySelector(".main").style.background =
      "linear-gradient(#376281, #10001f)";
  } else {
    document.querySelector(".main").style.background =
      "linear-gradient(#200016, #10001f)";
  }
};
