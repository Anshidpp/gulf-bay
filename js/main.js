document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger i");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navbar = document.querySelector(".nav-main");
  const logo = document.querySelector(".nav-logo img");

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    hamburger.classList.add("rotate");

    setTimeout(() => {
      if (mobileMenu.classList.contains("active")) {
        hamburger.classList.remove("fa-bars");
        hamburger.classList.add("fa-times");
      } else {
        hamburger.classList.remove("fa-times");
        hamburger.classList.add("fa-bars");
      }
      hamburger.classList.remove("rotate");
    }, 200);
  });

  // Nav Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
      logo.src = "./assets/logo-img/LOGO1.png"; // new logo when scrolled
    } else {
      navbar.classList.remove("scrolled");
      logo.src = "./assets/logo-img/LOGO2.png"; // default logo
    }
  });

  // Mobile dropdown toggle
  const mobileDropdown = document.querySelector(".mobile-dropdown span");
  const mobileDropdownMenu = document.querySelector(".mobile-dropdown-menu");

  mobileDropdown.addEventListener("click", () => {
    mobileDropdownMenu.classList.toggle("active");
    mobileDropdown.querySelector("i").classList.toggle("fa-chevron-up");
    mobileDropdown.querySelector("i").classList.toggle("fa-chevron-down");
  });
});


// ----- Dropdown open/close -----
document.addEventListener("DOMContentLoaded", () => {
  const dropdownLinks = document.querySelectorAll(".dropdown > a");

  dropdownLinks.forEach(link => {
    const menu = link.nextElementSibling;
    const icon = link.querySelector("i");

    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Close all other dropdowns
      document.querySelectorAll(".dropdown-menu").forEach(m => {
        if (m !== menu) m.classList.remove("active");
      });
      document.querySelectorAll(".dropdown > a i").forEach(ic => {
        if (ic !== icon) ic.classList.remove("rotated");
      });

      // Toggle this one
      menu.classList.toggle("active");
      icon.classList.toggle("rotated");
    });
  });

  // Close dropdowns if clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("active"));
      document.querySelectorAll(".dropdown > a i").forEach(ic => ic.classList.remove("rotated"));
    }
  });
});



// ..... auto carousel ............

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.home-bk-img img');

  if (!images.length) {
    console.error('Carousel: no images found. Check selector and image paths.');
    return;
  }

  // Optional: log how many images found
  // console.log('Carousel images found:', images.length);

  let index = 0;
  const intervalMs = 4000; // change speed here

  // make sure first image visible
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');

  // safe interval (won't run if only one image)
  if (images.length > 1) {
    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, intervalMs);
  }
});


// .......... FAQ  ............


document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });
});