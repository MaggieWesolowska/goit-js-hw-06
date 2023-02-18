const textInput = document.querySelector('input');
const inputLength = Number(textInput.dataset.length); // selects the value of the attribute
// or:
// const inputLength = Number(textInput.getAttribute('data-length')); selects the value of the attribute

// const inputLength = document.querySelector('[data-length="6"]'); selects the attribute, not it's value

textInput.addEventListener('blur', () => {
    if (textInput.value.length === inputLength) {
        textInput.classList.add('valid')
        textInput.classList.remove('invalid')
    } else {
        textInput.classList.add('invalid')
        textInput.classList.remove('valid')
    }
});