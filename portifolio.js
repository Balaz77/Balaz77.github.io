

ScrollReveal().reveal('.reveal', {
    delay: 100,
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    origin: 'bottom',
    reset: false
});

const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sections.forEach(section => {
                    section.classList.remove("section-focused");
                    section.classList.add("dimmed");
                });

                entry.target.classList.remove("dimmed");
                entry.target.classList.add("section-focused");
            }
        });
    },
    {
        threshold: 0.5
    }
);

sections.forEach(section => observer.observe(section));

