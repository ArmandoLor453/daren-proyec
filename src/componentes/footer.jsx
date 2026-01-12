import "./footer.css";
import { FaHeart, FaCode, FaGraduationCap, FaReact } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">
            <FaGraduationCap /> PROYECTO EDUCATIVO
          </h3>
          <p className="footer-description">
            Plataforma de videos educativos sobre tecnología, metodologías y entretenimiento
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">📚 Contenido</h4>
          <ul className="footer-links">
            <li>• Frameworks y Tecnologías</li>
            <li>• Metodologías Ágiles</li>
            <li>• Videos de Fútbol</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">🛠️ Tecnologías</h4>
          <div className="tech-icons">
            <span className="tech-badge">
              <FaReact /> React
            </span>
            <span className="tech-badge">
              <FaCode /> Vite
            </span>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="footer-credits">
          Desarrollado con <FaHeart className="heart-icon" /> por <strong>Daren Velazquez</strong>
        </p>
        <p className="footer-copy">
          © {currentYear} PROYECTO PROFE MAU • Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
