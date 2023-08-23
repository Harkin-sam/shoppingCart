import React from 'react'
import style from './Product.module.css'

const product = ({item}) => {
  return (
    <div className={style.product}>
        <img  src = {item.image}  atl ="glasses"className={style.product__images}/>
        
        <div className={style.product__cover}>
            <div>
            <p className={style.product__name}>{item.name}</p>
            <p className= {style.product__price}>${item.price}</p>
            </div>

            <button className={style.product__button}>Add to basket </button>
        </div>
        
        
    </div>
  )
}

export default product