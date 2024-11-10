import iziToast from 'izitoast';

import ApiService from './api.js'; // Adjust the path as necessary

const apiService = new ApiService();
const sendBtn = document.getElementById('send-button');
const emailInput = document.getElementById('email');

window.addEventListener("load", (event) => {
  sendBtn.addEventListener('click', submitForm);

  emailInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      submitForm(); // Call the submitForm function if Enter key is pressed
    }
  });
});

async function submitForm(event) {
  event.preventDefault();
  event.stopPropagation();
  const email = emailInput.value;

  if (!emailInput.checkValidity()) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid email address.',
    });
    return;
  }

  apiService.postSubscriptions(email)
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
        message: error.response.data.message, // Display error message for network issues
      });
    });
}
