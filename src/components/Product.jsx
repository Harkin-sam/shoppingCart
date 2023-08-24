import React, { useContext }  from 'react'
import style from './Product.module.css'
import { StoreContext } from '../context&reducer/StoreContext';


const product = ({item}) => {

    const {addToBasket} = useContext(StoreContext);

    const handleAdd = () => {
        addToBasket(item); // item here is passed from  product prop
    }

  return (
    <div className={style.product}>
        <img  src = {item.image}  atl ="glasses"className={style.product__images}/>
        
        <div className={style.product__cover}>
            <div>
            <p className={style.product__name}>{item.name}</p>
            <p className= {style.product__price}>${Number(item.price).toFixed(2)}</p>
            </div>

            <button className={style.product__button} onClick = {handleAdd}>Add to basket </button>
        </div>
        
        
    </div>
  )
}

export default product