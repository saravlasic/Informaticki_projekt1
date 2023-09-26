const saveBtn = document.getElementById('saveBtn');
const firstNameErr = document.getElementById('imeError');
const lastNameErr = document.getElementById('prezimeError');
const yearsErr = document.getElementById('godineError');
const yearsInvalidError = document.getElementById('godineInvalidError');
const cityErr = document.getElementById('mjestoError');
const emailError = document.getElementById('emailError');
const emailDiv = document.getElementById('emailDiv');
const novostiCheckbox = document.getElementById('novostiCheckbox')


function hideAllErrors() {
    firstNameErr.classList.add('hide');
    lastNameErr.classList.add('hide');
    yearsErr.classList.add('hide');
    yearsInvalidError.classList.add('hide');
    cityErr.classList.add('hide');
    emailError.classList.add('hide');
}

function checkIsFormValid() {
    const firstName = document.getElementById('ime').value;
    const lastName = document.getElementById('prezime').value;
    const years = document.getElementById('godine').value;
    const city = document.getElementById('gradSelect').value;
    const email = document.getElementById('email').value;
    const novostiCheckboxChecked = novostiCheckbox.checked;
    let isValid = true;

    hideAllErrors();

    if (!firstName.length) {
        isValid = false;
        firstNameErr.classList.remove('hide');
    }

    if (!lastName.length) {
        isValid = false;
        lastNameErr.classList.remove('hide');
    }

    if (!years.length) {
        isValid = false;
        yearsErr.classList.remove('hide');
    } else if (isNaN(years)) {
        isValid = false;
        yearsInvalidError.classList.remove('hide');
    }

    if (!city.length || city==='0') {
        isValid = false;
        cityErr.classList.remove('hide');
    }

    if (novostiCheckboxChecked && !email.length) {
        isValid = false;
        emailError.classList.remove('hide');
    }

    return isValid;
}



saveBtn.onclick = function () {
    if (checkIsFormValid()) {
        alert('Podaci uspjesno spremljeni!');
    }
};

novostiCheckbox.onchange = function () {
    if (novostiCheckbox.checked) {
        emailDiv.classList.remove('hide');
    } else {
        emailDiv.classList.add('hide');

    }
}
