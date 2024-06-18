document.getElementById('schedule-cleaning').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
    setTimeout(function() {
        window.location.href = '/frontend/index.html';
    }, 3000); // Redirect after 3 seconds
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
    window.location.href = '/frontend/index.html'; // Redirect immediately
});

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
        window.location.href = '/frontend/index.html'; // Redirect immediately
    }
};
