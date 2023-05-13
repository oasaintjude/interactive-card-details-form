// const submit = document.getElementById("submit");

let cardNumber = document.getElementById("cardNumber");
let textCardNumber = document.getElementById("textCardNumber");

let cardHolderName = document.getElementById("cardHolderName");
let holdername = document.getElementById("holdername");

let cardCVC = document.getElementById("cardCVC")
let cvc = document.getElementById("cvc")

function submit() {
    cardHolderName.textContent = holdername.value
    cardNumber.textContent = textCardNumber.value
    cardCVC.textContent = cvc.value
    // console.log(holdername.value)
    // console.log(textCardNumber.value)
    // console.log(cvc.value)
}