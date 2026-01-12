import React, { useState } from "react";
import "./css_menu.css";

const Menu = ({ onNavigate }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleNavigation = (view) => {
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <div className="menu-container">
      <h2>Menú de Frameworks y Metodologías</h2>

      {/* Frameworks */}
      <div className="menu-item">
        <button onClick={() => toggle("frameworks")} className="menu-btn">
          Frameworks y Tecnologías {openSection === "frameworks" ? "▲" : "▼"}
        </button>
        {openSection === "frameworks" && (
          <ul className="submenu">
            <li>
              <button onClick={() => handleNavigation("frameworks")} className="submenu-link">
                📚 Videos de Frameworks
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("metodologia")} className="submenu-link">
                🔧 Videos de Metodología
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("futbol")} className="submenu-link">
                ⚽ Videos de Fútbol
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;