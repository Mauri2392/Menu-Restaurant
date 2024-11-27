document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // Todas las secciones del documento
    const navLinks = document.querySelectorAll('.nav-link'); // Todos los enlaces del navbar

    const observerOptions = {
        root: null, // Usa el viewport como contenedor
        threshold: 0, // Detecta cuando el borde superior del contenedor cruza el viewport
        rootMargin: '-50px 0px -90% 0px', // Cambia la sección activa cuando cruza el navbar
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Elimina la clase "active" de todos los enlaces
                navLinks.forEach((link) => link.classList.remove('active'));

                // Encuentra el enlace correspondiente a la sección activa
                const activeLink = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observa cada sección
    sections.forEach((section) => observer.observe(section));
});
