let name = document.querySelector('#name');
let email = document.querySelector('#email');
let age = document.querySelector('#age');

name.addEventListener('focusout', checkName);
name.addEventListener('focusin', clear);

email.addEventListener('focusout', checkEmail)
name.addEventListener('focusin', clear);

age.addEventListener('focusout', checkAge)
name.addEventListener('focusin', clear);

function checkName () {
    let result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(name.value)
    console.log(result);
    if (!name.value || result) {
        error ('Text', name)
    }
}
function checkEmail () {
    email.value
}
function checkAge () {
    age.value
}

function error (message, element) {
    element.style.borderColor = 'red';
    let newTag = document.createElement('div');
    newTag.className = "error";
    newTag.innerHTML = message;
    element.after(newTag);
}
function clear () {
    this.style.borderColor = '#737171';
    if (this.nextSibling) {
        this.nextSibling.remove();
    }
}