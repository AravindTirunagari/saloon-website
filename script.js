document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     Navbar Scroll Effect & Mobile Navigation Toggle
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Add background styling to navbar upon scrolling down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Toggle mobile menu visibility
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  /* ==========================================================================
     Services Menu Filtering System
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active status from all filter buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Activate clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* ==========================================================================
     Booking Modal Functionality
     ========================================================================== */
  const bookingModal = document.getElementById('bookingModal');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeModalBtn = document.getElementById('closeModal');

  // Open modal handler
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      bookingModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  // Close modal handler
  const closeModal = () => {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  closeModalBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside the modal box
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      closeModal();
    }
  });

  /* ==========================================================================
     Form Submissions Handling (Placeholder Behavior)
     ========================================================================== */
  const bookingForm = document.getElementById('bookingForm');
  const contactForm = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('newsletterForm');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for requesting an appointment. Our concierge team will reach out shortly to confirm.');
      bookingForm.reset();
      closeModal();
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your message has been received. We will get back to you within 24 hours.');
      contactForm.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing to our Private Circle.');
      newsletterForm.reset();
    });
  }
});