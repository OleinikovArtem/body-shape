import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

import { subscribeEmail } from './api.js';

export const initializeSubscribeEmail = () => {
  const subscriptionForm = document.getElementById('subscription-form');

  subscriptionForm.addEventListener('submit', async event => {
    event.preventDefault();
    const emailInput = event.target.elements.email;
    const email = emailInput.value;

    try {
      const response = await subscribeEmail(email);
      if (response) {
        Toastify({
          text: 'Subscription successful!',
          duration: 3000,
          backgroundColor: '#4CAF50',
          close: true,
        }).showToast();
        emailInput.value = '';
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'An error occurred. Please try again later.';

      Toastify({
        text: errorMessage,
        duration: 3000,
        backgroundColor: '#FF5F6D',
        close: true,
      }).showToast();
    }
  });
};
