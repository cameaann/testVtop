
var passLength = document.querySelector('div[name="passLength"]');
var lowerLetter = document.querySelector('div[name="lowcaseLetter"]');
var upperLetter = document.querySelector('div[name="uppercaseLetter"]');
var symbol = document.querySelector('div[name="sign"]');
var digit = document.querySelector('div[name="digit"]');
var countCharacters = document.querySelector('span[name="countCharacters"]');
var successMessage = document.querySelector('span[name="success-message"]');
var passHintMessage = document.querySelector('.validation');
var passHintItems = [passLength, lowerLetter, upperLetter, symbol, digit];




const isValidEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(String(email).toLocaleLowerCase())) {
        emailInput.previousElementSibling.classList.remove("hidden");
    } else {
        emailInput.previousElementSibling.classList.add("hidden");
    }
    return reg.test(String(email).toLocaleLowerCase());
};

const isValidPass = (pass) => {
    passHintMessage.classList.remove("hidden");
    var allConditionsIsValid = hasLengthEightSymbols(pass) && hasLowcaseLetter(pass) && hasUppercaseLetter(pass) && hasNumber(pass) && hasSpecialSign(pass);

    if (pass.length) {
        changeColorHint(hasLowcaseLetter(pass), lowerLetter);
        changeColorHint(hasUppercaseLetter(pass), upperLetter);
        changeColorHint(hasSpecialSign(pass), symbol);
        changeColorHint(hasNumber(pass), digit);

        if (hasLengthEightSymbols(pass)) {
            passLength.classList.add('success-color');
            countCharacters.innerHTML = "";
        } else {
            var count = 8 - pass.length;
            countCharacters.innerHTML = count + " " + "characters left";
            passLength.classList.remove('success-color');
        }

        if (allConditionsIsValid) {
            successMessage.innerHTML = "strong";
            return true;
        } else{
            successMessage.innerHTML = "";
        }
    }
    else{
        passHintItems.forEach(item => {
            if(item.classList.contains("success-color")){
                item.classList.remove("success-color");
            }
        })
        countCharacters.innerHTML = " ";
    }
}

const hasLengthEightSymbols = (pass) => {
    return pass && (pass.length === 8 || pass.length > 8);
}

const hasLowcaseLetter = (pass) => {
    var regExp = /[a-z]/g;
    return pass.match(regExp);
}
const hasUppercaseLetter = (pass) => {
    var regExp = /[A-Z]/g;
    return pass.match(regExp);
}
const hasNumber = (pass) => {
    var regExp = /[0-9]/g;
    return pass.match(regExp);
}
const hasSpecialSign = (pass) => {
    var regExp = /[.:;"'#?!@$%^&*-]/g;
    return pass.match(regExp);
}

const isValidConfirmPass = (pass, confirmPass) => {
    return pass === confirmPass;
}

function showPass() {
    var pass = document.getElementById("pass");
    if (pass.type === "password") {
        eyecolor.classList.remove("fa-eye");
        eyecolor.classList.add("fa-eye-slash");
        pass.type = "text";
    } else {
        pass.type = "password";
        eyecolor.classList.remove("fa-eye-slash");
        eyecolor.classList.add("fa-eye");
    }
}

const eyecolor = document.getElementById("show");

eyecolor.onclick = function () {
    showPass();
}

const signUpform = document.querySelector('form');
const fnameInput = document.querySelector('input[name="firstName"]');
const lnameInput = document.querySelector('input[name="lastName"]');
const emailInput = document.querySelector('input[name = "email"]');
const passInput = document.querySelector('input[name = "pass"]');
const passConfirmInput = document.querySelector('input[name = "confirmPass"]');
const signupSuccess = document.querySelector('.signup-success');
const successFooter = document.querySelector('.signup-success-footer');

let isFormValid = false;
let isValidationOn = false;

const inputs = [
    fnameInput,
    lnameInput,
    emailInput,
    passInput,
    passConfirmInput
]

const changeColorHintPassHint = (valid, item) =>{
    if(valid){ item.classList.add('success-color');    }
    else{ item.classList.remove('success-color');}
}

const resetElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
}
const invalidateElm = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
}

const validateInput = (inp) => {

    if(!inp.value){
        isFormValid = false;
        invalidateElm(inp);
    }
    if (inp.id==='email'){
        isFormValid = isValidEmail(inp.value);
        if(!isFormValid){invalidateElm(inp)};
    }
    if (inp.id==='pass'){
        isFormValid = isValidPass(inp.value);
        if(!isFormValid){invalidateElm(inp)};
    }
    if (inp.id==='confirmPass'){
        isFormValid = isValidConfirmPass(passInput, inp.value);
        if(!isFormValid){invalidateElm(inp)};
    }
}

const validateInputs = () => {
    if (!isValidationOn) return;
    isFormValid = true;

    inputs.forEach(resetElm);

    if (!fnameInput.value) {
        isFormValid = false;
        invalidateElm(fnameInput);
    }
    if (!lnameInput.value) {
        isFormValid = false;
        invalidateElm(lnameInput);
    }
    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }
    if (!isValidPass(passInput.value)) {
        isFormValid = false;
        invalidateElm(passInput);
    }
    if (!isValidConfirmPass(passInput.value, passConfirmInput.value)) {
        isFormValid = false;
        invalidateElm(passConfirmInput);
    }
}

signUpform.addEventListener('submit', (e) => {
    isValidationOn = true;

    e.preventDefault();
    validateInputs();
    if (isFormValid) {
        signUpform.remove();
        signupSuccess.classList.remove('hidden');
        successFooter.classList.remove('hidden');
    }
});

inputs.forEach((input) => {
    input.addEventListener('click', () => {
        if (input === document.activeElement) {
            resetElm(input);
        }
    })
})

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        // validateInputs();

        if(input === document.activeElement){
            validateInput(input);
        }

    })
})


