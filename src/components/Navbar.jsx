import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { StoreContext } from "../context&reducer/StoreContext";

function Navbar() {
    const {totalAmount} = useContext(StoreContext)
  return (
    <>
    <div className={style.nav}>
      <Link to="/" className={style.nav__a}>
        Home
      </Link>
      <Link to="/basket" className={style.nav__a}>
        Basket
        <span className ={style.notification}>{totalAmount}</span>
      </Link>
    </div>

    <h1 className={style.heading1}>useContext + useReducer Store</h1>
    </>
  );
}

export default Navbar;
