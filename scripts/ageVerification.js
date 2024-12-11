document.addEventListener('DOMContentLoaded', function () {
    const ageVerification = document.getElementById('age-verification');
    const backgroundContent = document.querySelector('.background');

    document.getElementById('age-yes').addEventListener('click', function () {
        ageVerification.classList.add('hidden');
        backgroundContent.classList.remove('hidden');
    });

    document.getElementById('age-no').addEventListener('click', function () {
        alert('You must be 18 or older to access this page.');
        window.location.href = 'https://www.google.com'; // Redirect to another page
    });
});
