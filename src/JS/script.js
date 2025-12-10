const themeToggleBtn = document.getElementById('theme-toggle');
const html = document.getElementById('html');

// ======== TEMA ESCURO ===========
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
  html.classList.add('dark');
  themeToggleBtn.textContent = '☀️';
} else {
  html.classList.remove('dark');
  themeToggleBtn.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  const modoEscuroAtivo = html.classList.toggle('dark');
  localStorage.setItem('tema', modoEscuroAtivo ? 'dark' : 'light');
  themeToggleBtn.textContent = modoEscuroAtivo ? '☀️' : '🌙';
});

// ======== PROJETOS ===========
const projetos = {
    2022: [
      {
        titulo: "Projeto TCC - Site wiki do jogo Brawlhalla (InBrawlhalla)",
        descricao: "Site desenvolvido por 3 integrantes sobre o jogo Brawlhalla, incluindo história, dicas e personagens.",
        github: "https://github.com/GuiVizzoni/Inbrawlhalla",
        imagem: "./src/Imagens/Projetos/2022/inbrawlhalla.png"
      }
    ],
    2023: [
      {
        titulo: "Projeto Fortes - Site proposto para a empresa Fortes Engenharia",
        descricao: "Site desenvolvido por 4 integrantes para produção de um projeto integrado que está sendo trabalhado nas disciplinas de Desenvolvimento de Banco de Dados, Construção de Software Web e UX Design.",
        github: "https://github.com/GuiVizzoni/projeto_Fortes",
        imagem: "./src/Imagens/Projetos/2023/fortes_engenharia.png"
      }
    ],
    2024: [
      {
        titulo: "Sistema de gerenciamento de grupos - InovaWeek 2024",
        descricao: "Sistema web para gerenciamento de grupos em eventos, com cadastro, atribuição de tarefas e acompanhamento de progresso.",
        github: "https://github.com/GuiVizzoni/Trabalho_Grupos_Inova",
        imagem: "./src/Imagens/Projetos/2024/InovaWeek2024.png"
      },
      {
        titulo: "Sistema Escolar em C#",
        descricao: "Sistema de gerenciamento de alunos e disciplinas usando Singleton.",
        github: "https://github.com/GuiVizzoni/SistemaEscolar_POOII_CC4M",
        imagem: "./src/Imagens/Projetos/2024/SistemaEscolar.png"
      }
    ],
    2025: [
      {
        titulo: "Projeto LoveWithU",
        descricao: "Painel em Flask + Chart.js com autenticação e views customizadas.",
        github: "https://github.com/LoveWithU2/LoveWithU_Oficial",
        imagem: "./src/Imagens/Projetos/2025/loveWithU.png"
      },
      {
        titulo: "Jogo 3D com Unity",
        descricao: "Sistema de NPCs e mecânicas de combate, experimentos com design de IA.",
        github: "https://github.com/seuprojeto2025",
        imagem: "./src/Imagens/Projetos/2025/RiseOfNature.png"
      },
      {
        titulo: "Portfólio Interativo",
        descricao: "Site em Tailwind + JS com tema dark, animações e layout responsivo.",
        github: "https://github.com/GuiVizzoni/Portfolio",
        imagem: "./src/Imagens/Projetos/2025/Portfolio.png"
      },
      {
        titulo: "Site Prevenir Extintores",
        descricao: "O projeto visa modernizar o site da Prevenir utilizando React (front-end) e C# (back-end) para aumentar a visibilidade e impulsionar o negócio.",
        github: "https://github.com/GuiVizzoni/Prevenir_Extintores",
        imagem: "./src/Imagens/Projetos/2025/PrevenirExtintores.png"
      },
      {
        titulo: "Integração de e-commerce para Creators em APP",
        descricao: "Desenvolvimento de um e-commerce/marketplace interno voltado para Creators, com o objetivo de conectar criadores de conteúdo a serviços especializados, reduzindo fricções operacionais e fortalecendo o ecossistema da plataforma.",
        github: "https://github.com/GuiVizzoni/Desafio_Zzone_Bootcamp_2025",
        imagem: "./src/Imagens/Projetos/2025/CreatorHub.jfif"
      }
    ]
  };

  // config
  const minAno = 2022;
  const maxAno = 2025;
  let anoAtual = maxAno; // começa em 2025
  const cardsPorPage = 2; // quantos cards mostrar por "página"

  // elementos DOM
  const anoEl = document.getElementById('currentYear');
  const prevYearBtn = document.getElementById('prevYear');
  const nextYearBtn = document.getElementById('nextYear');
  const cardsContainer = document.getElementById('projetos-cards');
  const prevProjBtn = document.getElementById('prevProj');
  const nextProjBtn = document.getElementById('nextProj');
  const pageIndicator = document.getElementById('pageIndicator');

  // estado de paginação dentro do ano
  let paginaAtual = 0; // index starting 0

  function getLista(ano) {
    return projetos[ano] || [];
  }

  function calcularPaginas(ano) {
    const lista = getLista(ano);
    return Math.max(1, Math.ceil(lista.length / cardsPorPage));
  }

  // renderização dos cards com paginação
let direcao = 'right'; // controla a direção do slide

