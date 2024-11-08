import iziToast from 'izitoast';

import { subscribe } from './api.js'; // Adjust the path as necessary

const sendBtn = document.getElementById('send-button');
const emailInput = document.getElementById('email');

sendBtn.addEventListener('click', submitForm);

emailInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    submitForm(); // Call the submitForm function if Enter key is pressed
  }
});

function submitForm() {
  const email = emailInput.value;

  if (!emailInput.checkValidity()) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid email address.',
    });
    return;
  }

  const subscriptionData = { email };

  subscribe(email)
    .then(response => {
      // Handle the response based on the status code
      if (response.status === 201) {
        iziToast.success({
          title: 'Success',
          message: response.data.message, // Show the success message
        });
        emailInput.value = ''; // Clear input
      } else {
        iziToast.error({
          title: 'Error',
          message: response.data.message, // Show the error message for other status codes
        });
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Network error. Please try again later.', // Display error message for network issues
      });
    });
}
