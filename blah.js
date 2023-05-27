let cardNumber = document.getElementById("cardNumber");
let textCardNumber = document.getElementById("textCardNumber");

let cardHolderName = document.getElementById("cardHolderName");
let holdername = document.getElementById("holdername");

let cardCVC = document.getElementById("cardCVC")
let cvc = document.getElementById("cvc")

let cardExpriyDate = document.getElementById("cardExpriyDate")
let expriyDate = document.getElementById("expriyDate")

const cardDetails = document.getElementById("cardDetails")
const complete = document.getElementById("complete")

const error = document.getElementById("error")

const errorName = document.getElementById("errorName")
const errorNumber = document.getElementById("errorNumber")
const errorExpiry = document.getElementById("errorExpiry")
const errorCVC = document.getElementById("errorCVC")


// CARD HOLDER NAME FUNCTION
holdername.addEventListener("input", function() {
    // Get the input value and remove any non-letter, non-space, or non-hyphen characters
    let holderCardName = this.value.replace(/[^a-zA-Z\s-]/g, "");
    // Set the input value to the cleaned up card number
    this.value = holderCardName;

    if (holdername.value.trim() === '') {
        errorName.style.display = "block"
      } else {
        if (holdername.value.length < 5) {
          errorName.style.display = "block"
        } else {
            errorName.style.display = "none"
        }
    }
  });

// CARD NUMBER FUNCTION
textCardNumber.addEventListener("input", function() {
    let textCardNumber = this.value.replace(/\D/g, "");
    // Remove any non-digit characters
    // textCardNumber = textCardNumber.replace(/\D/g, "");
    // Add a space after every 4 digits
    textCardNumber = textCardNumber.replace(/(\d{4})/g, "$1 ");
    // Trim any leading or trailing spaces
    textCardNumber = textCardNumber.trim();
    // Set the value of the input to the formatted card number
    this.value = textCardNumber;

    if (textCardNumber.value === ""){
        errorNumber.style.display = "block"
    } else {
        if (textCardNumber.value.length < 19) {
            errorNumber.style.display = "block"
        } else {
            errorNumber.style.display = "none"
        }
    }
  });

//   CVC FUNCTION
cvc.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
    if (cvc.value === "") {
        errorCVC.style.display = "block"
    } else {
        if (cvc.value.length < 3) {
            errorCVC.style.display = "block"
        } else {
            errorCVC.style.display = "none"
        }
    }
  });
  

// SUBMIT FUNCTION
function submit() {
    if (holdername.value.trim() !== "") {
        errorName.style.display = "none"
    } else {
        errorName.style.display = "block"
    }

    if (textCardNumber.value !== "") {
        errorNumber.style.display = "none"
    } else {
        errorNumber.style.display = "block"
    }

    if (expriyDate.value !== "") {
        errorExpiry.style.display = "none"
    } else {
        errorExpiry.style.display = "block"
    }

    if (cvc.value !== "") {
        errorCVC.style.display = "none"
    } else {
        errorCVC.style.display = "block"
    }

    // cardHolderName.textContent = holdername.value
    // cardNumber.textContent = textCardNumber.value
    // cardCVC.textContent = cvc.value
    // cardExpriyDate.textContent = expriyDate.value

    // if (holdername.value !== "" || textCardNumber)

    // holdername()
    // textCardNumber()
    // cvc()
}




























































































































