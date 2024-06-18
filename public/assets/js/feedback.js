document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the pop-up message
    alert('Your response has been recorded');

    // Optionally, you can reset the form after submission
    // document.getElementById('contact').reset();
  });