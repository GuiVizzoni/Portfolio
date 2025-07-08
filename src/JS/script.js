const themeToggleBtn = document.getElementById('theme-toggle');
const html = document.getElementById('html');

// Carregar tema salvo
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
  html.classList.add('dark');
  themeToggleBtn.textContent = '☀️';
} else {
  html.classList.remove('dark');
  themeToggleBtn.textContent = '🌙';
}

// Toggle do botão
themeToggleBtn.addEventListener('click', () => {
  const modoEscuroAtivo = html.classList.toggle('dark');
  localStorage.setItem('tema', modoEscuroAtivo ? 'dark' : 'light');
  themeToggleBtn.textContent = modoEscuroAtivo ? '☀️' : '🌙';
});
