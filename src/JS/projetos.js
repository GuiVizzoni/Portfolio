const projetosPorAno = {
  2022: [
    {
      titulo: "Projeto TCC - Site wiki do jogo Brawlhalla (InBrawlhalla)",
      descricao: "Site desenvolvido por 3 alunos do 3° Ano do Ensino Médio, do Centro Educacional Radier, sobre a criação de um site informativo de um determinado jogo. Nele, será possível encontrar informações sobre o jogo em si, os criadores, as plataformas disponíveis para jogar, dicas para evolução, a história do jogo e dos personagens, entre outros. <br>O objetivo do site consiste na construção de uma wiki explicativa e informativa em português do Brasil sobre o jogo Brawlhalla. <br> Tecnologias utilizadas: HTML, CSS, JavaScript, Bootstrap5.",
      github: "https://github.com/GuiVizzoni/Inbrawlhalla"
    }
  ],
  2023: [
    {
      titulo: "Dashboard Flask",
      descricao: "Web app com gráficos, MySQL e autenticação.",
      github: "https://github.com/seu-user/dashboard-flask"
    },
    {
      titulo: "Jogo em Unity",
      descricao: "Mini game de plataforma com movimentação e colisões.",
      github: "https://github.com/seu-user/jogo-unity"
    }
  ],
  2024: [
    {
      titulo: "Sistema de Pedidos (C#)",
      descricao: "Simula pedidos de uma lanchonete usando padrões de projeto.",
      github: "https://github.com/seu-user/pedidos-csharp"
    },
    {
      titulo: "API em Node.js",
      descricao: "API RESTful com Express e banco MongoDB.",
      github: "https://github.com/seu-user/api-node"
    }
  ],
  2025: [
    {
      titulo: "Portfólio Pessoal",
      descricao: "Página pessoal com HTML, Tailwind e interações JS.",
      github: "https://github.com/seu-user/portfolio"
    },
    {
      titulo: "IA jogando Mario",
      descricao: "Estudo com Reinforcement Learning pra controlar personagem no SNES.",
      github: "https://github.com/seu-user/ia-mario"
    }
  ]
};

const tabs = document.querySelectorAll(".tab-button");
const content = document.getElementById("tab-content");

function renderProjetos(ano) {
  content.innerHTML = "";
  projetosPorAno[ano].forEach(({ titulo, descricao, github }) => {
    const item = document.createElement("div");
    item.className = "p-4 border rounded shadow hover:scale-[1.01] transition-transform bg-white animate-fade-in";
    item.innerHTML = `
      <h3 class="text-xl font-semibold text-blue-700 mb-2">${titulo}</h3>
      <p class="text-justify mb-2">${descricao}</p>
      <a href="${github}" target="_blank" class="text-blue-600 hover:underline">🔗 Ver no GitHub</a>
    `;
    content.appendChild(item);
  });
}

// Seleciona o ano atual por padrão (2025)
renderProjetos(2022);

tabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabs.forEach((el) => el.classList.remove("bg-blue-300"));
    btn.classList.add("bg-blue-300");
    const ano = btn.getAttribute("data-year");
    renderProjetos(ano);
  });
});