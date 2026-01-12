import "./videos-metodologia.css";

function VideoMetodologia() {
  return (
    <main className="content">
      <section className="section">
        <h2>Videos de Metodologías de Desarrollo</h2>
        <p className="section-description">
          Descubre las metodologías ágiles y herramientas esenciales para gestionar proyectos de software
        </p>

        <div className="video-grid">

          {/* Kanban */}
          <div className="video-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/hSW2q7kITSI"
                title="Kanban Metodologías"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="video-info">
              <h3>📋 Kanban</h3>
              <p><strong>Metodología visual para gestión de trabajo.</strong> Kanban utiliza tableros visuales con tarjetas para representar tareas y su flujo de trabajo. Permite visualizar el trabajo en progreso, identificar cuellos de botella y optimizar el flujo de entrega continua. Ideal para equipos que buscan flexibilidad y mejora continua.</p>
              <a 
                href="https://youtube.com/shorts/hSW2q7kITSI?si=3cpZ8uuOEKz_bl-K" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                ▶️ Ver video completo en YouTube
              </a>
            </div>
          </div>

          {/* Principales Metodologías */}
          <div className="video-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/PTgSGDtp36s"
                title="Principales Metodologías"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="video-info">
              <h3>🔄 Principales Metodologías</h3>
              <p><strong>Panorama de las metodologías ágiles más usadas.</strong> Explora las diferentes metodologías de desarrollo como Scrum, Kanban, XP (Extreme Programming), Lean, y más. Cada una tiene sus ventajas y se adapta a diferentes tipos de proyectos y equipos. Aprende cuál es la mejor para tu contexto.</p>
              <a 
                href="https://youtube.com/shorts/PTgSGDtp36s?si=FCPj2TC7NolfKtCi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                ▶️ Ver video completo en YouTube
              </a>
            </div>
          </div>

          {/* Scrum */}
          <div className="video-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/rjsmTDQzCJI"
                title="Scrum Metodología"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="video-info">
              <h3>🏃 Scrum</h3>
              <p><strong>El framework ágil más popular del mundo.</strong> Scrum organiza el trabajo en sprints cortos (1-4 semanas), con roles definidos (Scrum Master, Product Owner, Dev Team) y ceremonias clave (Daily Standup, Sprint Planning, Review, Retrospective). Enfocado en entregar valor incremental y adaptarse rápidamente al cambio.</p>
              <a 
                href="https://youtube.com/shorts/rjsmTDQzCJI?si=irA-9uHiVjF_MgmQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                ▶️ Ver video completo en YouTube
              </a>
            </div>
          </div>

          {/* Diagramas de Flujo */}
          <div className="video-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/4OZ8st0SEKM"
                title="Diagramas de Flujo"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="video-info">
              <h3>📊 Diagramas de Flujo</h3>
              <p><strong>Representación visual de procesos y algoritmos.</strong> Los diagramas de flujo utilizan símbolos estandarizados para mapear procesos, decisiones y flujos de información. Son fundamentales para documentar lógica de programación, procesos de negocio y comunicar ideas complejas de forma clara y visual.</p>
              <a 
                href="https://youtube.com/shorts/4OZ8st0SEKM?si=NAn9hGZr7E-7m7f6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                ▶️ Ver video completo en YouTube
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="video-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/t_ycx5KPeDU"
                title="GitHub"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="video-info">
              <h3>🐙 GitHub</h3>
              <p><strong>Plataforma de control de versiones y colaboración.</strong> GitHub es la herramienta esencial para desarrolladores, permitiendo control de versiones con Git, colaboración en código, gestión de proyectos, CI/CD, y hosting de código. Fundamental para el trabajo en equipo y el desarrollo moderno de software.</p>
              <a 
                href="https://youtube.com/shorts/t_ycx5KPeDU?si=j6FKKONhEmUIbAld" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                ▶️ Ver video completo en YouTube
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default VideoMetodologia;
