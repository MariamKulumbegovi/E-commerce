import styles from './Product.module.css';
import cartIcon from '../../img/CircleIcon.svg';
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
export const Product = ({ data }) => {
  const dispatch = useDispatch()
 
  return (
    <>
      {data.products.map(product => {
        return (
          <div key={product.id} className={styles.wrapper}>
            <Link to={product.id}>
              <div
                className={product.inStock ? styles.inStock : styles.outofstock}
              >
                <img className={styles.product} src={product.gallery[0]} />
                <img  className={styles.cartIcon} src={cartIcon} />
                <h3 className={styles.font}>{product.name}</h3>

                <div>
                  {product.prices.map(price => {
                    if (price.currency.label == 'USD') {
                      return (
                        <span
                          key={price.currency.label}
                          className={styles.font}
                        >
                          {price.currency.symbol} {price.amount}
                        </span>
                      );
                    }
                  })}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};
