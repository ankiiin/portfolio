document.addEventListener("DOMContentLoaded", () => {
    const textEl = document.getElementById("typewriter");
    const words = ["efficient", "responsive", "modern", "accessible"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentWord = words[wordIndex];
      const visibleText = isDeleting
        ? currentWord.substring(0, charIndex--)
        : currentWord.substring(0, charIndex++);
  
      textEl.textContent = visibleText;
  
      if (!isDeleting && charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    }
  
    if (textEl) type();
  });

      document.querySelectorAll(".video-card").forEach((card) => {
        const video = card.querySelector("video");
        card.addEventListener("mouseenter", () => {
          video.play();
        });
        card.addEventListener("mouseleave", () => {
          video.pause();
          video.currentTime = 0;
        });
      });
    
      // Stack carousel
      const carousel = document.querySelector("#stack-carousel .flex");
      const dots = document.querySelectorAll(".carousel-dot");
      let currentIndex = 0;
      const slideCount = dots.length;
    
      function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
          dot.classList.toggle("bg-[#f6b6c6]", i === index);
          dot.classList.toggle("bg-gray-300", i !== index);
        });
      }
    
      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          currentIndex = i;
          showSlide(currentIndex);
        });
      });
    
      setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
      }, 4000);
    
      showSlide(0);
  
    // Progress bar scroll
  window.addEventListener("scroll", () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / docHeight) * 100;
      document.getElementById("progress-bar").style.width = progress + "%";
    });
    
    // Confetti on project click
    document.querySelectorAll(".project-link").forEach(link => {
      link.addEventListener("click", () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      });
    });
    
    // Entrance animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    });
    document.querySelectorAll(".section-fade").forEach(section => observer.observe(section));
    
    // Fake terminal typing effect
    const terminalOutput = document.getElementById("terminal-output");
    const commands = [
      "> npx create-react-app my-app",
      "> cd my-app",
      "> npm install tailwindcss",
      "> npm run dev",
      "> git init && git push"
    ];
    let i = 0;
    
    function typeNext() {
      if (i >= commands.length) return;
      const line = document.createElement("p");
      line.textContent = commands[i];
      terminalOutput.appendChild(line);
      i++;
      setTimeout(typeNext, 1000);
    }
    
    typeNext();ø