const root = document.documentElement;
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');

// Simple nav interaction
if (navLinks) {
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      // Close mobile nav if present (no-op here)
      console.log('navLinks click ->', e.target.getAttribute('href'));
    }
  });
}

// Theme toggle
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    if (root.classList.contains('dark')) {
      root.style.setProperty('--bg', '#0b1220');
      root.style.setProperty('--fg', '#e6eef8');
    } else {
      root.style.setProperty('--bg', '#ffffff');
      root.style.setProperty('--fg', '#111827');
    }
  });
}

// expose for tests
export { navLinks, themeToggle, root };
