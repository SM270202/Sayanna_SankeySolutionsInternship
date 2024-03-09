
    document.addEventListener('DOMContentLoaded', function (){
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            if (!validateForm()) {
                event.preventDefault();
            }
        });

        function validateForm() {
            let isValid = true;


            const fullName = document.getElementById('Name');
            if (fullName.value.trim() === '') {
                alert('Please enter the Full Name on the card.');
                isValid = false;
            }

            const cardNumber = document.getElementById('CardNumber');
            if (!isValidCardNumber(cardNumber.value.trim())) {
                alert('Please enter a valid Card Number.');
                isValid = false;
            }
            const expDate = document.getElementById('ExpDate');
            if (!isValidExpDate(expDate.value.trim())) {
                alert('Please enter a valid Exp Date (format: MM/YYYY).');
                isValid = false;
            }

            const cvc = document.getElementById('Password');
            if (cvc.value.trim() === '') {
                alert('Please enter the CVC.');
                isValid = false;
            }
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

        function isValidCardNumber(cardNumber) {
           
            return /^\d{16}$/.test(cardNumber);
        }

        function isValidExpDate(expDate) {
            
            return /^\d{2}\/\d{4}$/.test(expDate);
        }
    });
