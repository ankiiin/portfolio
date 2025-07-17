document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section-fade");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#skills-carousel > div");
    const dots = document.querySelectorAll(".carousel-dot");
  
    let index = 0;
    const totalSlides = dots.length;
  
    function updateCarousel() {
      carousel.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("bg-[#f6b6c6]", i === index);
        dot.classList.toggle("bg-gray-300", i !== index);
      });
    }
  
    function nextSlide() {
      index = (index + 1) % totalSlides;
      updateCarousel();
    }
  
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
      });
    });
  
    // Auto-slide
    setInterval(nextSlide, 4000);
  
    updateCarousel();
  });