const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    //adding object to store input values
    const data = {
        email: email.value,
        password: password.value,
     }

     if (data.email === '' || data.password === '') {
        return alert('All fields must be filled in!');
     }
     console.log(data);
     form.reset(); // or: event.currentTarget.reset()
});



