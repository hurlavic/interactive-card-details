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
let successMsg = document.querySelector(".success")

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const cardNum = numberInput.value;
    if (nameInput.value === "") {
        errorName.textContent = "Please enter your name"
        setTimeout(() => {
            errorName.textContent = ""
        }, 3000);
    }
    else if (isNaN(cardNum) || cardNum.toString().length !== 16) {
        errorNum.textContent = "Wrong format, 16 digits number only"
        setTimeout(() => {
            errorNum.textContent = ""
        }, 3000);
    }
    else if (monthDate.value === "" || yearDate.value === "" || cardCVC.value === "") {
        errorDate.textContent = "Can't be blank"
        setTimeout(() => {
            errorDate.textContent = ""
        }, 3000);
    } else {
        successMsg.style.visibility = "visible";
        form.style.visibility = "hidden"
    }
})
