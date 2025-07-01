  import { useState, useRef, useEffect } from "react";
  import { Link } from "react-router-dom";
  import "../styles/components/navbar.css";

  export default function Navbar() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const navRef = useRef(null);
    const burguerRef = useRef(null);

    const toggleNav = () => {
      setIsNavVisible((prev) => !prev);
    };

    // Bloquea scroll cuando el menú está abierto
    useEffect(() => {
      document.body.style.overflow = isNavVisible ? "hidden" : "auto";
    }, [isNavVisible]);

    // Cierra el menú si se da clic fuera del nav o del botón
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          isNavVisible &&
          navRef.current &&
          !navRef.current.contains(event.target) &&
          burguerRef.current &&
          !burguerRef.current.contains(event.target)
        ) {
          setIsNavVisible(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isNavVisible]);

    return (
      <header id="header">
        <div className="header__home">
          <Link to="/" className="header__link">
            <img
              className="header__logo"
              src="/icons/Logo_v2.svg"
              alt="Logo-Drakode"
            />
          </Link>
        </div>

        <div className="header__burguerMenu" onClick={toggleNav} ref={burguerRef}>
          <span
            className={`header__burguerMenu-icon ${
              isNavVisible ? "is-active" : ""
            }`}
          ></span>
        </div>

        <nav
          className={`header__nav ${isNavVisible ? "header__nav--visible" : ""}`}
          ref={navRef}
        >
          <a
            href="#home"
            className="header__nav-item header__nav-desktop"
            onClick={() => setIsNavVisible(false)}
          >
            INICIO
          </a>
          <a
            href="#projects"
            className="header__nav-item"
            onClick={() => setIsNavVisible(false)}
          >
            PROYECTOS
          </a>
          <a
            href="#about"
            className="header__nav-item"
            onClick={() => setIsNavVisible(false)}
          >
            SOBRE MÍ
          </a>
        </nav>
      </header>
    );
  }
