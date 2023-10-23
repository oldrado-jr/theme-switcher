document.querySelector('#switch button').addEventListener('click', (e) => {
  e.preventDefault();
  const html = document.documentElement;
  html.classList.toggle('dark');
  const theme = html.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'light';
  const html = document.documentElement;
  theme === 'light' ? html.classList.remove('dark') : html.classList.add('dark');
});
