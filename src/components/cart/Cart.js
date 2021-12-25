import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './Cart.module.css';
import css from '../Products/PDP.module.css';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

export const Cart = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart.products);
 
  const [quantity, setQuantity] = useState(0);
 
  const handleQ = type => {
    
    
    if (type === 'dec') {
      quantity > 0 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const products=()=>{
    return (
      <div>
    <div>
      <h1>Cart</h1>
    </div>
    <div className={styles.cartWrapper}>
      {cart.products.map(product => {
        return (
          <div className={styles.wrap2}>
            <div>
              <h2>{product.brand}</h2>
              <h3>{product.name}</h3>
              <strong>{product.price * (quantity + product.quantity) }</strong>
              <div>
                <div className={styles.sizesWrapper}>
                  {product.attributes.map(att => {
                    if (att.id == 'Color') {
                      return (
                        <div key={att.id} className={css.attwrapper}>
                          <div className={css.cwrapper}>
                            {att.items.map(one => {
                              return (
                                <div
                                  color={one.displayValue}
                                  key={one.displayValue}
                                  className={css.colors}
                                  style={{ backgroundColor: `${one.value}` }}
                                ></div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={att.name}>
                          <div>
                            {att.items.map(one => {
                              return (
                                <button
                                  value={one.value}
                                  className={css.sizebtn}
                                  key={one.value}
                                >
                                  {one.value}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className={styles.wrap3}>
                <div className={styles.quantityWrapper}>
                  <button
                    onClick={() => handleQ('asc')}
                    className={styles.qbtn}
                  >
                    +
                  </button>
                  <span className={styles.quantity}>{quantity + product.quantity }</span>
                  <button
                    onClick={() => handleQ('dec')}
                    className={styles.qbtn}
                  >
                    -
                  </button>
                </div>
                <div>
                  {/* {product.gallery.map(photo=>{
                    return (
                      <img className={styles.cartimg} src={photo} />
                    )
                  })} */}
                  <img src={product.gallery[0]} className={styles.cartimg} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.totalWrap}>
        <h4>Total</h4>
        <strong>{quantity < 1? cart.total : "" }</strong>
      </div>
    </div>
  </div>
    )
  }

  const emptyCart=()=>{
    return(
      <h2>Your cart is empty</h2>
    )
  }

  return cart.products.lenght < 1? emptyCart() :  products()
    
  
};
