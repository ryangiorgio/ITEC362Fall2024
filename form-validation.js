// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const form = document.querySelector('.contact-form form');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Name validation: Only letters and spaces are allowed
        const nameInput = document.getElementById('name');
        const namePattern = /^[A-Za-z\s]+$/;
        if (nameInput.value.trim() === '') {
            alert('Name is required.');
            event.preventDefault(); // Stop form submission
            return;
        }
        if (!namePattern.test(nameInput.value.trim())) {
            alert('Name must contain only letters and spaces.');
            event.preventDefault();
            return;
        }

        // Email validation: Must include an '@' symbol
        const emailInput = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            alert('Email is required.');
            event.preventDefault();
            return;
        }
        if (!emailPattern.test(emailInput.value.trim())) {
            alert('Please enter a valid email address that includes an "@" symbol.');
            event.preventDefault();
            return;
        }

        // Contact Reason validation: Cannot be empty
        const contactReasonInput = document.getElementById('contact-reason');
        if (contactReasonInput.value.trim() === '') {
            alert('Please provide a reason for contacting us.');
            event.preventDefault();
            return;
        }

        // Message validation: Cannot be empty
        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            alert('Message cannot be empty.');
            event.preventDefault();
            return;
        }
    });
});
