import { useEffect } from "react";
import "./video-materia-fram.css"

function VideoFrameworks() {
  useEffect(() => {
    // Cargar el script de TikTok cuando el componente se monte
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="content">
      <section className="section">
        <h2>Videos de Frameworks y Tecnologías Web</h2>
        <p className="section-description">Aprende sobre las principales tecnologías y frameworks del desarrollo web</p>

        <div className="video-grid">

          {/* Python */}
          <div className="video-item">
            <blockquote 
              className="tiktok-embed" 
              cite="https://vt.tiktok.com/ZS5V4auAt/" 
              data-video-id="7448663990062861573"
              style={{maxWidth: '605px', minWidth: '325px'}}
            >
              <section>
                <a target="_blank" rel="noopener noreferrer" title="Ver en TikTok" href="https://vt.tiktok.com/ZS5V4auAt/">Ver en TikTok</a>
              </section>
            </blockquote>
            <div className="video-info">
              <h3>🐍 Python</h3>
              <p><strong>Lenguaje de programación versátil y potente.</strong> Python es uno de los lenguajes más populares para desarrollo web (Django, Flask), ciencia de datos, inteligencia artificial y automatización. Su sintaxis clara y legible lo hace ideal para principiantes y profesionales.</p>
              <a 
                href="https://vt.tiktok.com/ZS5V4auAt/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                📱 Ver video completo en TikTok
              </a>
            </div>
          </div>

          {/* HTML */}
          <div className="video-item">
            <blockquote 
              className="tiktok-embed" 
              cite="https://vt.tiktok.com/ZS5V464eK/" 
              data-video-id="7448664372654812422"
              style={{maxWidth: '605px', minWidth: '325px'}}
            >
              <section>
                <a target="_blank" rel="noopener noreferrer" title="Ver en TikTok" href="https://vt.tiktok.com/ZS5V464eK/">Ver en TikTok</a>
              </section>
            </blockquote>
            <div className="video-info">
              <h3>📄 HTML</h3>
              <p><strong>El lenguaje de marcado fundamental de la web.</strong> HTML (HyperText Markup Language) es la base de todas las páginas web. Define la estructura y el contenido de los sitios web mediante etiquetas y elementos. Es el primer paso esencial en el desarrollo web.</p>
              <a 
                href="https://vt.tiktok.com/ZS5V464eK/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                📱 Ver video completo en TikTok
              </a>
            </div>
          </div>

          {/* Internet */}
          <div className="video-item">
            <blockquote 
              className="tiktok-embed" 
              cite="https://vt.tiktok.com/ZS5V4fcBq/" 
              data-video-id="7448664674836360454"
              style={{maxWidth: '605px', minWidth: '325px'}}
            >
              <section>
                <a target="_blank" rel="noopener noreferrer" title="Ver en TikTok" href="https://vt.tiktok.com/ZS5V4fcBq/">Ver en TikTok</a>
              </section>
            </blockquote>
            <div className="video-info">
              <h3>🌐 Internet</h3>
              <p><strong>Cómo funciona la red global.</strong> Comprende los conceptos fundamentales de Internet: protocolos HTTP/HTTPS, DNS, servidores, clientes, y cómo se comunican los dispositivos a través de la red. Esencial para todo desarrollador web.</p>
              <a 
                href="https://vt.tiktok.com/ZS5V4fcBq/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                📱 Ver video completo en TikTok
              </a>
            </div>
          </div>

          {/* CSS */}
          <div className="video-item">
            <blockquote 
              className="tiktok-embed" 
              cite="https://vt.tiktok.com/ZS5V4uypA/" 
              data-video-id="7448665014226758918"
              style={{maxWidth: '605px', minWidth: '325px'}}
            >
              <section>
                <a target="_blank" rel="noopener noreferrer" title="Ver en TikTok" href="https://vt.tiktok.com/ZS5V4uypA/">Ver en TikTok</a>
              </section>
            </blockquote>
            <div className="video-info">
              <h3>🎨 CSS</h3>
              <p><strong>El lenguaje de estilos para la web.</strong> CSS (Cascading Style Sheets) controla la presentación visual de las páginas web. Define colores, tipografías, layouts, animaciones y hace que los sitios sean atractivos y responsive para diferentes dispositivos.</p>
              <a 
                href="https://vt.tiktok.com/ZS5V4uypA/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                📱 Ver video completo en TikTok
              </a>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="video-item">
            <blockquote 
              className="tiktok-embed" 
              cite="https://vt.tiktok.com/ZS5V4TEsd/" 
              data-video-id="7448665291093765382"
              style={{maxWidth: '605px', minWidth: '325px'}}
            >
              <section>
                <a target="_blank" rel="noopener noreferrer" title="Ver en TikTok" href="https://vt.tiktok.com/ZS5V4TEsd/">Ver en TikTok</a>
              </section>
            </blockquote>
            <div className="video-info">
              <h3>💨 Tailwind CSS</h3>
              <p><strong>Framework CSS utility-first moderno.</strong> Tailwind CSS revoluciona el desarrollo frontend con clases de utilidad que permiten crear interfaces personalizadas rápidamente sin salir del HTML. Optimiza el código CSS y mejora la productividad del desarrollo.</p>
              <a 
                href="https://vt.tiktok.com/ZS5V4TEsd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                📱 Ver video completo en TikTok
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default VideoFrameworks;
