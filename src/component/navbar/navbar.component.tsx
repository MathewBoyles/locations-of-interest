import * as React from "react";

import "./navbar.scss";

import { Logo } from "../logo/logo.component";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const variation = window.location.search.includes("syl=true") ? "SYL" : "LOI";

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Logo variation={variation} className="nav__logo__image" />
      </div>

      <ul className="nav__links">
        <li className="nav__links__item">
          <NavLink
            to="/"
            exact
            className="nav__links__item__link"
            activeClassName="nav__links__item__link--active">Search Locations</NavLink>
        </li>

        <li className="nav__links__item">
          <NavLink
            to="/about"
            className="nav__links__item__link"
            activeClassName="nav__links__item__link--active">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
