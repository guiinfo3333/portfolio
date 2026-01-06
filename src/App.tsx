import { useState } from 'react'
import './App.css'
import { ResumeSection } from './sections/ResumeSection'
import { CertificationsSection } from './sections/CertificationsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { AboutSection } from './sections/AboutSection'

type TabId = 'resume' | 'certifications' | 'projects' | 'about'

const TABS: { id: TabId; label: string }[] = [
  { id: 'resume', label: 'RESUMO' },
  // { id: 'certifications', label: 'CERTIFICAÇÕES' },
  // { id: 'projects', label: 'PROJETOS' },
  { id: 'about', label: 'SOBRE MIM' },
]

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('resume')

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <div className="brand-logo">AG</div>
          <div className="brand-text">
            <span className="brand-name">Antônio Guilherme</span>
            <span className="brand-role">Desenvolvedor Full Stack</span>
          </div>
        </div>

        <nav className="nav-tabs" aria-label="Navegação principal">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`nav-tab ${activeTab === tab.id ? 'nav-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="theme-indicator" aria-label="Indicador de tema" type="button">
            ◑
          </button>
        </div>
      </header>

      <main className="app-main">
        {activeTab === 'resume' && <ResumeSection />}
        {activeTab === 'certifications' && <CertificationsSection />}
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'about' && <AboutSection />}
      </main>
    </div>
  )
}
export default App
