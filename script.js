const CircularText = document.getElementById("circular-text-h1");
// CircularText.innerHTML = CircularText.textContent.replace(
//   /(.*)/,
//   "<span>$&</span>"
// );

let elems = "EXPLORE CLICK & PICK • EXPLORE CLICK & PICK •"
  .split("")
  .map((char) => `<span>${char}</span>`);

let s = "";

for (let elem of elems) {
  s += elem;
}

CircularText.innerHTML = s;

const ele = document.querySelectorAll("span");

for (var i = 0; i < ele.length; i++) {
  ele[i].style.transform = "rotate(" + i * 8 + "deg)";
  ele[i].style.margin = "5px";
}
// bhai ye angle dena pdega calculate krke
// EXPLORE CLICK & PICK • EXPLORE CLICK & PICK •
//ban gya bhai text ab gol gol ghumana hai ek point pe
