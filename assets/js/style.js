let form = document.querySelector(".card");
let confirmButton = document.querySelector("#confirm");
let nameInput = document.querySelector("#card-name");
let numberInput = document.querySelector("#card-number");
let monthDate = document.querySelector(".month");
let yearDate = document.querySelector(".year");
let cardCVC = document.querySelector("#cvc");
let errorName = document.querySelector("#error-name");
let errorNum = document.querySelector("#error-num");
let errorDate = document.querySelector("#error-date");
let successMsg = document.querySelector(".success");
let resetButton = document.querySelector("#reset");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const cardNum = numberInput.value;

  if (nameInput.value === "") {
    errorName.textContent = "Please enter your name";
    nameInput.style.border = "1px solid red";
    setTimeout(() => {
      errorName.textContent = "";
      nameInput.style.border = "";
    }, 3000);
  } else if (isNaN(cardNum) || cardNum.toString().length !== 16) {
    errorNum.textContent = "Wrong format, 16 digits number only";
    numberInput.style.border = "1px solid red";
    setTimeout(() => {
      errorNum.textContent = "";
      numberInput.style.border = "";
    }, 3000);
  } else if (
    monthDate.value === "" ||
    yearDate.value === "" ||
    cardCVC.value === ""
  ) {
    errorDate.textContent = "Field can't be blank";
    monthDate.value == "" ? (monthDate.style.border = "1px solid red") : "";
    yearDate.value == "" ? (yearDate.style.border = "1px solid red") : "";
    cardCVC.value == "" ? (cardCVC.style.border = "1px solid red") : "";
    setTimeout(() => {
      cardCVC.style.border = "";
      yearDate.style.border = "";
      monthDate.style.border = "";
      errorDate.textContent = "";
    }, 3000);
  } else if (monthDate.value > 12 && yearDate.value <= 22) {
    errorDate.textContent = "Enter a valid date in MM/YY format";
    monthDate.style.border = "1px solid red";
    yearDate.style.border = "1px solid red";
    setTimeout(() => {
      errorDate.textContent = "";
      yearDate.style.border = "";
      monthDate.style.border = "";
    }, 3000);
  } else if (monthDate.value > 12 || yearDate.value <= 22) {
    monthDate.value > 12
      ? (errorDate.textContent = "Enter a valid date in MM format")
      : monthDate.value;
    yearDate.value <= 22
      ? (errorDate.textContent = "Enter a valid date in YY format")
      : yearDate.value;
    monthDate.value > 12 ? (monthDate.style.border = "1px solid red") : "";
    yearDate.value <= 22 ? (yearDate.style.border = "1px solid red") : "";
    setTimeout(() => {
      errorDate.textContent = "";
      yearDate.style.border = "";
      monthDate.style.border = "";
    }, 3000);
  } else {
    successMsg.style.visibility = "visible";
    form.style.visibility = "hidden";
  }
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.visibility = "visible";
  successMsg.style.visibility = "hidden";
  form.reset();
});

function updateCardDetails() {
  nameInput.addEventListener("input", (e) => {
    e.preventDefault();
    const cardName = document.querySelector(".name");
    cardName.textContent = nameInput.value;
  });

  numberInput.addEventListener("input", (e) => {
    e.preventDefault();
    let formattedNum = numberInput.value.replace(/(.{4})/g, "$1 ");
    const cardNumber = document.querySelector(".number");
    cardNumber.textContent = formattedNum;
  });

  monthDate.addEventListener("input", (e) => {
    e.preventDefault();
    const MM = document.querySelector("#MM");
    monthDate.value.length == 2 ? (MM.textContent = monthDate.value + "/") : "";
  });

  yearDate.addEventListener("input", (e) => {
    e.preventDefault();
    const YY = document.querySelector("#YY");
    yearDate.value.length == 2 ? (YY.textContent = yearDate.value) : "";
  });

  cardCVC.addEventListener("input", (e) => {
    e.preventDefault();
    const cardCVV = document.querySelector(".cvv");
    cardCVV.textContent = cardCVC.value;
  });
}
updateCardDetails();
