import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "./header.css";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Li Yuan</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to="/" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/workexperience" className = "nav__link">
                                <i className="uil uil-briefcase nav__icon"></i> Work Experience
                            </Link>
                        </li>

                        {/* <li className="nav__item">
                            <a href="resume" className="nav__link">
                                <i className="uil uil-briefcase nav__icon"></i> Download Resume Here
                            </a>
                        </li> */}



                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header