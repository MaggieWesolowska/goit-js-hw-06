const textInput = document.querySelector('input');
const inputLength = Number(textInput.dataset.length); // pobiera wartosc atrybutu
// or:
// const inputLength = Number(textInput.getAttribute('data-length')); pobiera wartosc atrybutu

// const inputLength = document.querySelector('[data-length="6"]'); wskazuje na caly atrybut lacznie z jego wartoscia

textInput.addEventListener('blur', () => {
    if (textInput.value.length === inputLength) {
        textInput.classList.add('valid')
        textInput.classList.remove('invalid')
    } else {
        textInput.classList.add('invalid')
        textInput.classList.remove('valid')
    }
});

