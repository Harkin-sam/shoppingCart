import React, {useContext} from "react";
import style from "./basketProduct.module.css";
import { StoreContext } from "../context&reducer/StoreContext";

const BasketProduct = ({ item }) => {
  const { removeFromBasket } = useContext(StoreContext);

  const handleRemove = () => {
    removeFromBasket(item);
  };
  return (
    <div className={style.basketProduct}>
      <img src={item.image} alt={item.name + "glasses"} />
      <div className={style.basketProduct__item}>
        <p>{item.name}</p>
        <div>${Number(item.price).toFixed(2)}</div>
      </div>
      <button className={style.basketProduct__button} onClick={handleRemove}>
        remove
      </button>
    </div>
  );
};

export default BasketProduct;
