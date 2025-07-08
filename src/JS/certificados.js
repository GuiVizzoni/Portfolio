// certificados.js
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-cert');
  const contents = document.querySelectorAll('.tab-content-cert');

  function hideAllContents() {
    contents.forEach(c => c.classList.add('hidden'));
  }

  function removeActiveTabs() {
    tabs.forEach(t => {
      t.classList.remove('bg-blue-300', 'dark:bg-blue-500');
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      hideAllContents();
      removeActiveTabs();
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).classList.remove('hidden');
      tab.classList.add('bg-blue-300', 'dark:bg-blue-500');
    });
  });

  // Inicializa a primeira aba ativa
  if (tabs.length > 0) {
    tabs[0].click();
  }
});
