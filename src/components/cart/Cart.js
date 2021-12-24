import React, { Component } from 'react';
import { useState } from 'react/cjs/react.development';
import styles from './Cart.module.css';



export const Cart=()=> {

  const [quantity,setQuantity]=useState(0)

  const handleQ=(type)=>{

    if (type==="dec"){
      quantity >0 && setQuantity(quantity-1)
    }else {
      setQuantity(quantity+1)
    }
  }

    return (
      <div>
        <div>
          <h1>Cart</h1>
        </div>
        <div className={styles.cartWrapper}>
          <div className={styles.wrap2}>
            <div>
              <h2>brand</h2>
              <h3>name</h3>
              <strong>price</strong>
              <div>sizes</div>
            </div>
            <div >
              <div className={styles.wrap3}>
                <div className={styles.quantityWrapper}>
                  <button onClick={()=>handleQ("asc")}  className={styles.qbtn}>+</button>
                  <span className={styles.quantity}>{quantity}</span>
                  <button  onClick={()=>handleQ("dec")} className={styles.qbtn}>-</button>
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                    className={styles.cartimg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.totalWrap} >
              <h4>Total</h4>
              <strong>100$</strong>
            </div>
        </div>
        
      </div>
    );
  
}


