# Web Currículo - Vinicius Silva do Canto

Este é o código-fonte do meu site pessoal e currículo web, disponível em [docanto.net](https://docanto.net), desenvolvido para demonstrar minha experiência e conjunto de habilidades em Engenharia de Software e Front-end.

## 🚀 Tecnologias e Stack
Anteriormente um arquivo HTML simples, o projeto foi totalmente reestruturado para ser mais escalável, moderno e compilar em minificação real. A versão atual utiliza:

* **Vue 3** (Composition API via `<script setup>`)
* **Vite** (Para bundle ultrarrápido)
* **TailwindCSS v4** (Utility-first CSS, otimizado para produção)
* **Vue I18n** (Internacionalização reativa PT/EN sem carregamento extra)
* **Font Awesome** (Pacote de ícones via CDN assíncrono)
* **Favicon SVG** (Ícone moderno com símbolo de código)
* **GitHub Actions** (Automação de CI/CD para Node.js build e upload via FTP)

## 🌎 Funcionalidades Destacadas
* **Internacionalização (i18n):** Todo o conteúdo do site é mapeado via dicionário (`src/locales/messages.js`). Trocar o idioma alterna o estado localmente na hora. O `localStorage` grava a última escolha do usuário e reinicia a página usando essa memória nas visitas seguintes.
* **Componentização:** A listagem de experiências profissionais (`Experience.vue`) e habilidades (`Skills.vue`) carregam dados JSON mapeados do I18n para iterar o HTML `v-for`, o que permite injetar novos blocos futuros editando apenas um arquivo chave.
* **Projetos e Clientes:** Listagem atualizada com projetos recentes como Planning Poker, com separação dinâmica inteligente entre projetos pessoais e clientes corporativos.
* **Automação de Deploy:** Qualquer push na branch `main` ativa o `ftp-deploy.yml`. O servidor GitHub baixa o repositório, instale o Node.js v20, executa `npm run build` localmente e, via FTP, envia apenas o conteúdo estático da pasta `/dist` para a HostGator, economizando espaço em disco e garantindo zero downtime.

## 🛠️ Como rodar localmente

Clone o projeto
```bash
git clone https://github.com/viniciusdocanto/docanto.git
```

Instale as dependências:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Você pode visualizar a aplicação localmente pelo `http://localhost:5173`. Modificações feitas em `.vue` ou `.js` serão aplicadas instantaneamente através do Hot Module Replacement (HMR).

## 📄 Licença
O formato deste currículo (código-base Vue) é de código aberto e livre caso queira utilizá-lo como inspiração (ver `LICENSE`). Todo o conteúdo em texto (dados de experiência de trabalho, biografia e rosto) é de autoria e uso exclusivo de [Vinicius Silva do Canto](https://linkedin.com/in/viniciusdocanto).
