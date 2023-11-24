document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    alert(`Thank you, ${name}! We received your message: ${message}. We'll contact you at ${email} shortly.`);
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
});

// Get the button and content elements
const button = document.querySelector('.collapsible');

// Toggle the 'active' class to show/hide the content when the button is clicked
button.addEventListener('click', function() {
  button.classList.toggle('active');
});
