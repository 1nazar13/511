const display = document.querySelector(".display");
const btnEq = document.querySelector(".dor");

document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitPressed));

function digitPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll(".oper button")
  .forEach((button) => button.addEventListener("click", operPressed));

function operPressed(ev) {
  display.value += ev.target.innerText;
}
btnEq.addEventListener("click", () => (display.value = eval(display.value)));

document
  .querySelectorAll(".clear button")
  .forEach((button) => button.addEventListener("click", clearPressed));

function clearPressed() {
  display.value = " ";
}
document
  .querySelectorAll(".err")
  .forEach((button) => button.addEventListener("click", err));

function err() {
  var eval1 = eval(display.value);
  if (Math.abs(eval1) === Infinity) return alert("Error!");
  else display.value = eval1;
}
