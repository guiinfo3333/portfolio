export function TrajectorySection() {
  const trajectoryData = [
    {
      year: '2017',
      description: 'Iniciei no mundo da informática no ensino médio através do curso técnico profissionalizante de T.I. No primeiro semestre do curso, houve uma prova de lógica de programação na escola para concorrer a uma vaga em um curso chamado Coding na Escolas - UFC, onde ensinava lógica de programação, estruturas condicionais, estruturas de repetição, funções, declaração de variáveis nas linguagens Python e Java. No curso de T.I, aprendi + sobre programação e conceitos básicos de T.I. Ao final ano, realizei cursos onlines de HTML e CSS na plataforma fundação bradesco.',
      techs: ['java', 'python', 'html5', 'css3'],
      links: [
        { label: 'Coding nas Escolas', url: '#' },
        { label: 'Curso HTML', url: '#' },
        { label: 'Curso CSS', url: '#' },
      ],
    },
    {
      year: '2018',
      description: 'No meu segundo ano do curso profissionalizante de T.I, aprendi sobre HTML, CSS, JAVASCRIPT, PHP, JAVA e MySQL. Ao longo do ano estudei essas tecnologias com exercícios práticos e teóricos. Desenvolvi alguns códigos como páginas simples com HTML, CSS e JavaScript. Também desenvolvi back-end com PHP + Apache + MySQL e em java criei pequenos projetos como uma calculadora de juros simples e compostos, entre outros pequenos projetos para fixação de conteúdo.',
      techs: ['java', 'php', 'mysql', 'python', 'html5', 'javascript', 'css3'],
      links: [
        { label: 'Repo. do projeto java (Calculadora)', url: '#' },
        { label: 'Projeto java (Calculadora)', url: '#' },
      ],
    },
    {
      year: '2019',
      description: 'No meu último ano desenvolvi projetos mais completos utilizando PHP + MySQL para o back-end e HTML, CSS e JavaScript para o front-end. Um dos projetos foi um realizado em grupo, o projeto consistia em um petshop com exibição de produtos e outros serviços. Outro projeto em PHP foi realizado também em grupo e consistia em um portal de notícias de esportes, com seção de notícias novas, comentário cadastro e login de usuários. Também realizei um projeto em dupla utilizando Java + MySQL, um sistema de PDV para supermercados. Por fim, ao final do curso e do ano realizei um estágio de desenvolvimento Web em uma empresa dentro da UFC, onde trabalhei com Python + Django 2 e Vue js 2.',
      techs: ['java', 'php', 'mysql', 'python', 'django', 'html5', 'javascript', 'css3'],
      links: [
        { label: 'Repo. I do Estágio', url: '#' },
        { label: 'Repo. II do Estágio', url: '#' },
        { label: 'Repo. III do Estágio', url: '#' },
      ],
    },
    {
      year: '2020',
      description: 'No início de 2020, passei por um processo seletivo para uma vaga de desenvolvedor full stack na empresa FIX PAY. Onde acabei sendo contratado como MEI, pois ainda não tinha iniciado na faculdade. Durante o ano estudei diversas tecnologias novas como Ruby, Ruby On Rails, JQuery, Electron, GO, PostgreSQL, GIT e aprendi mais sobre Vue JS. Conclui cursos na plataforma Alura em uma conta compartilhada da empresa. Após os estudos no mesmo ano, peguei algumas pequenas demandas de melhorias e ajustes de bugs em Vue js e Ruby On Rails nos projetos da empresa. Neste ano também fiz um curso completo de react na plataforma online Rocketseat.',
      techs: ['ruby', 'rails', 'go', 'postgresql', 'vuejs', 'react', 'electron'],
      links: [
        { label: 'Repo. curso Vue js', url: '#' },
        { label: 'Repo. I curso GO', url: '#' },
        { label: 'Repo. II curso GO', url: '#' },
        { label: 'Repo. estudo Electron JS', url: '#' },
      ],
    },
    {
      year: '2021',
      description: 'Neste ano aprofundei meus conhecimentos nas tecnologias que já conhecia, como Vue js 2, HTML, CSS, JavaScript, JQuery, Ruby On Rails, GIT, PostgreSQL e apliquei na prática em demandas de melhorias, inovação, correção de bugs e em análise e correção de código. Durante o ano também estudei e realizei cursos de novas tecnologias, principalmente o GO e Flutter, framework que utiliza a linguagem Dart para o desenvolvimento de plataformas híbridas, iOS, Android, Web e Desktop. No segundo semestre ingressei no curso de Sistemas e Mídias Digitais na UFC e mudei o tipo de contrato de MEI para estágio na FIX PAY.',
      techs: ['vuejs', 'go', 'git', 'postgresql', 'flutter', 'dart', 'javascript'],
      links: [
        { label: 'Repo. I curso Ruby', url: '#' },
        { label: 'Repo. II curso Ruby', url: '#' },
        { label: 'Repo. III curso Ruby', url: '#' },
        { label: 'Repo. curso Ruby on Rails', url: '#' },
        { label: 'Certificado Flutter', url: '#' },
      ],
    },
    {
      year: '2022',
      description: 'Aprimorei meus conhecimentos em GO no desenvolvimento de APIs RESTful, e integração com o front-end utilizando os frameworks Vue js e Flutter. Conheci e desenvolvi na prática Vue js 3 + TypeScript + Vite + SASS. No segundo semestre participei juntamente com colegas do trabalho do evento GopherCon realizado em Grande Florianópolis, São José - SC. Participar do GopherCon foi possível pois a FIX PAY, empresa onde trabalho pagou todos os custos de viagem para o evento. Ao final do ano fiz cursos sobre a linguagem Elixir e iniciei cursos sobre o framework Phoenix com Elixir. Neste ano também migrei de estágio para CLT.',
      techs: ['vuejs', 'flutter', 'typescript', 'sass', 'go', 'elixir', 'phoenix'],
      links: [
        { label: 'Certificado Elixir', url: '#' },
        { label: 'Certificado Elixir com Phoenix', url: '#' },
        { label: 'Certificado GopherCon 2022', url: '#' },
      ],
    },
    {
      year: '2023',
      description: 'Estudei e aprimorei bastante meus conhecimentos em desenvolvimento de software. Realizei alguns cursos na plataforma Udemy e Alura para conhecer novas tecnologias e aprofundar meus conhecimentos nas tecnologias que já trabalho. Concluí cursos de: Elixir, Linux para Desenvolvedores, Formação Kotlin, Formação Android com Kotlin e iniciei outros na plataforma Udemy. Também desenvolvi um projeto simples em React js para aplicar meus estudos e conhecimentos no framework. No segundo semestre migrei a faculdade de SMD para EAD, pois acabei tendo alguns problema quando estava presencial e na modalidade EAD conseguiria focar e dar uma atenção melhor na faculdade.',
      techs: ['kotlin', 'android', 'linux', 'react'],
      links: [
        { label: 'Repositórios da formação Android + Kotlin', url: '#' },
        { label: 'Repositório React JS', url: '#' },
      ],
    },
    {
      year: '2024',
      description: 'Neste ano concluí todos os cursos que tinha iniciado no ano anterior na plataforma da Udemy. Os cursos são sobre Docker com Swarm e Kubernetes, Programação em Shell Script, UI & UX - Adobe XD e PSD, UI - Figma, Desenvolvimento iOS e também iniciei novos cursos. O que aprendi nos cursos, apliquei diariamente no meu trabalho onde obtive muitos conhecimentos também, mais até do que nos cursos e principalmente com outros desenvolvedores com mais tempo na área. No segundo semestre concluí a faculdade de SMD.',
      techs: ['docker', 'kubernetes', 'figma', 'swift'],
      links: [
        { label: 'Certificado Docker', url: '#' },
        { label: 'Certificado UI & UX Adobe XD', url: '#' },
        { label: 'Certificado UI & UX Figma', url: '#' },
        { label: 'Certificado iOS nativo', url: '#' },
      ],
    },
    {
      year: '2025',
      description: 'Finalizei todos os cursos pendentes na Udemy que tinha iniciado ao longo de 2024. Cursos completos de PHP, React JS + TypeScript, React Native, Java + Spring Boot, Flutter aplicações web responsivas, Python + Django, TypeScript, Desenvolvimento iOS e iniciei um curso de Google Cloud Professional Cloud Architect. Por fim, assinei a ATA de colação de grau do curso de Sistemas e Mídias Digitais que conclui no final de 2024.',
      techs: ['java', 'spring', 'python', 'django', 'react', 'typescript'],
      links: [
        { label: 'Certificado React JS', url: '#' },
        { label: 'Certificado TypeScript', url: '#' },
        { label: 'Certificado Django', url: '#' },
        { label: 'Certificado SpringBoot', url: '#' },
      ],
    },
  ]

  const getTechIcon = (tech: string) => {
    const icons: Record<string, string> = {
      java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      php: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      ruby: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
      rails: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
      go: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
      postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      vuejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      electron: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
      git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      dart: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
      typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      sass: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      elixir: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg',
      phoenix: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg',
      kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      android: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
      linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      kubernetes: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
      spring: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    }
    return icons[tech] || ''
  }

  return (
    <section className="section trajectory-section">
      <div className="trajectory-container">
        <h2 className="trajectory-title">TRAJETÓRIA</h2>
        
        <div className="timeline">
          {trajectoryData.map((item, index) => (
            <div key={item.year} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="timeline-card">
                <div className="timeline-year-header">
                  <span className="timeline-year">{item.year}</span>
                </div>
                
                <div className="timeline-content">
                  <p className="timeline-description">{item.description}</p>
                  
                  <div className="timeline-techs">
                    {item.techs.map((tech) => (
                      <img 
                        key={tech} 
                        src={getTechIcon(tech)} 
                        alt={tech} 
                        className="timeline-tech-icon"
                      />
                    ))}
                  </div>
                  
                  <div className="timeline-links">
                    {item.links.map((link) => (
                      <a 
                        key={link.label} 
                        href={link.url} 
                        className="timeline-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ♦ {link.label} ♦
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
