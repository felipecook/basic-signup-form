document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // You can add your form validation logic here
    // For simplicity, let's just log the form data
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const formData = new FormData(this);
    for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }


    if (password != confirmPassword) {
        alert('Your passwords do not match!')
        return;
    }
});

