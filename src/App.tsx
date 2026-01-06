import { useEffect, useState } from 'react'
import './App.css'
import { ResumeSection } from './sections/ResumeSection'
import { CertificationsSection } from './sections/CertificationsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { AboutSection } from './sections/AboutSection'

type TabId = 'resume' | 'certifications' | 'projects' | 'about'

const TABS: { id: TabId; label: string }[] = [
  { id: 'resume', label: 'CURRÍCULO' },
  // { id: 'certifications', label: 'CERTIFICAÇÕES' },
  // { id: 'projects', label: 'PROJETOS' },
  { id: 'about', label: 'SOBRE MIM' },
]

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('resume')
  const [showSplash, setShowSplash] = useState(true)
  const [splashProgress, setSplashProgress] = useState(0)

  useEffect(() => {
    const startedAt = Date.now()
    const minDurationMs = 4000

    const progressTimer = window.setInterval(() => {
      setSplashProgress((prev) => {
        if (prev >= 95) return prev
        const next = prev + Math.max(1, Math.round((100 - prev) * 0.08))
        return Math.min(next, 95)
      })
    }, 120)

    const finish = () => {
      const elapsed = Date.now() - startedAt
      const remaining = Math.max(0, minDurationMs - elapsed)

      window.setTimeout(() => {
        window.clearInterval(progressTimer)
        setSplashProgress(100)
        window.setTimeout(() => setShowSplash(false), 250)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
    }

    return () => {
      window.clearInterval(progressTimer)
      window.removeEventListener('load', finish)
    }
  }, [])

  return (
    <div className="app">
      {showSplash && (
        <div className="splash-screen" role="status" aria-label="Carregando site">
          <div className="splash-content">
            <p className="splash-quote">
              "Coragem, <strong>levanta-te</strong>, Ele te chama"
            </p>
            <p className="splash-signature">— <strong>Jesus Cristo</strong> (Marcos 10:49)</p>

            <div className="splash-progress" aria-hidden="true">
              <div className="splash-progress-bar" style={{ width: `${splashProgress}%` }} />
            </div>
            <div className="splash-progress-text">Carregando recursos... ({splashProgress}%)</div>
            <div className="splash-site-link">
              www.antonioguilhermefullstack.com
            </div>
          </div>
        </div>
      )}
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
