document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('a');
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Link clicked!');
    });