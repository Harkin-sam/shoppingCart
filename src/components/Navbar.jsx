import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.nav}>
      <Link to="/" className={style.nav__a}>
        Home
      </Link>
      <Link to="/basket" className={style.nav__a}>
        Basket
      </Link>
    </div>
  );
}

export default Navbar;
