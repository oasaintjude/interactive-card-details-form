// Different Screens
let complete = document.getElementById("complete")
let myCardDetails = document.getElementById("myCardDetails")
// CARD INFO
let cardInformationNumber = document.getElementById("card-info-number")
let cardInformationName = document.getElementById("card-info-holderName")
let cardInformationExpiryDate = document.getElementById("card-info-expriyDate")
let cardInformationcardCVC = document.getElementById("cardCVC")

// CARD DETAILS
let cardUserInput = document.getElementById("card-user-input")
let holderName = document.getElementById("holdername")
let inputCardNumber = document.getElementById("inputCardNumber")
let expriyMonth = document.getElementById("expriyMonth")
let expiryYear = document.getElementById("expiryYear")
let cvc = document.getElementById("cvc")

// ERROR
let errorNames = document.getElementById("errorNames")
let errorNumber = document.getElementById("errorNumber")
let errorExpiry = document.getElementById("errorExpiry")
let errorCVC = document.getElementById("errorCVC")

// BUTTONS
let confirm = document.getElementById("confirm")
let proceed = document.getElementById("continue")




// USER INPUT RESTRICTIONS
// CARD HOLDER NAME FUNCTION
holderName.addEventListener("input", function() {
    let holderName = this.value.replace(/[^a-zA-Z\s-]/g, "");
    this.value = holderName;
    errorNames.textContent = ""
});

// CARD NUMBER FUNCTION
inputCardNumber.addEventListener("input", function() {
    let inputCardNumber = this.value.replace(/\D/g, "");
    inputCardNumber = inputCardNumber.replace(/(\d{4})/g, "$1 ");
    inputCardNumber = inputCardNumber.trim();
    this.value = inputCardNumber;
    errorNumber.textContent = ""
});

// MONTH FUNCTION
expriyMonth.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
    errorExpiry.textContent = ""
});

// YEAR FUNCTION
expiryYear.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
    errorExpiry.textContent = ""
});

// CVC FUNCTION
cvc.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
    errorCVC.textContent = ""
});


// INPUT VALIDATION
confirm.addEventListener("click", function() {
    if ((holderName.value.length > 5 || holderName.value.length < 32) && (inputCardNumber.value.length === 19) && (expriyMonth.value.length === 2) && (expiryYear.value.length === 2) && (cvc.value.length === 3)) {
        cardInformationName.textContent = holderName.value
        cardInformationNumber.textContent = inputCardNumber.value
        cardInformationcardCVC.textContent = cvc.value
        cardInformationExpiryDate.textContent = `${expriyMonth.value}/${expiryYear.value}`
        myCardDetails.style.display = "none"
        complete.style.display = "flex"
    } else {
        // HOLDERNAME VALIDATION
        if (holderName.value.length < 6) {
            errorNames.textContent = "Please enter your fullname!"
        } else if(holderName.value.length > 32) {
            errorNames.textContent = "Maximum character limit exceeded!" 
        } else {
            errorNames.textContent = ""
        }

        // CARD NUMBER VALIDATION
        if (inputCardNumber.value.length < 19) {
            errorNumber.textContent = "Enter the complete 16digits on your card..."
        } else if (inputCardNumber.value.length > 19) {
            errorNumber.textContent = "Enter the 16digits on your card only."
        } else {
            errorNumber.textContent = ""
        }

        // MONTH VALIDATION
        if (expriyMonth.value.length < 2) {
            errorExpiry.textContent = "Invalid input!"
        } else if (expriyMonth.value.length > 2) {
            errorExpiry.textContent = "Should be 2digits only!"
        } else {
            errorExpiry.textContent = ""
        }
        // YEAR VALIDATION
        if (expiryYear.value.length < 2) {
            errorExpiry.textContent = "Invalid input!"
        } else if (expiryYear.value.length > 2) {
            errorExpiry.textContent = "Should be 2digits only!"
        } else {
            errorExpiry.textContent = ""
        }

        // CVC VALIDATION
        if (cvc.value.length < 3) {
            errorCVC.textContent = "Invalid input!"
        } else if (cvc.value.length > 3) {
            errorCVC.textContent = "Should be 3digits only."
        } else {
            errorCVC.textContent = ""
        }

    }
})