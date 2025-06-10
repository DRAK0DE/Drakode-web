import '../styles/components/navbar.css'

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header id="header">

            <div class="header__element home">
                <Link to="/" class="home__link">INICIO</Link>
            </div>

            <nav class="nav">
                <Link to="/skills" class="nav__element" >HABILIDADES</Link>
                <Link to="/projects" class="nav__element" >PROYECTOS</Link>
                <Link to="/journey" class="nav__element" >ESTUDIOS</Link>
                <Link to="/contact" class="nav__element" >CONTACTO</Link>
            </nav>
        </header>
    )
}

