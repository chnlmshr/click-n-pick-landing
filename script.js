const CircularText = document.getElementById("circular-text");
CircularText.innerHTML = CircularText.textContent.replace(
  /\S/g,
  "<span>$&</span>"
);

const ele = document.querySelectorAll("span");

for (var i = 1; i < ele.length; i++) {
  ele[i].style.transform = "rotate(" + i * 16.5 + "deg)";
}
