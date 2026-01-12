import { useState } from "react";
import "./App.css";
import Header from "./componentes/header.jsx";
import Footer from "./componentes/footer.jsx";
import Menu from "./componentes/menu.jsx";
import Contacto from "./componentes/contacto.jsx";
import VideoFrameworks from "./componentes/video-materia-fram.jsx";
import VideoMetodologia from "./componentes/videos-metodologia.jsx";
import VideoFutbol from "./componentes/videos-futbol.jsx";

function App() {
  const [currentView, setCurrentView] = useState("home");

  const renderContent = () => {
    switch (currentView) {
      case "frameworks":
        return <VideoFrameworks />;
      case "metodologia":
        return <VideoMetodologia />;
      case "futbol":
        return <VideoFutbol />;
      default:
        return (
          <>
            <Header />
            <Menu onNavigate={setCurrentView} />
            <Contacto />
            <main className="content">
              <section className="section">
                <div className="welcome-section">
                  <h2>🎬 Bienvenido al Portal de Videos Educativos</h2>
                  
                  <div className="intro-text">
                    <p className="main-description">
                      Esta plataforma reúne contenido educativo seleccionado sobre tecnología, metodologías de desarrollo 
                      y entretenimiento deportivo. Explora diferentes categorías y aprende de manera visual y dinámica.
                    </p>
                  </div>

                  <div className="features-grid">
                    <div className="feature-card">
                      <div className="feature-icon">💻</div>
                      <h3>Frameworks y Tecnologías</h3>
                      <p>
                        Descubre los fundamentos de la programación web con videos sobre <strong>Python</strong>, 
                        <strong>HTML</strong>, <strong>CSS</strong>, <strong>Tailwind CSS</strong> y conceptos de 
                        <strong>Internet</strong>. Ideal para iniciar en el desarrollo web.
                      </p>
                      <span className="video-count">📹 5 videos de TikTok</span>
                    </div>

                    <div className="feature-card">
                      <div className="feature-icon">🔧</div>
                      <h3>Metodologías Ágiles</h3>
                      <p>
                        Aprende sobre las metodologías más utilizadas en el desarrollo de software: <strong>Scrum</strong>, 
                        <strong>Kanban</strong>, <strong>Diagramas de Flujo</strong>, y herramientas como 
                        <strong>GitHub</strong> para gestión de proyectos.
                      </p>
                      <span className="video-count">📹 5 videos de YouTube Shorts</span>
                    </div>

                    <div className="feature-card">
                      <div className="feature-icon">⚽</div>
                      <h3>Mundo del Fútbol</h3>
                      <p>
                        Disfruta del mejor contenido deportivo: <strong>Champions League</strong>, la rivalidad 
                        <strong>Messi vs Ronaldo</strong>, los <strong>mejores equipos</strong> y <strong>jugadores</strong>, 
                        y la emoción de la <strong>Copa del Mundo</strong>.
                      </p>
                      <span className="video-count">📹 5 videos de YouTube Shorts</span>
                    </div>
                  </div>

                  <div className="call-to-action">
                    <h3>🚀 ¿Listo para comenzar?</h3>
                    <p>Utiliza el menú desplegable arriba para navegar entre las diferentes secciones de videos.</p>
                    <div className="action-icons">
                      <span>👆 Haz clic en "Frameworks y Tecnologías"</span>
                      <span>📱 Mira los videos directamente aquí</span>
                      <span>🔗 O visita el enlace completo en TikTok/YouTube</span>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </>
        );
    }
  };

  // Si no es la vista home, el componente renderiza todo (Header, Menu, Footer incluidos)
  if (currentView !== "home") {
    return (
      <div className="container">
        <div style={{ textAlign: "center", padding: "1rem", background: "#f0f0f0" }}>
          <button 
            onClick={() => setCurrentView("home")}
            style={{
              padding: "0.5rem 1.5rem",
              background: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            ← Volver al inicio
          </button>
        </div>
        {renderContent()}
      </div>
    );
  }

  return <div className="container">{renderContent()}</div>;
}

export default App;
