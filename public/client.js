// public/client.js

// Função que renderiza o conteúdo principal (specs, posts, etc.)
const renderContent = (brandKey) => { 
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; 

    // 🔑 MUDANÇA: Agora, os dados vêm de uma variável global injetada pelo EJS no layout.
    const productData = window.productDataGlobal; 
    const itemData = productData[brandKey];
    
    // Se o itemData não existir, paramos
    if (!itemData) return;
    
    // LÓGICA DE APLICAÇÃO DE ESTILOS (liquid-glass ou clean-layout)
    if (brandKey === 'apple-watch' || brandKey === 'airpods') {
        mainContent.classList.add('liquid-glass-card');
        mainContent.classList.remove('clean-layout'); 
    } else {
        mainContent.classList.remove('liquid-glass-card');
    }

    if (brandKey === 'blogs' || brandKey === 'gpx-routes') {
        mainContent.classList.add('clean-layout');
    } else {
        mainContent.classList.remove('clean-layout');
    }
    
    // Renderiza o cabeçalho principal
    const headerElement = document.createElement('h2');
    headerElement.innerHTML = itemData.header;
    mainContent.appendChild(headerElement);

    // Itera pelas seções (ex: "S9 LTE", "POSTS COMPLETOS")
    itemData.sections.forEach(section => {
        const sectionElement = document.createElement('section');
        sectionElement.id = section.id;

        const titleElement = document.createElement('h3');
        titleElement.textContent = section.title; 
        sectionElement.appendChild(titleElement);
        
        const listElement = document.createElement('ul');

        // Lógica para listas de ESPECIFICAÇÕES (Specs)
        if (section.specs) {
            listElement.classList.add('specs-list');
            section.specs.forEach(spec => {
                const listItem = document.createElement('li');
                listItem.innerHTML = spec; 
                listElement.appendChild(listItem);
            });
        
        // Lógica para listas de POSTS/ROTAS (Blog/GPX)
        } else if (section.posts) {
            listElement.classList.add('blog-list');
            section.posts.forEach(post => {
                const listItem = document.createElement('li');
                
                const dateSpan = document.createElement('span');
                dateSpan.classList.add('blog-date');
                dateSpan.textContent = post.date;
                listItem.appendChild(dateSpan);

                const titleLink = document.createElement('a');
                titleLink.classList.add('blog-title');
                titleLink.href = post.link;
                titleLink.textContent = post.title;
                titleLink.target = "_blank"; 
                listItem.appendChild(titleLink);
                
                listElement.appendChild(listItem);
            });
        }

        sectionElement.appendChild(listElement);
        mainContent.appendChild(sectionElement);
    });
    
    // Atualiza a classe 'active' nos botões
    document.querySelectorAll('.action-btn').forEach(btn => btn.classList.remove('active'));
    // Encontra o botão correspondente e ativa
    const activeBtn = document.getElementById(`${brandKey}-btn`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
};


document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Modo Escuro ---
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const localStorageKey = 'watch-funcional-theme';
    
    const savedTheme = localStorage.getItem(localStorageKey);
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem(localStorageKey, 'dark');
            toggleButton.textContent = 'Modo Claro';
        } else {
            localStorage.setItem(localStorageKey, 'light');
            toggleButton.textContent = 'Modo Escuro';
        }
    });

    // --- Lógica de Seleção de Marca/Tópico (Botões) ---
    document.getElementById('apple-watch-btn').addEventListener('click', () => renderContent('apple-watch'));
    document.getElementById('airpods-btn').addEventListener('click', () => renderContent('airpods'));
    document.getElementById('samsung-btn').addEventListener('click', () => renderContent('samsung'));
    document.getElementById('blogs-btn').addEventListener('click', () => renderContent('blogs')); 
    document.getElementById('gpx-routes-btn').addEventListener('click', () => renderContent('gpx-routes')); 

    // --- Lógica do Input de Cor ---
    const colorInput = document.getElementById('color-input');
    const defaultBgColor = '#ff6b99'; 

    colorInput.addEventListener('blur', function() {
        let newColor = colorInput.textContent.trim();
        // Verifica se é um código hex ou um nome de cor básico
        if (newColor.match(/^#([0-9A-F]{3}){1,2}$/i) || newColor.match(/^[a-z]+$/i)) {
            document.body.style.setProperty('--takorii-bg', newColor);
        } else {
            document.body.style.setProperty('--takorii-bg', defaultBgColor);
        }
    });

    // Chama o renderContent inicial com o primeiro item
    // 💡 Ele usa 'apple-watch' porque é o primeiro botão que recebe a classe 'active'.
    renderContent('apple-watch'); 
});