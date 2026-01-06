export function CertificationsSection() {
  const certifications = [
    {
      provider: 'Udemy',
      title: 'Formação Full Stack com JavaScript e TypeScript',
      tags: ['JavaScript', 'TypeScript', 'Node.js'],
      hours: '48 horas',
      year: '2024',
    },
    {
      provider: 'Alura',
      title: 'Arquitetura de APIs REST com Node.js e Express',
      tags: ['APIs', 'REST', 'Node.js'],
      hours: '24 horas',
      year: '2023',
    },
    {
      provider: 'Rocketseat',
      title: 'Ignite - Trilha React',
      tags: ['React', 'Front-end'],
      hours: '32 horas',
      year: '2022',
    },
    {
      provider: 'FIAP',
      title: 'Cloud Computing & DevOps Essentials',
      tags: ['Cloud', 'DevOps'],
      hours: '12 horas',
      year: '2022',
    },
  ]

  return (
    <section className="section">
      <header className="section-header">
        <div>
          <h1 className="section-title">Meus certificados</h1>
          <p className="section-subtitle">Cursos e formações concluídas</p>
        </div>
      </header>

      <div className="filters-row">
        <input className="filter-input" placeholder="Certificado" />
        <input className="filter-input" placeholder="Tags" />
        <input className="filter-input" placeholder="Linguagem / framework" />
      </div>

      <div className="cards-grid">
        {certifications.map((cert) => (
          <article className="certificate-card" key={cert.title}>
            <div className="certificate-cover" />
            <div className="certificate-body">
              <h2 className="certificate-title">{cert.title}</h2>
              <p className="certificate-provider">{cert.provider}</p>
              <div className="tag-row">
                {cert.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="certificate-footer">
                <span>{cert.year}</span>
                <span>{cert.hours}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
