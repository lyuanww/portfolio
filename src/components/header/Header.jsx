import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Wong</a>
            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className="uil uil-estate nav_icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav_icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav_icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="services" className="nav__link">
                            <i className="uil uil-briefcase nav_icon"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil- nav_icon"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil- nav_icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header