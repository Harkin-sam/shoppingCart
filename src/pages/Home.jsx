import React from "react";
import style from "./Home.module.css";
import Navbar from "../components/Navbar";
import { storeData } from "../Utils/Data";
import Product from "../components/product";

function Home() {
  return (
    <div>
      <Navbar />
      <h1 className={style.heading1}>useContext + useReducer Store</h1>
      <h2 className={style.heading2}> New In</h2>
      <div className={style.container}>
        {storeData.map((item, i) => {
          return <Product key={i} item={item} />
        })}
      </div>
    </div>
  );
}

export default Home;
