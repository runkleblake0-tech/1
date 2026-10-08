const root = document.documentElement;
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');

const setTheme = (theme) => {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  root.setAttribute('data-theme', nextTheme);

  try {
    window.localStorage.setItem('seb-theme', nextTheme);
  } catch (error) {
    // Ignore persistence failures in restricted browsers.
  }
};

const getThemePreference = () => {
  try {
    const storedTheme = window.localStorage.getItem('seb-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }
  } catch (error) {
    // Ignore storage access failures and fall back to the system preference.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

if (navLinks) {
  navLinks.addEventListener('click', (event) => {
    const target = event.target.closest('a');
    if (!target) {
      return;
    }

    const href = target.getAttribute('href');
    if (!href || !href.startsWith('#')) {
      return;
    }

    const section = document.querySelector(href);
    if (!section) {
      return;
    }

    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

setTheme(getThemePreference());

// expose for tests
export { navLinks, themeToggle, root };
