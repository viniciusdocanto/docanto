<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currículo - Vinicius Silva do Canto</title>
    <meta name="description" content="Site currículo do desenvolvedor Front-end Vinicius Silva do Canto"
    
    <!-- Tailwind CSS -->
    <!--script defer src="https://cdn.tailwindcss.com"></script-->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    
    <!-- Font Awesome para ícones -->
    <link defer rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"  fetchpriority="low">
    
    <!-- Google Fonts -->

    <style>
        body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
        }
        .skill-tag {
            transition: all 0.3s ease;
        }
        .skill-tag:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .timeline-line {
            position: absolute;
            left: 24px;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: #e5e5e5;
            z-index: 0;
        }
        @media (min-width: 768px) {
            .timeline-line {
                left: 50%;
                margin-left: -1px;
            }
        }

        /* Language Switching Logic */
        body.lang-pt .lang-en { display: none !important; }
        body.lang-en .lang-pt { display: none !important; }
        
        /* Language Toggle Button Animation */
        .lang-btn { transition: transform 0.2s; }
        .lang-btn:active { transform: scale(0.95); }
    </style>
</head>
<body class="text-neutral-700 antialiased lang-pt">

    <!-- Language Toggle (Absolute Positioned) -->
    <div class="fixed top-4 right-4 z-50">
        <button onclick="toggleLanguage()" class="lang-btn bg-white/90 backdrop-blur text-neutral-800 px-4 py-2 rounded-full shadow-lg border border-neutral-200 font-bold hover:bg-white hover:text-orange-700 transition-colors flex items-center gap-2">
            <i class="fa-solid fa-globe"></i>
            <span class="lang-pt">EN</span>
            <span class="lang-en">PT</span>
        </button>
    </div>

    <!-- Header / Hero Section -->
    <header  class="text-white pt-20 pb-24 relative overflow-hidden" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('bg.webp'); background-size: cover; background-position: center;" fetchpriority="high">
        
        <div class="container mx-auto px-6 relative z-10 text-center md:text-left">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div>
                    <h1 class="text-4xl md:text-6xl font-bold mb-2 tracking-tight">Vinicius Silva do Canto</h1>
                    <h2 class="text-xl md:text-2xl text-orange-700 font-medium mb-6">
                        <span class="lang-pt">Desenvolvedor Front-end Sênior</span>
                        <span class="lang-en">Senior Front-end Developer</span>
                    </h2>
                    
                    <div class="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base text-neutral-300">
                        <a href="mailto:eu@viniciusdocanto.com.br" class="hover:text-white transition-colors flex items-center gap-2">
                            <i class="fa-solid fa-envelope"></i> eu@viniciusdocanto.com.br
                        </a>
                        <span class="hidden md:inline text-neutral-600">|</span>
                        <a href="tel:+5521969244912" class="hover:text-white transition-colors flex items-center gap-2">
                            <i class="fa-solid fa-phone"></i> +55 21 9 6924 4912
                        </a>
                        <span class="hidden md:inline text-neutral-600">|</span>
                        <a href="https://linkedin.com/in/viniciusdocanto" target="_blank" class="hover:text-white transition-colors flex items-center gap-2">
                            <i class="fa-brands fa-linkedin"></i> in/viniciusdocanto
                        </a>
                    </div>
                </div>
                
                <!-- Profile Picture -->
                <div class="mt-8 md:mt-0">
                    <img src="profile.webp" fetchpriority="high" alt="Vinicius Silva do Canto" class="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-neutral-800 object-cover">
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-6 -mt-12 relative z-20 pb-20">
        
        <!-- Summary Section -->
        <section class="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-orange-500">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
                <i class="fa-solid fa-user-circle text-orange-700"></i> 
                <span class="lang-pt">Resumo Profissional</span>
                <span class="lang-en">Professional Summary</span>
            </h3>
            <div class="text-lg leading-relaxed text-neutral-600">
                <p class="lang-pt">
                    Profissional com sólida experiência em desenvolvimento web iniciada em 2007, atuando em projetos para grandes e pequenas empresas. Focado na melhoria contínua, possuo histórico comprovado em otimização de processos de desenvolvimento e gestão de tempo.
                </p>
                <p class="lang-en">
                    Professional with solid experience in web development since 2007, working on projects for large and small companies. Focused on continuous improvement, I have a proven track record in optimizing development processes and time management.
                </p>
            </div>
            <div class="mt-4 text-neutral-600">
                <p class="lang-pt">
                    Minha trajetória inclui entregas de soluções para grandes players nacionais e internacionais, como <strong class="text-neutral-800">TV Globo, TIVIT, Ricoh Brasil e CIBC Capital Markets</strong>. Também atuei em empresas de diversos segmentos como Windsor Hotéis, FINK, Brasas e Takoda Data Centers.
                </p>
                <p class="lang-en">
                    My career includes delivering solutions for major national and international players, such as <strong class="text-neutral-800">TV Globo, TIVIT, Ricoh Brasil, and CIBC Capital Markets</strong>. I have also worked in companies across various segments such as Windsor Hotels, FINK, Brasas, and Takoda Data Centers.
                </p>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="mb-16">
            <h3 class="text-2xl font-bold text-neutral-800 mb-8 text-center uppercase tracking-wide">
                <span class="lang-pt">Experiência Profissional</span>
                <span class="lang-en">Professional Experience</span>
            </h3>
            
            <div class="relative">
                <!-- Timeline Line -->
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-200"></div>

                <!-- Job 1 -->
                <div class="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
                    <div class="md:w-5/12 order-2 md:order-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 border-orange-500 w-full">
                        <h4 class="text-xl font-bold text-neutral-800">
                            <span class="lang-pt">Desenvolvedor DevOps Sênior</span>
                            <span class="lang-en">Senior DevOps Developer</span>
                        </h4>
                        <div class="text-orange-800 font-semibold mb-2">TIVIT (SP/Brasil)</div>
                        <p class="text-neutral-600">
                            <span class="lang-pt">Nos últimos 5 anos, atuei entre Front-end e DevOps em grandes projetos da TIVIT. Meu foco principal foi modernizar a esteira de desenvolvimento para acelerar o lançamento de novos produtos, garantindo entregas mais ágeis e escaláveis.</span>
                            <span class="lang-en">For the past 5 years, I have worked in both Front-end and DevOps on large projects at TIVIT. My main focus was modernizing the development pipeline to accelerate the launch of new products, ensuring faster and more scalable deliveries.</span>
                        </p>
                    </div>
                    
                    <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow flex items-center justify-center order-1 mb-4 md:mb-0 hidden md:flex">
                        <i class="fa-solid fa-code-branch text-white text-xs"></i>
                    </div>

                    <div class="md:w-5/12 order-3 md:order-2"></div>
                </div>

                <!-- Job 2 -->
                <div class="relative flex flex-col md:flex-row items-center justify-between mb-8 group">
                    <div class="md:w-5/12 order-3 md:order-1"></div>
                    
                    <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-neutral-700 rounded-full border-4 border-white shadow flex items-center justify-center order-1 hidden md:flex">
                        <i class="fa-solid fa-laptop-code text-white text-xs"></i>
                    </div>

                    <div class="md:w-5/12 order-2 md:order-2 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 border-neutral-700 w-full">
                        <h4 class="text-xl font-bold text-neutral-800">
                            <span class="lang-pt">Desenvolvedor Front-end Sênior</span>
                            <span class="lang-en">Senior Front-end Developer</span>
                        </h4>
                        <div class="text-orange-800 font-semibold mb-2">Dog and Pony Studios (Canada)</div>
                        <p class="text-neutral-600">
                            <span class="lang-pt">Durante meu período na DPS, desenvolvi diversos projetos que compõem o portfólio da empresa até hoje. Cada entrega foi uma solução sob medida para o cliente, trazendo desafios técnicos únicos e resultados duradouros.</span>
                            <span class="lang-en">During my time at DPS, I developed several projects that make up the company's portfolio to this day. Each delivery was a bespoke solution for the client, bringing unique technical challenges and lasting results.</span>
                        </p>
                    </div>
                </div>

                <?php /*
                <!-- Hidden Experience Items (7 more items based on summary) -->
                <div id="more-experience" class="hidden">
                    
                    <!-- Job 3: TV Globo -->
                    <div class="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
                        <div class="md:w-5/12 order-2 md:order-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 border-neutral-600 w-full">
                            <h4 class="text-lg font-bold text-neutral-800">
                                <span class="lang-pt">Desenvolvedor Front-end</span>
                                <span class="lang-en">Front-end Developer</span>
                            </h4>
                            <div class="text-orange-800 font-semibold mb-2">TV Globo</div>
                            <p class="text-neutral-600 text-sm">
                                <span class="lang-pt">Participação no desenvolvimento de interfaces interativas e otimização de performance para portais de grande tráfego.</span>
                                <span class="lang-en">Participation in the development of interactive interfaces and performance optimization for high-traffic portals.</span>
                            </p>
                        </div>
                        <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-neutral-600 rounded-full border-4 border-white shadow flex items-center justify-center order-1 mb-4 md:mb-0 hidden md:flex">
                            <i class="fa-solid fa-tv text-white text-xs"></i>
                        </div>
                        <div class="md:w-5/12 order-3 md:order-2"></div>
                    </div>

                    <!-- Job 4: Ricoh Brasil -->
                    <div class="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
                        <div class="md:w-5/12 order-3 md:order-1"></div>
                        <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-neutral-600 rounded-full border-4 border-white shadow flex items-center justify-center order-1 hidden md:flex">
                            <i class="fa-solid fa-print text-white text-xs"></i>
                        </div>
                        <div class="md:w-5/12 order-2 md:order-2 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 border-neutral-600 w-full">
                            <h4 class="text-lg font-bold text-neutral-800">
                                <span class="lang-pt">Desenvolvedor Web</span>
                                <span class="lang-en">Web Developer</span>
                            </h4>
                            <div class="text-orange-800 font-semibold mb-2">Ricoh Brasil</div>
                            <p class="text-neutral-600 text-sm">
                                <span class="lang-pt">Desenvolvimento de soluções corporativas e manutenção de sistemas internos.</span>
                                <span class="lang-en">Development of corporate solutions and maintenance of internal systems.</span>
                            </p>
                        </div>
                    </div>

                    <!-- Job 5: CIBC Capital Markets -->
                    <div class="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
                        <div class="md:w-5/12 order-2 md:order-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 border-neutral-600 w-full">
                            <h4 class="text-lg font-bold text-neutral-800">
                                <span class="lang-pt">Consultor Front-end</span>
                                <span class="lang-en">Front-end Consultant</span>
                            </h4>
                            <div class="text-orange-800 font-semibold mb-2">CIBC Capital Markets</div>
                            <p class="text-neutral-600 text-sm">
                                <span class="lang-pt">Atuação em projetos financeiros internacionais com foco em segurança e usabilidade.</span>
                                <span class="lang-en">Working on international financial projects focusing on security and usability.</span>
                            </p>
                        </div>
                        <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-neutral-600 rounded-full border-4 border-white shadow flex items-center justify-center order-1 mb-4 md:mb-0 hidden md:flex">
                            <i class="fa-solid fa-chart-line text-white text-xs"></i>
                        </div>
                        <div class="md:w-5/12 order-3 md:order-2"></div>
                    </div>

                    <!-- Job 6: Windsor Hotéis -->
                    <div class="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
                        <div class="md:w-5/12 order-3 md:order-1"></div>
                        <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-neutral-600 rounded-full border-4 border-white shadow flex items-center justify-center order-1 hidden md:flex">
                            <i class="fa-solid fa-hotel text-white text-xs"></i>
                        </div>
                        <div class="md:w-5/12 order-2 md:order-2 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 border-neutral-600 w-full">
                            <h4 class="text-lg font-bold text-neutral-800">
                                <span class="lang-pt">Desenvolvedor Web</span>
                                <span class="lang-en">Web Developer</span>
                            </h4>
                            <div class="text-orange-800 font-semibold mb-2">Windsor Hotéis</div>
                            <p class="text-neutral-600 text-sm">
                                <span class="lang-pt">Implementação de melhorias no site institucional e sistema de reservas.</span>
                                <span class="lang-en">Implementation of improvements in the institutional site and reservation system.</span>
                            </p>
                        </div>
                    </div>

                    <!-- Job 7: FINK -->
                    <div class="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
                        <div class="md:w-5/12 order-2 md:order-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 border-neutral-600 w-full">
                            <h4 class="text-lg font-bold text-neutral-800">
                                <span class="lang-pt">Analista de Sistemas</span>
                                <span class="lang-en">Systems Analyst</span>
                            </h4>
                            <div class="text-orange-800 font-semibold mb-2">FINK</div>
                            <p class="text-neutral-600 text-sm">
                                <span class="lang-pt">Desenvolvimento e suporte a sistemas logísticos e de mobilidade global.</span>
                                <span class="lang-en">Development and support for logistics and global mobility systems.</span>
                            </p>
                        </div>
                        <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-neutral-600 rounded-full border-4 border-white shadow flex items-center justify-center order-1 mb-4 md:mb-0 hidden md:flex">
                            <i class="fa-solid fa-truck-fast text-white text-xs"></i>
                        </div>
                        <div class="md:w-5/12 order-3 md:order-2"></div>
                    </div>

                    <!-- Job 8: Brasas -->
                    <div class="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
                        <div class="md:w-5/12 order-3 md:order-1"></div>
                        <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-neutral-600 rounded-full border-4 border-white shadow flex items-center justify-center order-1 hidden md:flex">
                            <i class="fa-solid fa-graduation-cap text-white text-xs"></i>
                        </div>
                        <div class="md:w-5/12 order-2 md:order-2 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 border-neutral-600 w-full">
                            <h4 class="text-lg font-bold text-neutral-800">
                                <span class="lang-pt">Desenvolvedor Full Stack</span>
                                <span class="lang-en">Full Stack Developer</span>
                            </h4>
                            <div class="text-orange-800 font-semibold mb-2">Brasas</div>
                            <p class="text-neutral-600 text-sm">
                                <span class="lang-pt">Criação de ferramentas educacionais e manutenção do portal do aluno.</span>
                                <span class="lang-en">Creation of educational tools and student portal maintenance.</span>
                            </p>
                        </div>
                    </div>

                    <!-- Job 9: Takoda Data Centers -->
                    <div class="relative flex flex-col md:flex-row items-center justify-between mb-8 group">
                        <div class="md:w-5/12 order-2 md:order-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-2 border-neutral-600 w-full">
                            <h4 class="text-lg font-bold text-neutral-800">
                                <span class="lang-pt">Desenvolvedor</span>
                                <span class="lang-en">Developer</span>
                            </h4>
                            <div class="text-orange-800 font-semibold mb-2">Takoda Data Centers</div>
                            <p class="text-neutral-600 text-sm">
                                <span class="lang-pt">Atuação em projetos de infraestrutura web e monitoramento de serviços.</span>
                                <span class="lang-en">Working on web infrastructure projects and service monitoring.</span>
                            </p>
                        </div>
                        <div class="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-neutral-600 rounded-full border-4 border-white shadow flex items-center justify-center order-1 mb-4 md:mb-0 hidden md:flex">
                            <i class="fa-solid fa-server text-white text-xs"></i>
                        </div>
                        <div class="md:w-5/12 order-3 md:order-2"></div>
                    </div>

                </div>
                <!-- End of Hidden Items -->

                <!-- Load More Button -->
                <div class="text-center mt-8 relative z-10 bg-[#f8fafc] pt-4">
                    <button id="load-more-btn" onclick="document.getElementById('more-experience').classList.remove('hidden'); this.style.display='none'" class="px-8 py-3 bg-white border border-neutral-300 text-neutral-600 font-semibold rounded-full shadow-sm hover:shadow-md hover:border-orange-500 hover:text-orange-700 transition-all duration-300 focus:outline-none">
                        <i class="fa-solid fa-plus mr-2"></i> 
                        <span class="lang-pt">Carregar mais experiências</span>
                        <span class="lang-en">Load more experiences</span>
                    </button>
                </div>
                */?>

            </div>
        </section>

        <!-- Skills Section -->
        <section class="bg-neutral-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h3 class="text-2xl md:text-3xl font-bold mb-2">
                <span class="lang-pt">Habilidades Técnicas</span>
                <span class="lang-en">Technical Skills</span>
            </h3>
            <p class="text-neutral-400 mb-8">
                <span class="lang-pt">Tecnologias e ferramentas que domino</span>
                <span class="lang-en">Technologies and tools I master</span>
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                
                <!-- Core Skills -->
                <div>
                    <h4 class="text-orange-400 font-semibold mb-4 uppercase text-sm tracking-wider border-b border-neutral-700 pb-2">Core & Front-end</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">JavaScript</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">HTML</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">CSS</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">TailwindCSS</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">SASS</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">LESS</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">Bootstrap</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">Vue.js</span>
                    </div>
                </div>

                <!-- Backend & DevOps -->
                <div>
                    <h4 class="text-orange-400 font-semibold mb-4 uppercase text-sm tracking-wider border-b border-neutral-700 pb-2">
                        <span class="lang-pt">Back-end, Dados & DevOps</span>
                        <span class="lang-en">Back-end, Data & DevOps</span>
                    </h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm font-medium border border-neutral-700">SQL</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">Git / GitHub</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-300 rounded-full text-sm font-medium border border-neutral-700">Unix</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-400 rounded-full text-sm font-medium border border-neutral-700">Docker</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-400 rounded-full text-sm font-medium border border-neutral-700">PHP</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-white rounded-full text-sm font-medium border border-neutral-700">Wordpress</span>
                        <span class="skill-tag px-3 py-1 bg-neutral-800 text-orange-400 rounded-full text-sm font-medium border border-neutral-700">Python</span>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-neutral-200 py-8">
        <div class="container mx-auto px-6 text-center">
            <p class="text-neutral-500 text-sm mb-4">
                &copy; <script>document.write(new Date().getFullYear())</script> Vinicius Silva do Canto. 
                <span class="lang-pt">Todos os direitos reservados.</span>
                <span class="lang-en">All rights reserved.</span>
            </p>
            <div class="flex justify-center gap-6">
                <a href="mailto:eu@viniciusdocanto.com.br" alt="E-mail" class="text-neutral-800 hover:text-orange-800 transition-colors">
                    <i class="fa-solid fa-envelope text-xl"></i> E-mail
                </a>
                <a href="https://linkedin.com/in/viniciusdocanto" alt="Linkedin" target="_blank" class="text-neutral-800 hover:text-orange-800 transition-colors">
                    <i class="fa-brands fa-linkedin text-xl"></i> Linkedin
                </a>
            </div>
        </div>
    </footer>

    <script>
        // Language Toggle Function
        function toggleLanguage() {
            const body = document.body;
            if (body.classList.contains('lang-pt')) {
                body.classList.remove('lang-pt');
                body.classList.add('lang-en');
                // Optional: Save preference to localStorage
                localStorage.setItem('preferredLang', 'en');
            } else {
                body.classList.remove('lang-en');
                body.classList.add('lang-pt');
                // Optional: Save preference to localStorage
                localStorage.setItem('preferredLang', 'pt');
            }
        }

        // Check for saved preference on load
        document.addEventListener('DOMContentLoaded', () => {
            const savedLang = localStorage.getItem('preferredLang');
            if (savedLang === 'en') {
                document.body.classList.remove('lang-pt');
                document.body.classList.add('lang-en');
            }
        });
    </script>
</body>
</html>