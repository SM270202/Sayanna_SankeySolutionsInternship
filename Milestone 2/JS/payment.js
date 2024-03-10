document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;

        const firstName = document.getElementById('FirstName');
        if (firstName.value.trim() === '') {
            alert('Please enter your First Name.');
            isValid = false;
        }

      
        const lastName = document.getElementById('LastName');
        if (lastName.value.trim() === '') {
            alert('Please enter your Last Name.');
            isValid = false;
        }

        
        const email = document.getElementById('email address');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert('Please enter a valid Email Address.');
            isValid = false;
        }

        
        const phoneNumber = document.getElementById('phone number');
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber.value.trim())) {
            alert('Please enter a valid 10-digit Phone Number.');
            isValid = false;
        }

        return isValid;
    }
});
