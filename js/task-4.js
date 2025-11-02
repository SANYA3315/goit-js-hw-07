const login = document.querySelector('.login-form')

login.addEventListener('submit', event => {
    event.preventDefault(); 
    const forma = event.target;
    const email = forma.elements.email.value.trim();
    const password = forma.elements.password.value.trim();
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }
    else {
        const user = {
            email: email,
            password: password,
        }
        forma.reset();
        console.log(user);
    }

});
