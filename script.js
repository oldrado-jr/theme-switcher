document.querySelector('#switch button').addEventListener('click', (e) => {
  e.preventDefault();
  const html = document.documentElement;
  html.classList.toggle('dark');
});
