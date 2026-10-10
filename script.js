// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación de aparición (Fade In) para las tarjetas de servicios al hacer scroll
    const cards = document.querySelectorAll('.service-card');
    
    // Configuramos el Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% de la tarjeta es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos una clase para animar
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Dejamos de observar la tarjeta una vez que ya apareció
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicamos estilos iniciales ocultos a las tarjetas y las observamos
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-top-color 0.3s ease';
        observer.observe(card);
    });

    // 2. Scroll suave para los enlaces internos (opcional, ya que CSS lo maneja, pero esto es un respaldo)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Efecto sutil de cambio de color en el header al hacer scroll (opcional)
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            // Podemos agregar una clase al body o header si quisiéramos un menú fijo
            // Por ahora, este código está listo para futuras expansiones.
        }
    });

});