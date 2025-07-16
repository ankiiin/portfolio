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