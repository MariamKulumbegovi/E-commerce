import React from 'react';
import styles from './Product.module.css';
import cartIcon from '../../img/CircleIcon.svg';
import { useLocation } from 'react-router';

export const Product = ({ data }) => {
  const location=useLocation()
  console.log(location.pathname.split("/")[1])
  return (
    <>
      {data.products.map(product => {
        return (
          <div key={product.id} className={styles.wrapper}>
            <div
              className={product.inStock ? styles.inStock : styles.outofstock}
            >
              <img className={styles.product} src={product.gallery[0]} />
              <img className={styles.cartIcon} src={cartIcon} />
              <h3 className={styles.font}>{product.name}</h3>
              <div>
                {product.prices.map(price => {
                  if (price.currency.label == 'USD') {
                    return (
                      <span className={styles.font}>
                        {price.currency.symbol} {price.amount}
                      </span>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
