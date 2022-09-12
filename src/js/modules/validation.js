const signUpform = document.querySelector('form');
const fnameInput = document.querySelector('input[name="firstName"]');
const lnameInput = document.querySelector('input[name="lastName"]');
const emailInput = document.querySelector('input[name = "email"]');
const passInput = document.querySelector('input[name = "pass"]');
const passConfirmInput = document.querySelector('input[name = "confirmPass"]');
const signupSuccess = document.querySelector('.signup-success');
const successFooter = document.querySelector('.signup-success-footer');
const submitButton = document.querySelector('.btn.btn-blue');
const nationality = document.getElementById('nationality');
const daybirth = document.getElementById('day');
const monthbirth = document.getElementById('month');
const yearbirth = document.getElementById('year');


let isFormValid = false;
let isValidationOn = false;

const inputs = [
    fnameInput,
    lnameInput,
    emailInput,
    passInput,
    passConfirmInput
]


var passLength = document.querySelector('div[name="passLength"]');
var lowerLetter = document.querySelector('div[name="lowcaseLetter"]');
var upperLetter = document.querySelector('div[name="uppercaseLetter"]');
var symbol = document.querySelector('div[name="sign"]');
var digit = document.querySelector('div[name="digit"]');
var countCharacters = document.querySelector('span[name="countCharacters"]');
var successMessage = document.querySelector('span[name="success-message"]');
var passHintMessage = document.querySelector('.validation');
var passHintItems = [passLength, lowerLetter, upperLetter, symbol, digit];

const isValidInput = (inp) => {
    var check = inp.value.trim().length !== 0;
    if (check) { inp.previousElementSibling.classList.remove("hidden") }
    else { inp.previousElementSibling.classList.add("hidden") }
    return check;
}


const isValidEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (reg.test(String(email).toLocaleLowerCase())) {
        emailInput.previousElementSibling.classList.remove("hidden");
    } else {
        emailInput.previousElementSibling.classList.add("hidden");
    }
    console.log(String(email).toLocaleLowerCase());

    console.log(reg.test(String(email).toLocaleLowerCase()));

    return reg.test(String(email).toLocaleLowerCase());
};

const isValidPass = (pass) => {
    var allConditionsIsValid = hasLengthEightSymbols(pass) && hasLowcaseLetter(pass) && hasUppercaseLetter(pass) && hasNumber(pass) && hasSpecialSign(pass);
    if (allConditionsIsValid) { return true; }
    if (pass.length) {
        //while validation show hint message to input correct password
        changeColorHint(hasLowcaseLetter(pass), lowerLetter);
        changeColorHint(hasUppercaseLetter(pass), upperLetter);
        changeColorHint(hasSpecialSign(pass), symbol);
        changeColorHint(hasNumber(pass), digit);
        changeColorHint(hasLengthEightSymbols(pass), passLength);
    }
    else {
        //if the user removes all characters from the paswword input change hints
        passHintItems.forEach(item => {
            if (item.classList.contains("success-color")) {
                item.classList.remove("success-color");
            }
        });
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
    if (pass.length === 0) {
        passConfirmInput.nextElementSibling.innerHTML = "Passwords are different"
        return false;
    }
    else { return pass === confirmPass; }
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



const changeColorHint = (valid, item) => {
    if (valid) { item.classList.add('success-color'); }
    else { item.classList.remove('success-color'); }
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

    if (inp.id === 'firstName' || inp.id === 'lastName') {
        isFormValid = isValidInput(inp);
        if (!isFormValid) { invalidateElm(inp) };
    }
    if (inp.id === 'email') {
        isFormValid = isValidEmail(inp.value);
        if (!isFormValid) { invalidateElm(inp) };
    }
    if (inp.id === 'pass') {
        isFormValid = isValidPass(inp.value);
        if (!isFormValid) { passHintMessage.classList.remove("hidden"); };
        if (isFormValid) { passHintMessage.classList.add('hidden') };
    }
    if (inp.id === 'confirmPass') {
        isFormValid = isValidConfirmPass(passInput.value, inp.value);
        if (!isFormValid) { invalidateElm(inp) };
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
    submitButton.classList.remove('animate__shakeX');

    e.preventDefault();
    validateInputs();
    if (!isFormValid) {
        console.log(submitButton);
        submitButton.classList.add('animate__shakeX');
    }
    if (isFormValid) {

        const userFormData = new FormData(e.target);
        const userFormDataObj = {};
        userFormData.forEach((value, key) => {
            if(key!=="pass"&&key!=="confirmPass"&&key!=="day"&&key!=="month"&&key!=="year"){
                userFormDataObj[key] = value};
                userFormDataObj['datebirth'] = daybirth.value+" "+monthbirth.value+" "+yearbirth.value;
            }
        )

        console.log(userFormDataObj);
        try{
            sendData(userFormDataObj);
        }catch(error){
            console.log(error);
        }
    }
});

inputs.forEach((input) => {
    input.addEventListener('focusin', () => {
        resetElm(input);
    })
})

inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        validateInput(input);
    }, true)
});

passInput.addEventListener("input", () => {
    validateInput(passInput);
});

passInput.addEventListener("blur", () => {
    passHintMessage.classList.add('hidden');
    if (!isFormValid) { invalidateElm(passInput) };
});

function sendData(userData) {
    // var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    // xmlhttp.open("POST", "https://json-file-hosting.herokuapp.com/users");
    // xmlhttp.setRequestHeader("Content-Type", "application/json");
    // xmlhttp.send(JSON.stringify(userData));

    fetch("https://json-file-hosting.herokuapp.com/users", {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            userData
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => {
        console.log(response);
        signUpform.remove();
        signupSuccess.classList.remove('hidden');
        successFooter.classList.remove('hidden');
    })



}

