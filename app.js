const input = document.querySelector("#input-email");
const button = document.querySelector("button");
const errorPara = document.querySelector("#error");
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function getInput() {
  let test = regex.test(input.value);
  if (!test) {
    errorPara.style.display = "block";
    input.style.border = "1px solid #FF5466";
  } else {
    errorPara.style.display = "none";
    input.style.border = "1px solid #c2d3ff";
  }
}

let inputValue = button.addEventListener("click", getInput);
