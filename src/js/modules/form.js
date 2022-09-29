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

var passLength = document.querySelector('span[name="passLength"]');
var lowerLetter = document.querySelector('span[name="lowcaseLetter"]');
var upperLetter = document.querySelector('span[name="uppercaseLetter"]');
var symbol = document.querySelector('span[name="sign"]');
var digit = document.querySelector('span[name="digit"]');
var countCharacters = document.querySelector('span[name="countCharacters"]');
var successMessage = document.querySelector('span[name="success-message"]');
var passHintMessage = document.querySelector('.validation');
var passHintItems = [passLength, lowerLetter, upperLetter, symbol, digit];


function setNationalities(){
    var nationalities = [
        'Afghan',
        'Albanian',
        'Algerian',
        'American',
        'Andorran',
        'Angolan',
        'Antiguans',
        'Argentinean',
        'Armenian',
        'Australian',
        'Austrian',
        'Azerbaijani',
        'Bahamian',
        'Bahraini',
        'Bangladeshi',
        'Barbadian',
        'Barbudans',
        'Batswana',
        'Belarusian',
        'Belgian',
        'Belizean',
        'Beninese',
        'Bhutanese',
        'Bolivian',
        'Bosnian',
        'Brazilian',
        'British',
        'Bruneian',
        'Bulgarian',
        'Burkinabe',
        'Burmese',
        'Burundian',
        'Cambodian',
        'Cameroonian',
        'Canadian',
        'Cape Verdean',
        'Central African',
        'Chadian',
        'Chilean',
        'Chinese',
        'Colombian',
        'Comoran',
        'Congolese',
        'Costa Rican',
        'Croatian',
        'Cuban',
        'Cypriot',
        'Czech',
        'Danish',
        'Djibouti',
        'Dominican',
        'Dutch',
        'East Timorese',
        'Ecuadorean',
        'Egyptian',
        'Emirian',
        'Equatorial Guinean',
        'Eritrean',
        'Estonian',
        'Ethiopian',
        'Fijian',
        'Filipino',
        'Finnish',
        'French',
        'Gabonese',
        'Gambian',
        'Georgian',
        'German',
        'Ghanaian',
        'Greek',
        'Grenadian',
        'Guatemalan',
        'Guinea-Bissauan',
        'Guinean',
        'Guyanese',
        'Haitian',
        'Herzegovinian',
        'Honduran',
        'Hungarian',
        'I-Kiribati',
        'Icelander',
        'Indian',
        'Indonesian',
        'Iranian',
        'Iraqi',
        'Irish',
        'Israeli',
        'Italian',
        'Ivorian',
        'Jamaican',
        'Japanese',
        'Jordanian',
        'Kazakhstani',
        'Kenyan',
        'Kittian and Nevisian',
        'Kuwaiti',
        'Kyrgyz',
        'Laotian',
        'Latvian',
        'Lebanese',
        'Liberian',
        'Libyan',
        'Liechtensteiner',
        'Lithuanian',
        'Luxembourger',
        'Macedonian',
        'Malagasy',
        'Malawian',
        'Malaysian',
        'Maldivan',
        'Malian',
        'Maltese',
        'Marshallese',
        'Mauritanian',
        'Mauritian',
        'Mexican',
        'Micronesian',
        'Moldovan',
        'Monacan',
        'Mongolian',
        'Moroccan',
        'Mosotho',
        'Motswana',
        'Mozambican',
        'Namibian',
        'Nauruan',
        'Nepalese',
        'New Zealander',
        'Nicaraguan',
        'Nigerian',
        'Nigerien',
        'North Korean',
        'Northern Irish',
        'Norwegian',
        'Omani',
        'Pakistani',
        'Palauan',
        'Panamanian',
        'Papua New Guinean',
        'Paraguayan',
        'Peruvian',
        'Polish',
        'Portuguese',
        'Qatari',
        'Romanian',
        'Russian',
        'Rwandan',
        'Saint Lucian',
        'Salvadoran',
        'Samoan',
        'San Marinese',
        'Sao Tomean',
        'Saudi',
        'Scottish',
        'Senegalese',
        'Serbian',
        'Seychellois',
        'Sierra Leonean',
        'Singaporean',
        'Slovakian',
        'Slovenian',
        'Solomon Islander',
        'Somali',
        'South African',
        'South Korean',
        'Spanish',
        'Sri Lankan',
        'Sudanese',
        'Surinamer',
        'Swazi',
        'Swedish',
        'Swiss',
        'Syrian',
        'Taiwanese',
        'Tajik',
        'Tanzanian',
        'Thai',
        'Togolese',
        'Tongan',
        'Trinidadian/Tobagonian',
        'Tunisian',
        'Turkish',
        'Tuvaluan',
        'Ugandan',
        'Ukrainian',
        'Uruguayan',
        'Uzbekistani',
        'Venezuelan',
        'Vietnamese',
        'Welsh',
        'Yemenite',
        'Zambian',
        'Zimbabwean'];
            for(var i=0; i<nationalities.length; i++){
                var option = document.createElement("option");
                option.value = nationalities[i];
                option.innerHTML = option.value;
                nationality.appendChild(option);
            }
}
function setMonths(){
    var months = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
    for(var i=0; i<months.length; i++){
        var option = document.createElement("option");
        option.value = months[i];
        option.innerHTML = option.value;
        monthbirth.appendChild(option);
    }
}
function setDays(){
    for(var i=1; i<32; i++){
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = option.value;
        daybirth.appendChild(option);
    }
}

function generateYears(){
    var years = [];
    const maxYear = new Date().getFullYear()-14;
    const minYear = maxYear-80;
    for (var i = maxYear; i >= minYear; i--) {
        years.push(i)
      }

    for(var i=0; i<years.length; i++){
        var option = document.createElement("option");
        option.value = years[i];
        option.innerHTML = option.value;
        yearbirth.appendChild(option);
    }


}

setNationalities();
setDays();
setMonths();
generateYears();


//VALIDATION
//-----------------------------------------------------------------
const isValidInput = (inp) => {
    var check = inp.value.trim().length !== 0;
    if (check) { inp.previousElementSibling.classList.remove("hidden") }
    else { inp.previousElementSibling.classList.add("hidden") }
    return check;
}


const isValidEmail = (email) => {
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (reg.test(String(email).toLocaleLowerCase())) {
        emailInput.previousElementSibling.classList.remove("hidden");
    } else {
        emailInput.previousElementSibling.classList.add("hidden");
    }
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
    e.preventDefault();
    if(submitButton.classList.contains('shake')){
        submitButton.classList.remove('shake');
    }
    validateInputs();
    if(!isFormValid) {
        window.requestAnimationFrame(function() {
        submitButton.classList.add('shake');});
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

        sendData(userFormDataObj)
            .then(response => {
                document.getElementById('loader').remove();
                signUpform.remove();
                signupSuccess.classList.remove('hidden');
                successFooter.classList.remove('hidden');
            })
            .catch(error => { console.log(error); }
            );
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


//SENDING DATA TO SERVER

async function stall(stallTime = 3000) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}


async function sendData(userData) {
    var loader = document.createElement('div');
    loader.id = 'loader';
    loader.classList.add('loader');
    document.getElementById('signup').appendChild(loader);

    // await stall(4000);

    const response = await fetch("https://json-file-hosting.herokuapp.com/users", {
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
    });

    return response.json();
}

