let submitButton = document.querySelector(".submitBtn");
let input = document.querySelector("#numInput");

submitButton.addEventListener("click", () => {
  if (input.value.length <= 0) {
    console.log("please enter numeric value");
    return;
  }
  countUpdate(parseInt(input.value));
});

let countUpdate = (num) => {
  let countValue = document.querySelector(".countValue");
  input.value = "";
  countValue.textContent = num;
  num--;

  if (num < 0) {
    return (countValue.textContent = "Done");
  }

  setTimeout(() => {
    countUpdate(num);
  }, 1000);
};
