import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import styles from './Cart.module.css';
import css from '../Products/PDP.module.css';
import CartQty from './CartQty';

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  console.log(cart, 'cart');
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.prices[0].amount;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  return (
    <div>
      <div>
        <h1>Cart {totalItems} - items</h1>
      </div>
      <div className={styles.cartWrapper}>
        {cart.map(product => {
          return (
            <div key={product.id} className={styles.wrap2}>
              <div>
                <h2>{product.brand}</h2>
                <h3>{product.name}</h3>
                <strong>{product.qty * product.prices[0].amount}</strong>
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
                  <CartQty CartQuantity={product.qty} ID={product.id} />
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
          <strong>{totalPrice}</strong>
        </div>
      </div>
    </div>
  );
};

const mapToStateProps = state => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapToStateProps)(Cart);
