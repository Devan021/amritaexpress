document.addEventListener('DOMContentLoaded', (event) => {
    // Function to navigate to the cleaning service page
    document.getElementById('cleaningButton').addEventListener('click', () => {
        window.location.href = 'cleaningpage.html';
    });

    // Function to navigate to the laundry service page
    document.getElementById('laundryButton').addEventListener('click', () => {
        window.location.href = '/schedule-laundry';
    });

    // Function to navigate to the feedback page
    document.getElementById('feedbackButton').addEventListener('click', () => {
        window.location.href = 'contactadmin.html';
    });
});