// ..... Responsive navbar ............

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger i');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    // Add rotate animation
    hamburger.classList.add('rotate');

    setTimeout(() => {
      if (mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
      } else {
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
      }

      // Remove rotate after change
      hamburger.classList.remove('rotate');
    }, 200); // half the animation time
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