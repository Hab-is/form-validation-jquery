$(document).ready(function() {
    $('#submitBtn').click(function() {
        // Clear previous error messages
        $('#nameError').text('');
        $('#emailError').text('');
        $('#passwordError').text('');
        $('#confirmPasswordError').text('');

        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        var valid = true;

        // Validate name
        if (name === '') {
            $('#nameError').text('Name is required');
            valid = false;
        }

        // Validate email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#emailError').text('Email is required');
            valid = false;
        } else if (!emailPattern.test(email)) {
            $('#emailError').text('Invalid email format');
            valid = false;
        }

        // Validate password
        if (password === '') {
            $('#passwordError').text('Password is required');
            valid = false;
        } else if (password.length < 8) {
            $('#passwordError').text('Password must be at least 8 characters long');
            valid = false;
        }

        // Validate confirm password
        if (confirmPassword === '') {
            $('#confirmPasswordError').text('Confirm Password is required');
            valid = false;
        } else if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Passwords do not match');
            valid = false;
        }

        if (valid) {
            alert('Form submitted successfully!');
        }
    });
});
