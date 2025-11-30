const clickSound = document.getElementById('clickSound');

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (clickSound) {
            clickSound.play();
        }

        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

const successSound = document.getElementById('successSound');

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (successSound) {
        successSound.play();
    }

    alert('¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.');
    this.reset();
});