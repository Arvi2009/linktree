document.addEventListener('DOMContentLoaded', () => {
    // Animation for featured projects timeline
    const projects = document.querySelectorAll('.featured-projects ul li');

    projects.forEach((project, index) => {
        project.style.opacity = '0';
        project.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            project.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            project.style.opacity = '1';
            project.style.transform = 'translateX(0)';
        }, index * 300 + 300);
    });

    // Animated text for header
    const animatedText = document.getElementById('animated-text');
    const texts = ['Designer', 'Website Builder', 'Programmer'];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 200;

    function type() {
        const currentText = texts[currentIndex];
        if (!isDeleting) {
            animatedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
                delay = 1500; // Pause before deleting
            } else {
                delay = 200;
            }
        } else {
            animatedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % texts.length;
                delay = 500; // Pause before typing next word
            } else {
                delay = 100;
            }
        }
        setTimeout(type, delay);
    }

    type();
});
