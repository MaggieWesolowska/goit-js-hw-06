const textInput = document.querySelector('input');
const inputLength = document.querySelector('[data-length="6"]');

textInput.addEventListener('focus', () => {
    textInput.value = inputLength.length;
    textInput.style.border = '3px solid #bdbdbd;'
});

textInput.addEventListener('blur', ()=> {

    if (textInput === inputLength.length) {
        textInput.style.borderColor = #4caf50;
    } else {
        textInput.style.borderColor = #f44336;
    }
});
