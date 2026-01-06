import { useState } from 'react'

export function AboutSection() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  return (
    <section className="section about-section">
      {/* Modal para imagem expandida */}
      {expandedImage && (
        <div className="image-modal" onClick={() => setExpandedImage(null)}>
          <button className="modal-close" onClick={() => setExpandedImage(null)}>
            <i className="ri-close-line"></i>
          </button>
          {expandedImage === '/assets/técnico_informatica.jpeg' || expandedImage === '/diplomas/tecnico_informatica.jpeg' ? (
            <img src={expandedImage} alt="Diploma expandido" style={{ transform: 'rotate(-90deg)', maxWidth: '90vw', maxHeight: '90vh' }} />
          ) : (
            <img src={expandedImage} alt="Diploma expandido" />
          )}
        </div>
      )}

      <div className="about-card">
        <header className="about-hero">
          <img className="about-avatar" src="/photo_perfil.png" alt="Antônio Guilherme" />
          <div className="about-info">
            <h1 className="about-name">Antônio Guilherme</h1>
            <p className="about-role">DESENVOLVEDOR FULL STACK</p>
            <div className="about-contact-row">
              <span className="about-contact-item">
                <i className="ri-phone-line"></i> (85) 98533-7317
              </span>
              <span className="about-contact-item">
                <i className="ri-mail-line"></i> antonioguilhermeinfo@gmail.com
              </span>
              <a
                href="https://www.linkedin.com/in/ant%C3%B4nio-guilherme-1b0244191/"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                LinkedIn <i className="ri-external-link-line"></i>
              </a>
              <a
                href="https://github.com/guiinfo3333"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                Github <i className="ri-external-link-line"></i>
              </a>
              <a
                href="https://hub.docker.com/u/guiinfo3333"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                Dockerhub <i className="ri-external-link-line"></i>
              </a>
            </div>  
          </div>
        </header>

        <p className="about-description">
        <strong>Desenvolvedor Full Stack</strong> com experiência em <strong>backend</strong>, <strong>frontend</strong> e <strong>mobile</strong>, atuando no desenvolvimento de <strong>aplicações complexas e escaláveis</strong>. No backend, tenho forte atuação em <strong>sistemas de meios de pagamento</strong>, com uso de <strong>processamentos assíncronos</strong>, crons, paralelismo, processamento em chunks, <strong>otimização de queries</strong> em bancos de dados relacionais, <strong>cache</strong> e integração com múltiplas APIs de pagamento. No frontend, possuo conhecimento em <strong>design de interfaces</strong>, Figma e desenvolvimento de <strong>Single Page Applications (SPA)</strong>, com foco em <strong>usabilidade</strong> e <strong>performance</strong>. No mobile, domino todo o ciclo de desenvolvimento, incluindo construção e <strong>publicação de aplicativos</strong> nas lojas Apple App Store e Google Play. Possuo também experiência em <strong>DevOps</strong>, com <strong>Docker</strong>, Docker Compose, Portainer, além de atuação em <strong>AWS</strong> e <strong>Azure DevOps</strong>, contribuindo para automação, deploy e manutenção de ambientes produtivos.
      </p>
      </div>

      <div className="about-accordions">
        <details className="about-accordion" open>
          <summary>
            <span>FORMAÇÃO</span>
            <i className="ri-arrow-down-s-line"></i>
          </summary>
          <div className="accordion-content">
            <div className="diploma-cards">
              <div className="diploma-card">
                <div 
                  className="diploma-image" 
                  onClick={() => setExpandedImage('/diplomas/diplomadigital-imagens-0.jpg')}
                >
                  <img src="/diplomas/diplomadigital-imagens-0.jpg" alt="Diploma Bacharel em Sistemas e Mídias Digitais" />
                  <div className="diploma-zoom-hint">
                    <i className="ri-zoom-in-line"></i>
                  </div>
                </div>
                <h3 className="diploma-title">BACHAREL EM SISTEMAS E MÍDIAS DIGITAIS</h3>
                <p className="diploma-institution">UNIVERSIDADE FEDERAL DO CEARÁ</p>
                <p className="diploma-period">2020 - 2025</p>
              </div>
              <div className="diploma-card">
                <div 
                  className="diploma-image" 
                  onClick={() => setExpandedImage('/diplomas/tecnico_informatica.jpeg')}
                >
                  <img 
                    src="/diplomas/tecnico_informatica.jpeg" 
                    alt="Certificado Técnico em Informática" 
                    style={{ transform: 'rotate(-90deg)', maxWidth: '100%', maxHeight: '300px' }} 
                  />
                  <div className="diploma-zoom-hint">
                    <i className="ri-zoom-in-line"></i>
                  </div>
                </div>
                <h3 className="diploma-title">TÉCNICO EM INFORMÁTICA</h3>
                <p className="diploma-institution">ESCOLA CREUSA DO CARMO ROCHA</p>
                <p className="diploma-period">2016 - 2018</p>
              </div>
            </div>
          </div>
        </details>

        <details className="about-accordion">
          <summary>
            <span>STACK ATUAL</span>
            <i className="ri-arrow-down-s-line"></i>
          </summary>
          <div className="accordion-content">
            {/* Linguagens */}
            <div className="stack-category">
              <h4 className="stack-category-title">LINGUAGENS</h4>
              <div className="stack-items">
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <span className="stack-name">JAVASCRIPT</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                  <span className="stack-name">TYPESCRIPT</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" />
                  <span className="stack-name">DART</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Ruby" />
                  <span className="stack-name">RUBY</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="Go" />
                  <span className="stack-name">GO</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
              </div>
            </div>

            {/* Frameworks e Bibliotecas */}
            <div className="stack-category">
              <h4 className="stack-category-title">FRAMEWORKS E BIBLIOTECAS</h4>
              <div className="stack-items">
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <span className="stack-name">REACT</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" />
                  <span className="stack-name">REACT NATIVE</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
                  <span className="stack-name">VUE JS</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
                  <span className="stack-name">FLUTTER</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt="Ruby on Rails" />
                  <span className="stack-name">RUBY ON RAILS</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
              </div>
            </div>

            {/* Banco de Dados e Cloud */}
            <div className="stack-category">
              <h4 className="stack-category-title">BANCO DE DADOS E CLOUD</h4>
              <div className="stack-items">
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                  <span className="stack-name">POSTGRESQL</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                  <span className="stack-name">MYSQL</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                  <span className="stack-name">MONGODB</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
                  <span className="stack-name">FIREBASE</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                  <span className="stack-name">AWS</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" />
                  <span className="stack-name">AZURE</span>
                  <div className="stack-stars">★★☆☆☆</div>
                </div>
              </div>
            </div>

            {/* DevOps e Ferramentas */}
            <div className="stack-category">
              <h4 className="stack-category-title">DEVOPS E FERRAMENTAS DE DESENVOLVIMENTO</h4>
              <div className="stack-items">
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  <span className="stack-name">GIT & GIT FLOW</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="Kafka" />
                  <span className="stack-name">KAFKA</span>
                  <div className="stack-stars">★★☆☆☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                  <span className="stack-name">DOCKER</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker Compose" />
                  <span className="stack-name">DOCKER COMPOSE</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
                  <span className="stack-name">KUBERNETES</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" alt="GitHub Actions" />
                  <span className="stack-name">GITHUB ACTIONS</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
              </div>
            </div>

            {/* Front-end e UX/UI */}
            <div className="stack-category">
              <h4 className="stack-category-title">FRONT-END E UX/UI</h4>
              <div className="stack-items">
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                  <span className="stack-name">HTML</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                  <span className="stack-name">CSS</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
                  <span className="stack-name">SASS</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
              </div>
            </div>

            {/* Arquitetura e Padrões */}
            <div className="stack-category">
              <h4 className="stack-category-title">ARQUITETURA E PADRÕES DE DESENVOLVIMENTO</h4>
              <div className="stack-items">
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg" alt="API RESTful" />
                  <span className="stack-name">API RESTful</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
              </div>
            </div>

            {/* Metodologias Ágeis */}
            <div className="stack-category">
              <h4 className="stack-category-title">METODOLOGIAS ÁGEIS</h4>
              <div className="stack-items">
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt="Kanban" />
                  <span className="stack-name">KANBAN</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Scrum" />
                  <span className="stack-name">SCRUM</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
              </div>
            </div>

            {/* Sistemas Operacionais */}
            <div className="stack-category">
              <h4 className="stack-category-title">SISTEMAS OPERACIONAIS</h4>
              <div className="stack-items">
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="macOS" />
                  <span className="stack-name">MACOS</span>
                  <div className="stack-stars">★★☆☆☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg" alt="Windows" />
                  <span className="stack-name">WINDOWS</span>
                  <div className="stack-stars">★★★★☆</div>
                </div>
                <div className="stack-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
                  <span className="stack-name">LINUX</span>
                  <div className="stack-stars">★★★☆☆</div>
                </div>
              </div>
            </div>
          </div>
        </details>

        <details className="about-accordion">
          <summary>
            <span>SOFT SKILLS</span>
            <i className="ri-arrow-down-s-line"></i>
          </summary>
          <div className="accordion-content">
            <div className="soft-skills-grid">
              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-links-line"></i> Resiliência
                </h4>
                <p className="soft-skill-desc">
                  Lidar bem com falhas, críticas e mudanças de contexto sem perder a motivação ou produtividade.
                </p>
                <div className="soft-skill-stars">★★★★☆</div>
              </div>

              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-layout-grid-line"></i> Organização
                </h4>
                <p className="soft-skill-desc">
                  Manter o trabalho estruturado, incluindo código, tarefas e responsabilidades diárias.
                </p>
                <div className="soft-skill-stars">★★★★☆</div>
              </div>

              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-refresh-line"></i> Adaptabilidade
                </h4>
                <p className="soft-skill-desc">
                  Se ajustar rapidamente a novas tecnologias, metodologias ou mudanças de escopo.
                </p>
                <div className="soft-skill-stars">★★★★☆</div>
              </div>

              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-lightbulb-line"></i> Pensamento crítico
                </h4>
                <p className="soft-skill-desc">
                  Analisar problemas com lógica e propor soluções eficientes com base em dados e experiência.
                </p>
                <div className="soft-skill-stars">★★★☆☆</div>
              </div>

              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-customer-service-2-line"></i> Escuta ativa
                </h4>
                <p className="soft-skill-desc">
                  Ouvir com atenção e interpretar corretamente instruções, feedbacks e necessidades da equipe.
                </p>
                <div className="soft-skill-stars">★★★★☆</div>
              </div>

              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-heart-line"></i> Empatia
                </h4>
                <p className="soft-skill-desc">
                  Compreender as necessidades e limitações dos outros, promovendo um ambiente mais colaborativo.
                </p>
                <div className="soft-skill-stars">★★★★☆</div>
              </div>

              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-time-line"></i> Gestão de tempo
                </h4>
                <p className="soft-skill-desc">
                  Saber priorizar tarefas e cumprir prazos de forma eficiente, sem comprometer a qualidade.
                </p>
                <div className="soft-skill-stars">★★★★☆</div>
              </div>

              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-seedling-line"></i> Mentalidade de crescimento
                </h4>
                <p className="soft-skill-desc">
                  Buscar evolução constante, aprendendo com erros e desafios para melhorar continuamente.
                </p>
                <div className="soft-skill-stars">★★★★★</div>
              </div>

              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-question-line"></i> Curiosidade
                </h4>
                <p className="soft-skill-desc">
                  Interesse contínuo em aprender novas tecnologias, ferramentas e formas de resolver problemas.
                </p>
                <div className="soft-skill-stars">★★★★☆</div>
              </div>

              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-team-line"></i> Trabalho em equipe
                </h4>
                <p className="soft-skill-desc">
                  Colaborar de forma produtiva com colegas, respeitando opiniões e contribuindo para o sucesso do time.
                </p>
                <div className="soft-skill-stars">★★★★☆</div>
              </div>

              <div className="soft-skill-card">
                <h4 className="soft-skill-title">
                  <i className="ri-user-settings-line"></i> Autogerenciamento
                </h4>
                <p className="soft-skill-desc">
                  Ser responsável, cumprir metas e manter a produtividade sem precisar de supervisão constante.
                </p>
                <div className="soft-skill-stars">★★★★☆</div>
              </div>
            </div>
          </div>
        </details>

        <details className="about-accordion">
          <summary>
            <span>TRAJETÓRIA</span>
            <i className="ri-arrow-down-s-line"></i>
          </summary>
          <div className="accordion-content">
            <div className="timeline-vertical">
              {/* 2017 */}
              <div className="timeline-year-block">
                <div className="timeline-year-header-block">
                  <span className="timeline-year-label">2017</span>
                </div>
                <div className="timeline-year-content">
                  <p className="timeline-text">
                    Em <strong>2017</strong>, iniciei meus estudos na <strong>Escola Creusa do Carmo Rocha</strong>, onde tive meu primeiro contato com <strong>programação</strong> por meio de <strong>Portugol</strong> e conceitos fundamentais de <strong>lógica</strong>, além de conhecimentos em <strong>hardware</strong>, como componentes e manutenção de computadores. Essa experiência marcou o início da minha trajetória na <strong>tecnologia</strong> e despertou meu interesse e paixão pela área de <strong>desenvolvimento de software</strong>. Aprendi também algumas tecnologias como HTML, CSS, JAVASCRIPT e algumas IDES como VSCODE.
                  </p>
                  <div className="timeline-tech-icons">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      role="img"
                      aria-label="Portugol"
                    >
                      <rect x="2" y="2" width="28" height="28" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                      <text
                        x="16"
                        y="19"
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="700"
                        fill="currentColor"
                        fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Arial"
                      >
                        PTG
                      </text>
                    </svg>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                  </div>
                </div>
              </div>

              {/* 2018 */}
              <div className="timeline-year-block">
                <div className="timeline-year-header-block">
                  <span className="timeline-year-label">2018</span>
                </div>
                <div className="timeline-year-content">
                  <p className="timeline-text">
No <strong>segundo ano</strong>, aprofundei meus conhecimentos em <strong>Programação Orientada a Objetos (POO)</strong> utilizando linguagens como <strong>Java</strong> e <strong>PHP</strong>, desenvolvendo aplicações práticas. Nesse período, também adquiri experiência com <strong>bancos de dados relacionais</strong>, utilizando <strong>MySQL</strong>. Entre os projetos desenvolvidos, destaco um <strong>sistema de supermercado</strong> implementado em <strong>Java 11</strong>, utilizando o <strong>NetBeans</strong>, simulando o funcionamento de caixas de supermercado, e um <strong>Portal de Notícias</strong> desenvolvido em <strong>PHP</strong>, com persistência de dados em banco relacional.
                  </p>
                  <div className="timeline-tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                  </div>
                  <div className="timeline-year-links">
                    <span>♦ Repo. do projeto java (Calculadora) ♦</span>
                    <span>♦ Projeto java (Calculadora) ♦</span>
                  </div>
                </div>
              </div>

              {/* 2019 */}
              <div className="timeline-year-block">
                <div className="timeline-year-header-block">
                  <span className="timeline-year-label">2019</span>
                </div>
                <div className="timeline-year-content">
                  <p className="timeline-text">
                   No <strong>terceiro ano</strong>, realizei o <strong>estágio obrigatório</strong> na empresa <strong>AcessOne</strong>, onde pude colocar em prática meus conhecimentos em <strong>programação</strong> em um ambiente corporativo. A empresa desenvolvia um <strong>software</strong> voltado para gestores de <strong>Recursos Humanos</strong>, utilizado para a administração de colaboradores, utilizando a stack <strong>.NET</strong> no backend e <strong>React</strong> no frontend. Durante o estágio, foi proposto um <strong>desafio de desenvolvimento</strong> que consistia na criação de uma aplicação capaz de executar uma mesma <strong>query SQL</strong> em múltiplos bancos de dados, permitindo ao usuário selecionar os bancos desejados e exibindo os resultados consolidados. Esse projeto foi fundamental para aprofundar meu entendimento sobre <strong>frameworks</strong>, especialmente o <strong>Entity Framework</strong>, além de proporcionar uma visão prática sobre <strong>arquitetura de sistemas</strong> e desenvolvimento profissional.
                  </p>
                  <div className="timeline-tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" />
                  </div>
                  <div className="timeline-year-links">
                    <span>♦ Repo. I do Estágio ♦</span>
                    <span>♦ Repo. II do Estágio ♦</span>
                    <span>♦ Repo. III do Estágio ♦</span>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="timeline-year-block">
                <div className="timeline-year-header-block">
                  <span className="timeline-year-label">2020</span>
                </div>
                <div className="timeline-year-content">
                  <p className="timeline-text">
                    Em <strong>2020</strong>, fui aprovado em uma universidade pública, a <strong>Universidade Federal do Ceará (UFC)</strong>, no curso de <strong>Sistemas e Mídias Digitais</strong>, voltado às áreas de <strong>Design</strong>, <strong>Programação</strong> e <strong>Multimídia</strong>. Paralelamente, fui aprovado no processo seletivo para <strong>estágio</strong> na empresa <strong>Fixpay</strong>, onde iniciei minha atuação como desenvolvedor utilizando a stack <strong>Flutter</strong>. Atuei no desenvolvimento do <strong>AppFixpay</strong>, uma aplicação mobile voltada ao <strong>dashboard de vendas</strong> dos clientes, contribuindo para a visualização e acompanhamento de resultados de forma prática e eficiente.
                  </p>
                  <div className="timeline-tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" />
                  </div>
                  <div className="timeline-year-links">
                    <span>♦ Repo. curso Vue js ♦</span>
                    <span>♦ Repo. I curso GO ♦</span>
                    <span>♦ Repo. II curso GO ♦</span>
                    <span>♦ Repo. estudo Electron JS ♦</span>
                  </div>
                </div>
              </div>

              {/* 2021 */}
              <div className="timeline-year-block">
                <div className="timeline-year-header-block">
                  <span className="timeline-year-label">2021</span>
                </div>
                <div className="timeline-year-content">
                  <p className="timeline-text">
                   Em <strong>2021</strong>, ainda atuando como <strong>estagiário</strong>, passei a assumir também demandas de <strong>backend</strong>, após a empresa identificar minhas habilidades nessa área. Iniciei minha atuação com <strong>Golang</strong>, trabalhando no desenvolvimento e manutenção de <strong>APIs</strong> e aplicações de grande porte, com alta complexidade estrutural, incluindo ambientes com centenas de tabelas em bancos de dados <strong>PostgreSQL</strong>. Atuei com <strong>crons agendados</strong>, jobs de conciliação de serviços, processamentos paralelos, além de enfrentar desafios relacionados à <strong>otimização de queries complexas</strong>, melhoria de performance e simplificação de parâmetros e fluxos de dados.
                  </p>
                  <div className="timeline-tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="Go" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                  </div>
                  <div className="timeline-year-links">
                    <span>♦ Repo. I curso Ruby ♦</span>
                    <span>♦ Repo. II curso Ruby ♦</span>
                    <span>♦ Repo. III curso Ruby ♦</span>
                    <span>♦ Repo. curso Ruby on Rails ♦</span>
                    <span>♦ Certificado Flutter ♦</span>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="timeline-year-block">
                <div className="timeline-year-header-block">
                  <span className="timeline-year-label">2022</span>
                </div>
                <div className="timeline-year-content">
                  <p className="timeline-text">
                   Em <strong>2022</strong>, fui efetivado como <strong>Desenvolvedor Full Stack Júnior</strong>, passando a atuar de forma ativa no desenvolvimento de sistemas. Nesse período, iniciei estudos e atuação com <strong>Ruby on Rails</strong>, tecnologia utilizada na <strong>API legada</strong> da empresa e no desenvolvimento da <strong>intranet corporativa</strong>. Também passei a atuar em <strong>aplicativos de meios de pagamento</strong>, como <strong>Parcela Contas</strong> e <strong>Credit2B</strong>, desenvolvidos com <strong>Flutter</strong> no frontend mobile e <strong>Golang</strong> no backend, para <strong>Android</strong> e <strong>iOS</strong>. Participei da <strong>concepção e desenvolvimento completo</strong> desses produtos, atuando desde a arquitetura e implementação do backend até a construção das interfaces e funcionalidades no frontend.
                  </p>
                  <div className="timeline-tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Ruby" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt="Ruby on Rails" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="Go" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="iOS" />
                  </div>
                  <div className="timeline-year-links">
                    <span>♦ Certificado Elixir ♦</span>
                    <span>♦ Certificado Elixir com Phoenix ♦</span>
                    <span>♦ Certificado GopherCon 2022 ♦</span>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="timeline-year-block">
                <div className="timeline-year-header-block">
                  <span className="timeline-year-label">2023</span>
                </div>
                <div className="timeline-year-content">
                  <p className="timeline-text">
                   Em <strong>2023</strong>, intensifiquei meus estudos em <strong>DevOps</strong> e <strong>padrões de projeto</strong>, aprofundando conhecimentos em <strong>AWS</strong>, gerenciamento de domínios, <strong>Docker</strong>, <strong>Docker Compose</strong>, <strong>Kubernetes</strong>, pipelines automatizados, instâncias, load balancing e <strong>NGINX</strong>, fortalecendo minha compreensão sobre <strong>infraestrutura</strong> e ambientes de produção. Nesse mesmo período, desenvolvi um <strong>projeto pessoal</strong>, que embora não tenha sido levado adiante, proporcionou grande aprendizado técnico: uma aplicação que exibia horários de missas e confissões da cidade de Fortaleza. O projeto envolveu a criação de jobs em <strong>Python</strong> com <strong>Selenium</strong>, utilizando técnicas de automação e <strong>inteligência artificial</strong> para coleta de dados, persistência em banco de dados e desenvolvimento do aplicativo mobile em <strong>Flutter</strong>.
                  </p>
                  <div className="timeline-tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="NGINX" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
                  </div>
                  <div className="timeline-year-links">
                    <span>♦ Repositórios da formação Android + Kotlin ♦</span>
                    <span>♦ Repositório React JS ♦</span>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="timeline-year-block">
                <div className="timeline-year-header-block">
                  <span className="timeline-year-label">2024</span>
                </div>
                <div className="timeline-year-content">
                  <p className="timeline-text">
                   Em <strong>2024</strong>, decidi buscar novos <strong>desafios profissionais</strong> e melhores oportunidades, o que me levou a atuar como <strong>Desenvolvedor Sênior</strong> na empresa <strong>Tegra</strong>, de São Paulo. Nesse contexto, participei do desenvolvimento de diversos <strong>produtos</strong>, incluindo sistemas para <strong>Recursos Humanos</strong>, sistemas voltados para o setor de <strong>construção</strong> e <strong>agronegócio</strong>, além de atuar atualmente no novo <strong>aplicativo do Sebrae</strong>, desenvolvido com <strong>React Native</strong> e <strong>Java 17</strong>, contribuindo para a evolução da <strong>arquitetura</strong>, qualidade do código e entrega de <strong>soluções escaláveis</strong>.
                  </p>
                  <div className="timeline-tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                  </div>
                  <div className="timeline-year-links">
                    <span>♦ Certificado Docker ♦</span>
                    <span>♦ Certificado UI & UX Adobe XD ♦</span>
                    <span>♦ Certificado UI & UX Figma ♦</span>
                    <span>♦ Certificado iOS nativo ♦</span>
                  </div>
                </div>
              </div>

              {/* 2025 */}
              <div className="timeline-year-block">
                <div className="timeline-year-header-block">
                  <span className="timeline-year-label">2025</span>
                </div>
                <div className="timeline-year-content">
                  <p className="timeline-text">
            Em <strong>2025</strong>, concluí o <strong>bacharelado em Sistemas e Mídias Digitais</strong>, consolidando uma sólida bagagem técnica e acadêmica. Atualmente, atuo como <strong>Desenvolvedor Sênior</strong>, participando de todo o ciclo de <strong>desenvolvimento de produtos</strong>, desde o <strong>contato direto com o cliente</strong>, levantamento de requisitos, desenvolvimento de aplicações, configuração de esteiras automatizadas, até integrações com <strong>APIs de Inteligência Artificial</strong>, como <strong>Google Cloud</strong>, <strong>OpenAI</strong> e <strong>Gemini</strong>. Essa atuação ampla e estratégica tem contribuído para a entrega de <strong>soluções de alto impacto</strong> e para o reconhecimento do meu trabalho por meio de recomendações profissionais.
                  </p>
                  <div className="timeline-tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" alt="Pipelines" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg" alt="APIs" />
                  </div>
                  <div className="timeline-year-links">
                    <span>♦ Certificado React JS ♦</span>
                    <span>♦ Certificado TypeScript ♦</span>
                    <span>♦ Certificado Django ♦</span>
                    <span>♦ Certificado SpringBoot ♦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  )
}
