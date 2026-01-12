import React from "react";
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaUser } from "react-icons/fa";
import "./contacto.css";

const Contacto = () => {
  const contacto = {
    nombre: "Daren Velazquez",
    telefono: "5522345234",
    email: "daren.velazquez@example.com",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    descripcion: "Desarrollador Web | Creador de Contenido Educativo"
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contacto.telefono}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contacto.email}`;
  };

  return (
    <div className="contacto-card">
      <div className="contacto-header">
        <div className="avatar">
          <FaUser size={40} />
        </div>
        <h2 className="contacto-title">💼 Información de Contacto</h2>
        <p className="contacto-subtitle">{contacto.descripcion}</p>
      </div>

      <div className="contacto-info">
        <div className="info-item">
          <div className="info-icon">
            <FaUser size={20} color="#3498db" />
          </div>
          <div className="info-content">
            <span className="info-label">Nombre</span>
            <span className="info-value">{contacto.nombre}</span>
          </div>
        </div>

        <div className="info-item clickable" onClick={handlePhoneClick}>
          <div className="info-icon">
            <FaPhone size={20} color="#27ae60" />
          </div>
          <div className="info-content">
            <span className="info-label">Teléfono</span>
            <span className="info-value">{contacto.telefono}</span>
          </div>
        </div>

        <div className="info-item clickable" onClick={handleEmailClick}>
          <div className="info-icon">
            <FaEnvelope size={20} color="#e74c3c" />
          </div>
          <div className="info-content">
            <span className="info-label">Email</span>
            <span className="info-value">{contacto.email}</span>
          </div>
        </div>
      </div>

      <div className="social-section">
        <h3 className="social-title">🌐 Redes Sociales</h3>
        <div className="social-container">
          <a 
            href={contacto.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link instagram"
            title="Visitar Instagram"
          >
            <FaInstagram size={24} />
            <span>Instagram</span>
          </a>

          <a 
            href={contacto.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link facebook"
            title="Visitar Facebook"
          >
            <FaFacebook size={24} />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      <div className="contacto-footer">
        <p>¿Tienes alguna pregunta? ¡No dudes en contactarme!</p>
      </div>
    </div>
  );
};

export default Contacto;