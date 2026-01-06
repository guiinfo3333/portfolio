import { useRef } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export function ResumeSection() {
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleDownloadPdf = async () => {
    if (!resumeRef.current) return

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('curriculo-antonio-guilherme.pdf')
  }

  const tecnologias = [
    'Flutter',
    'Android Nativo (básico)',
    'React',
    'Vue.js',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Ruby on Rails',
    'Golang',
    'Python',
    'PostgreSQL',
    'MySQL',
    'SQLite',
    'Docker',
    'Kafka',
    'Amazon SQS',
    'AWS',
    'Heroku',
  ]

  return (
    <section className="section resume-section">
      <div className="resume-toolbar">
        <button type="button" className="pdf-download-button" onClick={handleDownloadPdf}>
          <span className="pdf-download-text">BAIXAR</span>
          <i className="ri-download-line pdf-download-icon"></i>
        </button>
        <span className="resume-pages">1 página(s)</span>
      </div>

      <div className="resume-page" ref={resumeRef}>
        <header className="resume-page-header">
          <div className="resume-identity">
            <h1 className="resume-page-name">Antônio Guilherme</h1>
            <p className="resume-page-role">Desenvolvedor Full Stack</p>

            <div className="resume-contact-row">
              <span>📞 (85) 98533-7317</span>
              <span>✉️ antonioguilhermeinfo@gmail.com</span>
            </div>

            <div className="resume-links-row">
              <a
                href="https://www.linkedin.com/in/ant%C3%B4nio-guilherme-1b0244191/"
                target="_blank"
                rel="noreferrer"
                className="resume-link-pill"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/guiinfo3333"
                target="_blank"
                rel="noreferrer"
                className="resume-link-pill"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="resume-photo" />
        </header>
        <section className="resume-full-section">
          <h2 className="resume-section-bar">Sobre mim</h2>
          <p className="resume-summary">
            Olá! Meu nome é Guilherme, tenho 23 anos e estudo programação desde
            os 17. Ao longo desse período, acumulei quase 6 anos de experiência
            prática em desenvolvimento, atuando como desenvolvedor full stack em
            projetos mobile, web e backend. Sou apaixonado por tecnologia e
            atualmente estou focado em aprendizado de máquina e inteligência
            artificial, buscando sempre soluções inovadoras e escaláveis.
          </p>
        </section>

        <section className="resume-full-section">
          <h2 className="resume-section-bar">Experiência profissional</h2>
          <ul className="resume-list">
            <li>
              <strong>Desenvolvedor Full Stack</strong> · 05/2022 – 03/2024 ·
              Fortaleza/CE
              <br />
              Atuação com Ruby, Golang, JavaScript, Vue.js e Flutter, incluindo
              participação em design de sistemas e prototipação no Figma.
            </li>
            <li>
              <strong>Desenvolvedor Full Stack</strong> · 03/2024 – 11/2025 ·
              Sorocaba/SP
              <br />
              Foco em Node.js, Flutter, Next.js, React Native e Google Cloud,
              trabalhando em aplicações modernas e escaláveis.
            </li>
          </ul>
        </section>

        <section className="resume-full-section">
          <h2 className="resume-section-bar">Principais projetos</h2>
          <ul className="resume-list">
            <li>
              <strong>Parcela Contas</strong> · App para pagamento de boletos via
              cartão de crédito.
              <br />
              Android:{' '}
              <a
                href="https://play.google.com/store/apps/details?id=br.com.parcelaconta.appcliente"
                target="_blank"
                rel="noreferrer"
              >
                ver na Play Store
              </a>
              {' '}· iOS:{' '}
              <a
                href="https://apps.apple.com/br/app/parcelaconta/id6448194788"
                target="_blank"
                rel="noreferrer"
              >
                ver na App Store
              </a>
            </li>
            <li>
              <strong>Confessa aí</strong> · App voltado à comunidade católica,
              mostrando horários de missas em paróquias de todo o Brasil (iOS e
              Android).
              <br />
              Android:{' '}
              <a
                href="https://play.google.com/store/apps/datasafety?id=com.confessai.app_cliente&hl=pt_BR&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                ver na Play Store
              </a>{' '}
              · iOS:{' '}
              <a
                href="https://apps.apple.com/br/app/confessa-ai/id6463062898"
                target="_blank"
                rel="noreferrer"
              >
                ver na App Store
              </a>
            </li>
            <li>
              <strong>Intranet corporativa (Ruby on Rails)</strong> · Desenvolvimento
              de uma API com autenticação, envio de e-mails, processamento de jobs
              em background e interface integrada, permitindo que colaboradores
              visualizassem e gerenciassem dados de clientes de forma segura e
              centralizada.
            </li>
            <li>
              <strong>Dashboard de vendas (Vue.js)</strong> · SPA para acompanhamento
              de vendas em tempo real, com navegação rápida e fluida.
            </li>
            <li>
              <strong>Backend central (Golang)</strong> · API responsável por consultar
              dados em PostgreSQL, integrar-se a APIs externas e realizar
              comunicação assíncrona entre serviços via Apache Kafka, servindo o
              app mobile e o portal do cliente em Vue.js.
            </li>
            <li>
              <strong>Microsserviços e Jobs</strong> · Criação de microsserviços,
              incluindo um serviço de envio de e-mails (SendEmail) e um projeto
              centralizado de Jobs, concentrando processos assíncronos com
              paralelismo e multiprocessamento para otimizar memória e performance.
            </li>
            <li>
              <strong>Credit to B</strong> · App mobile multiplataforma em Flutter
              (Android e iOS) voltado para compra de recebíveis, integrado à API de
              processamento das operações e utilizando padrões como BLoC e
              gerenciamento de estado reativo.
            </li>
            <li>
              <strong>Previsão do Campeonato Brasileiro (Machine Learning)</strong> ·
              Construção de dataset exclusivo com +500 jogos históricos e
              treinamento com Random Forest e Redes Neurais, aplicando validação
              cruzada para mitigar overfitting e reduzir vieses.
            </li>
            <li>
              <strong>App do Sebrae</strong> · Atuação no front-end em React Native
              (Android e iOS), participando do redesign e reescrita completa da
              aplicação em colaboração com parceiros como a Cast, seguindo boas
              práticas de arquitetura, componentização e UX.
            </li>
          </ul>
        </section>

        <section className="resume-full-section">
          <h2 className="resume-section-bar">Formação acadêmica</h2>
          <ul className="resume-list">
            <li>
              <strong>Superior</strong> · Sistemas e Mídias Digitais (2019–2025)
              – Universidade Federal do Ceará.
            </li>
            <li>
              <strong>Técnico</strong> · Informática – Escola Creusa do Carmo
              Rocha.
            </li>
          </ul>
        </section>

        <section className="resume-full-section">
          <h2 className="resume-section-bar">Tecnologias</h2>
          <p className="resume-block-text">
            Atuação forte em mobile com Flutter (incluindo BLoC, publicação em
            Play Store e Apple Store), desenvolvimento web com React, Vue, Next
            e TypeScript, backend com Node.js, Rails, Golang e Python; bancos
            PostgreSQL, MySQL e SQLite; deploy em AWS, Heroku e Docker
            (Portainer, Swarm), mensageria com Kafka e Amazon SQS, além de
            integrações com IA (Google Cloud, ChatGPT, Gemini) e machine
            learning com sklearn.
          </p>
          <div className="resume-tags-grid">
            {tecnologias.map((tech) => (
              <span key={tech} className="resume-tag">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
