import "./videos-futbol.css";

function VideoFutbol() {
  return (
    <main className="content">
      <section className="section">
        <h2>⚽ Videos de Fútbol</h2>
        <p className="section-description">
          Explora los mejores momentos del fútbol mundial: Champions, leyendas y competiciones históricas
        </p>

        <div className="video-grid">

          {/* Champions League */}
          <div className="video-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/kTeJhaX8yeE"
                title="Champions League"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="video-info">
              <h3>🏆 Champions League</h3>
              <p><strong>La competición de clubes más prestigiosa del mundo.</strong> La UEFA Champions League reúne a los mejores equipos de Europa en una batalla épica por la gloria continental. Con momentos inolvidables, remontadas históricas y finales de infarto, es el sueño de todo futbolista y aficionado.</p>
              <a 
                href="https://youtube.com/shorts/kTeJhaX8yeE?si=lvc8Sn7zJKY4A7S-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                ▶️ Ver video completo en YouTube
              </a>
            </div>
          </div>

          {/* Messi vs Ronaldo */}
          <div className="video-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/6Bu3WLcltBo"
                title="Messi vs Ronaldo"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="video-info">
              <h3>⚡ Messi vs Ronaldo</h3>
              <p><strong>La rivalidad que definió una era del fútbol.</strong> Lionel Messi y Cristiano Ronaldo han dominado el fútbol mundial por más de una década, rompiendo récords y ganando múltiples Balones de Oro. Su rivalidad ha elevado el deporte a niveles nunca vistos, inspirando a millones alrededor del mundo.</p>
              <a 
                href="https://youtube.com/shorts/6Bu3WLcltBo?si=LBVcWryGV6844zMy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                ▶️ Ver video completo en YouTube
              </a>
            </div>
          </div>

          {/* Equipos de Fútbol */}
          <div className="video-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/5zUgv-5voro"
                title="Equipos de Fútbol"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="video-info">
              <h3>🛡️ Equipos de Fútbol</h3>
              <p><strong>Los clubes más grandes e históricos del planeta.</strong> Desde el Real Madrid y Barcelona hasta el Manchester United y Bayern Munich, estos equipos legendarios han construido dinastías, acumulado títulos y creado historias que trascienden generaciones. Conoce sus glorias, rivalidades y legados.</p>
              <a 
                href="https://youtube.com/shorts/5zUgv-5voro?si=Vrn7gFWxCf1SuBER" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                ▶️ Ver video completo en YouTube
              </a>
            </div>
          </div>

          {/* Jugadores de Fútbol */}
          <div className="video-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/mscw13V-dI8"
                title="Jugadores de Fútbol"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="video-info">
              <h3>⭐ Jugadores de Fútbol</h3>
              <p><strong>Las estrellas que brillan en el firmamento futbolístico.</strong> Desde leyendas como Pelé, Maradona y Cruyff hasta las nuevas generaciones de Mbappé, Haaland y Vinicius Jr. Descubre los talentos que han dejado huella con su magia, goles espectaculares y habilidades extraordinarias en el campo.</p>
              <a 
                href="https://youtube.com/shorts/mscw13V-dI8?si=FOcZcw7n7z8SbARs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-button"
              >
                ▶️ Ver video completo en YouTube
              </a>
            </div>
          </div>

          {/* Mundial */}
          <div className="video-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/HBUqxDdR9kI"
                title="Copa del Mundo"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="video-info">
              <h3>🌍 Copa del Mundo</h3>
              <p><strong>El torneo más importante del fútbol mundial.</strong> Cada cuatro años, las mejores selecciones del planeta compiten por la gloria máxima del fútbol. Momentos icónicos, goles históricos, alegrías y lágrimas. El Mundial une al mundo entero en la pasión por el deporte rey.</p>
              <a 
                href="https://youtube.com/shorts/HBUqxDdR9kI?si=JzpdSMTJ-VX9CXyd" 
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

export default VideoFutbol;
