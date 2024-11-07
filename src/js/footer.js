document.getElementById("send-button").addEventListener("click", submitForm);
document.getElementById("email").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitForm(); // Call the submitForm function if Enter key is pressed
  }
});

console.log('connected');


function submitForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  if (!emailInput.checkValidity()) {
    iziToast.error({
      title: "Error",
      message: "Please enter a valid email address.",
    });
    return;
  }

  const subscriptionData = { email };

  fetch("https://your-energy.b.goit.study/api/subscription", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(subscriptionData),
  })
    .then((response) => {
      return response.json().then((data) => {
        // Handle the response status
        if (response.status === 201) {
          iziToast.success({
            title: "Success",
            message: data.message, // Show the success message
          });
          emailInput.value = ""; // Clear input
        } else if (response.status === 400) {
          iziToast.error({
            title: "Error",
            message: data.message, // Show the error message
          });
        } else if (response.status === 404) {
          iziToast.error({
            title: "Error",
            message: data.message, // Show the error message
          });
        } else if (response.status === 409) {
          iziToast.error({
            title: "Conflict",
            message: data.message, // Show the conflict message
          });
        } else if (response.status === 500) {
          iziToast.error({
            title: "Server Error",
            message: data.message, // Show the server error message
          });
        } else {
          iziToast.error({
            title: "Unknown Error",
            message: "An unknown error occurred.",
          });
        }
      });
    })
    .catch((error) => {
      iziToast.error({
        title: "Error",
        message: "Error: " + error.message, // Display error message for network issues
      });
    });
}