function renderProjetos(animate = true) {
  const lista = getLista(anoAtual);
  const totalPaginas = calcularPaginas(anoAtual);
  if (paginaAtual >= totalPaginas) paginaAtual = totalPaginas - 1;
  if (paginaAtual < 0) paginaAtual = 0;

  // ====== Animação de saída (fade + slide) ======
  if (animate) {
    cardsContainer.classList.remove('slide-enter-left', 'slide-enter-right', 'slide-active');
    cardsContainer.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    cardsContainer.style.opacity = '0';
    cardsContainer.style.transform = direcao === 'right' ? 'translateX(60px)' : 'translateX(-60px)';
  }

  // ====== Após o fade-out, atualiza os projetos ======
  setTimeout(() => {
    cardsContainer.innerHTML = '';

    if (!lista || lista.length === 0) {
      const msg = document.createElement('div');
      msg.className = 'text-center text-gray-500 dark:text-gray-400 col-span-2';
      msg.innerHTML = `<p>Novos projetos em desenvolvimento.<br>Meus trabalhos mais recentes estão sendo preparados e serão publicados aqui em breve. Volte a visitar!</p>`;
      cardsContainer.appendChild(msg);
      pageIndicator.textContent = '';
      prevProjBtn.classList.add('hidden');
      nextProjBtn.classList.add('hidden');
    } else {
      const start = paginaAtual * cardsPorPage;
      const end = start + cardsPorPage;
      const slice = lista.slice(start, end);

      slice.forEach(p => {
        const card = document.createElement('article');
        card.className = 'bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition';
        const imgHTML = p.imagem ? `<img src="${p.imagem}" alt="${escapeHtml(p.titulo)}" class="rounded-md mb-4 w-full h-44 object-cover shadow-sm">` : '';
        card.innerHTML = `
          ${imgHTML}
          <h3 class="text-xl font-semibold mb-2">${escapeHtml(p.titulo)}</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">${escapeHtml(p.descricao)}</p>
          <a href="${p.github}" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">Ver no GitHub</a>
        `;
        cardsContainer.appendChild(card);
      });

      if (calcularPaginas(anoAtual) > 1) {
        prevProjBtn.classList.remove('hidden');
        nextProjBtn.classList.remove('hidden');
        pageIndicator.textContent = `Página ${paginaAtual + 1} de ${calcularPaginas(anoAtual)}`;
      } else {
        prevProjBtn.classList.add('hidden');
        nextProjBtn.classList.add('hidden');
        pageIndicator.textContent = '';
      }
    }

    // ====== Animação de entrada (fade + slide reverso) ======
    requestAnimationFrame(() => {
      cardsContainer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      cardsContainer.style.opacity = '1';
      cardsContainer.style.transform = 'translateX(0)';
    });

  }, animate ? 250 : 0);

  // atualiza header do ano e botões de ano
  anoEl.textContent = anoAtual;
  prevYearBtn.disabled = (anoAtual <= minAno);
  nextYearBtn.disabled = (anoAtual >= maxAno);
}


  // segurança: escape simples para evitar quebra com acentos/quotes
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  // handlers
  prevYearBtn.addEventListener('click', () => {
  if (anoAtual > minAno) {
    direcao = 'left';
    anoAtual--;
    paginaAtual = 0;
    renderProjetos(true);
  }
});

nextYearBtn.addEventListener('click', () => {
  if (anoAtual < maxAno) {
    direcao = 'right';
    anoAtual++;
    paginaAtual = 0;
    renderProjetos(true);
  }
});

prevProjBtn.addEventListener('click', () => {
  if (paginaAtual > 0) {
    direcao = 'left';
    paginaAtual--;
    renderProjetos(true);
  }
});

nextProjBtn.addEventListener('click', () => {
  const total = calcularPaginas(anoAtual);
  if (paginaAtual < total - 1) {
    direcao = 'right';
    paginaAtual++;
    renderProjetos(true);
  }
});


  // inicia com anoAtual (se quiser começar em outro ano, altera aqui)
  if (!(anoAtual in projetos)) {
    // garante que anoAtual seja válido: pega o maior definido
    const anosDisponiveis = Object.keys(projetos).map(Number).filter(a => a >= minAno && a <= maxAno);
    if (anosDisponiveis.length) anoAtual = Math.max(...anosDisponiveis);
    else anoAtual = maxAno;
  }

  renderProjetos(false);

// ======== FORM CONTATO ===========
const form = document.getElementById("contactForm");
const msgEnviada = document.getElementById("msg-enviada");
const msgErro = document.getElementById("msg-erro");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = new FormData(form);
  const res = await fetch(form.action, {
    method: "POST",
    body: dados,
    headers: { Accept: "application/json" },
  });

  if (res.ok) {
    msgEnviada.classList.remove("hidden");
    msgErro.classList.add("hidden");
    form.reset();
  } else {
    msgErro.classList.remove("hidden");
    msgEnviada.classList.add("hidden");
  }
});

// ======== FADE-IN =======
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-in").forEach((el) => {
  el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-1000");
  observer.observe(el);
});

// ======== ITYPED - EFEITO DE DIGITAÇÃO ===========
const itypedElement = document.getElementById('ityped-text');

// Verifica se o elemento existe antes de inicializar o iTyped
if (itypedElement) {
    window.ityped.init(itypedElement, {
        strings: [
            'Desenvolvimento Full-Stack', 
            'Análise de Dados', 
            'Automações', 
            'Jogos'
        ], // As strings que serão digitadas
        loop: true,                 // Repete a animação infinitamente
        typeSpeed: 90,              // Velocidade de digitação (ms)
        backSpeed: 30,              // Velocidade de "apagar" (ms)
        startDelay: 500,            // Atraso antes de começar (ms)
        backDelay: 1500,            // Atraso antes de apagar e começar a próxima string (ms)
        showCursor: true,           // Mostra o cursor piscando
        cursorChar: '|',            // O caractere do cursor
    });
}