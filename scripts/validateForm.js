function validateForm() {
    // Get values from the form
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var cPassword = document.getElementById('cPassword').value;

    if (first !== '' && email !== '' && password !== '' && last !== '' && cPassword !== '') {
        alert('Sign up successful!');
    } else {
        alert('Please fill in all fields.');
    }
}