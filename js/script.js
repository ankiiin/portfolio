const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark');
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Initial load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setTheme('dark');
} else {
  setTheme('light');
}

// Toggle on click
toggleBtn.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

document.addEventListener("DOMContentLoaded", () => {
    // Luunara
    const luunaraCard = document.getElementById("luunara-card");
    const luunaraVideo = document.getElementById("luunara-video");
  
    if (luunaraCard && luunaraVideo) {
      luunaraCard.addEventListener("mouseenter", () => {
        luunaraVideo.play();
      });
      luunaraCard.addEventListener("mouseleave", () => {
        luunaraVideo.pause();
        luunaraVideo.currentTime = 0;
      });
    }
  
    // Lawara
    const lawaraCard = document.getElementById("lawara-card");
    const lawaraVideo = document.getElementById("lawara-video");
  
    if (lawaraCard && lawaraVideo) {
      lawaraCard.addEventListener("mouseenter", () => {
        lawaraVideo.play();
      });
      lawaraCard.addEventListener("mouseleave", () => {
        lawaraVideo.pause();
        lawaraVideo.currentTime = 0;
      });
    }
  
    // Auction House
    const auctionCard = document.getElementById("auctionhouse-card");
    const auctionVideo = document.getElementById("auctionhouse-video");
  
    if (auctionCard && auctionVideo) {
      auctionCard.addEventListener("mouseenter", () => {
        auctionVideo.play();
      });
      auctionCard.addEventListener("mouseleave", () => {
        auctionVideo.pause();
        auctionVideo.currentTime = 0;
      });
    }
  });