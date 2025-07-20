const html = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");
const toggleBtnMobile = document.getElementById("theme-toggle-mobile");
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

// 🌙 DARK/LIGHT THEME
function setTheme(theme) {
  if (theme === "dark") {
    html.classList.add("dark");
    if (toggleBtn) toggleBtn.textContent = "☀️";
    if (toggleBtnMobile) toggleBtnMobile.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    if (toggleBtn) toggleBtn.textContent = "🌙";
    if (toggleBtnMobile) toggleBtnMobile.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// Initial load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setTheme("dark");
} else {
  setTheme("light");
}

// Toggle click
toggleBtn?.addEventListener("click", () => {
  html.classList.contains("dark") ? setTheme("light") : setTheme("dark");
});
toggleBtnMobile?.addEventListener("click", () => {
  html.classList.contains("dark") ? setTheme("light") : setTheme("dark");
});

// 🍔 HAMBURGER MENU
hamburgerBtn?.addEventListener("click", () => {
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
});

// 📹 VIDEO HOVER
document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    { cardId: "luunara-card", videoId: "luunara-video" },
    { cardId: "lawara-card", videoId: "lawara-video" },
    { cardId: "auctionhouse-card", videoId: "auctionhouse-video" },
  ];

  cards.forEach(({ cardId, videoId }) => {
    const card = document.getElementById(cardId);
    const video = document.getElementById(videoId);

    if (card && video) {
      card.addEventListener("mouseenter", () => {
        video.play();
      });
      card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  });
});

// 🌐 LANGUAGE
document.addEventListener("DOMContentLoaded", () => {
  const langNoLink = document.querySelector(".lang-no");
  const langEnLink = document.querySelector(".lang-en");

  langNoLink?.addEventListener("click", () => {
    localStorage.setItem("preferredLang", "no");
  });
  langEnLink?.addEventListener("click", () => {
    localStorage.setItem("preferredLang", "en");
  });

  const preferredLang = localStorage.getItem("preferredLang");

  if (preferredLang === "en") {
    langEnLink?.classList.add("font-semibold", "text-[#f6b6c6]", "dark:text-[#f6b6c6]");
    langNoLink?.classList.remove("font-semibold", "text-[#f6b6c6]", "dark:text-[#f6b6c6]");
  } else {
    langNoLink?.classList.add("font-semibold", "text-[#f6b6c6]", "dark:text-[#f6b6c6]");
    langEnLink?.classList.remove("font-semibold", "text-[#f6b6c6]", "dark:text-[#f6b6c6]");
  }

  if (preferredLang === "en" && !location.pathname.includes("_eng")) {
    if (!location.pathname.includes("/html/")) {
      location.href = "./html/index_eng.html";
    } else if (location.pathname.includes("ux.html")) {
      location.href = "ux-eng.html";
    } else if (location.pathname.includes("frontend.html")) {
      location.href = "frontend-eng.html";
    }
  }

  if (preferredLang === "no" && location.pathname.includes("_eng")) {
    if (location.pathname.includes("index_eng.html")) {
      location.href = "../index.html";
    } else if (location.pathname.includes("ux-eng.html")) {
      location.href = "ux.html";
    } else if (location.pathname.includes("frontend-eng.html")) {
      location.href = "frontend.html";
    }
  }
});