// JavaScript for Jasa Pembuatan Website

// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.title = 'Scroll to top';
scrollTopBtn.innerHTML = '&#8679;';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

// Testimonial Slider (simple horizontal scroll with snap)
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  testimonialSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    testimonialSlider.classList.add('active');
    startX = e.pageX - testimonialSlider.offsetLeft;
    scrollLeft = testimonialSlider.scrollLeft;
  });
  testimonialSlider.addEventListener('mouseleave', () => {
    isDown = false;
    testimonialSlider.classList.remove('active');
  });
  testimonialSlider.addEventListener('mouseup', () => {
    isDown = false;
    testimonialSlider.classList.remove('active');
  });
  testimonialSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - testimonialSlider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    testimonialSlider.scrollLeft = scrollLeft - walk;
  });
}

// Contact Form Validation and WhatsApp Link Generation (for kontak.html)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm');
  if (!form) return;

  const nameInput = form.querySelector('input[name="nama"]');
  const messageInput = form.querySelector('textarea[name="pesan"]');
  const waButton = form.querySelector('#sendWaBtn');

  function validate() {
    let valid = true;
    if (!nameInput.value.trim()) {
      nameInput.classList.add('input-error');
      valid = false;
    } else {
      nameInput.classList.remove('input-error');
    }
    if (!messageInput.value.trim()) {
      messageInput.classList.add('input-error');
      valid = false;
    } else {
      messageInput.classList.remove('input-error');
    }
    return valid;
  }

  waButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!validate()) return;

    const nama = encodeURIComponent(nameInput.value.trim());
    const email = encodeURIComponent(form.querySelector('input[name="email"]').value.trim());
    const hp = encodeURIComponent(form.querySelector('input[name="hp"]').value.trim());
    const pesan = encodeURIComponent(messageInput.value.trim());

    let text = `Halo nama saya ${nama}, saya ingin buat website.`;
    if (email) text += `%0AEmail: ${email}`;
    if (hp) text += `%0ANomor HP: ${hp}`;
    text += `%0APesan: ${pesan}`;

    const waLink = `https://wa.me/6281295728972?text=${text}`;
    window.open(waLink, '_blank');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    this.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
      navMenu.classList.remove('open');
    }
  });

  // Projek filter buttons functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projekCards = document.querySelectorAll('.projek-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projekCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
