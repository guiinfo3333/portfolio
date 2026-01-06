export function ProjectsSection() {
  const projects = [
    {
      name: 'Sistema para gestão de hospitais',
      tags: ['Node.js', 'Vue 3', 'Go', 'Docker', 'PostgreSQL'],
      description:
        'Plataforma completa para controle de leitos, filas de atendimento e indicadores em tempo real. Backend em Go com APIs REST, frontend em Vue e painel analítico com gráficos dinâmicos.',
    },
    {
      name: 'App simulado ENEM',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      description:
        'Aplicativo mobile para realização de simulados do ENEM, com correção automática, ranking entre amigos e histórico de desempenho por área de conhecimento.',
    },
    {
      name: 'Dashboard de pagamentos SaaS',
      tags: ['React', 'Node.js', 'Kafka', 'MongoDB'],
      description:
        'Dashboard administrativo para acompanhamento de assinaturas e churn de um produto SaaS, com processamento assíncrono de eventos de pagamento usando mensageria.',
    },
  ]

  return (
    <section className="section">
      <header className="section-header">
        <div>
          <h1 className="section-title">Meus projetos</h1>
          <p className="section-subtitle">
            Alguns projetos pessoais e acadêmicos selecionados
          </p>
        </div>
      </header>

      <div className="filters-row">
        <input className="filter-input" placeholder="Nome do projeto" />
        <input className="filter-input" placeholder="Tags" />
        <input className="filter-input" placeholder="Linguagem / framework" />
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-preview" />
            <div className="project-body">
              <h2 className="project-title">{project.name}</h2>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
