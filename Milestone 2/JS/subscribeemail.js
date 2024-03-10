
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('#formcontainer'); 

        form.addEventListener('submit', function (event) {
            if (!validateForm()) {
                event.preventDefault();
            }
        });

        function validateForm() {
            let isValid = true;

            // Validate Email
            const emailInput = document.getElementById('subscribeemail');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(emailInput.value.trim())) {
                alert('Please enter a valid Email Address.');
                isValid = false;
            }

            return isValid;
        }
    });

