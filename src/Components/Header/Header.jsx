import React from "react";
import CofeLogo from "../img/Cofe-logo.svg";
import { NavLink } from "react-router-dom";
import { Context as contextLang } from "../Context/Localization";
// import useTheme from "../Hooks/useHooks";
import { Context as ContextTheme } from "../Context/Theme";
import Languages from "../Localization/Localization";
import "./Header.scss";

function Header() {

  const {lang, setlang} = React.useContext(contextLang)

  const {theme, setTheme} = React.useContext(ContextTheme)

  console.log(setTheme);
  return (
    <>
      <header className="header">
        <div className="container">
          <NavLink className="header__link" to="home">
            <img
              className="header__logo"
              src={CofeLogo}
              alt="cofe logo"
              width="237"
              height="27"
            />
          </NavLink>

          <select value={lang} onChange={(evt) => setlang(evt.target.value)}>
                <option value="uz">UZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
          </select>

          <select value={theme} onChange={(them) => setTheme(them.target.value)}>
            <option value="default">Default</option>
            <option value="light">Blue</option>
            <option value="dark">Red</option>
          </select>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className="nav__link" to="Home">{Languages[lang].header.nav.nav__link}</NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to="about">{Languages[lang].header.nav.nav__link1}</NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to="plan">{Languages[lang].header.nav.nav__link2}</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
