import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import BasketProduct from "../components/basketProduct";
import style from "./Basket.module.css";

import { StoreContext } from "../context&reducer/StoreContext";

function Basket() {
  const {products, total, clearCart} = useContext(StoreContext);

  console.log(products, total )

  return (
    <div className={style.basket}>
      <Navbar />
      <div className={style.basket__heading}>
        <h3>Your basket </h3>
        <p> Total: ${Number(total).toFixed(2)} </p>
      </div>
        {!products && <div>Basket Empty</div>}

      {products && products.map((product, i) => {
        return <BasketProduct key={i} item={product}/>
      })}

      <button onClick={()=>clearCart()}>Clear Cart</button>
    </div>
  );
}

export default Basket;
