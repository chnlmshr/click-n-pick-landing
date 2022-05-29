document.location = "click-n-pick://market";

const CircularText = document.getElementById("circular-text-h1");

let elems = "EXPLORE CLICK & PICK • EXPLORE CLICK & PICK •"
  .split("")
  .map((char) => `<span>${char}</span>`);

let s = "";

for (let elem of elems) s += elem;

CircularText.innerHTML = s;

const ele = document.querySelectorAll("span");

for (var i = 0; i < ele.length; i++) {
  ele[i].style.transform = "rotate(" + i * 7.9 + "deg)";
  ele[i].style.margin = "5px";
  if ((i >= 8 && i <= 19) || (i >= 31 && i != ele.length - 1))
    ele[i].style.color = "#50CB73";
}
