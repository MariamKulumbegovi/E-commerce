import styles from './Product.module.css';
import cartIcon from '../../img/CircleIcon.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { INITIAL_STATE } from '../../redux/shopping/shopping-reducer';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/shopping/shopping-actions';

const Product = ({ data, addToCart }) => {
  useEffect(() => {
    INITIAL_STATE.products = data.products;
  }, [data]);

  return (
    <>
      {data.products.map(product => {
        return (
          <div key={product.id} className={styles.wrapper}>
            <div
              className={product.inStock ? styles.inStock : styles.outofstock}
            >
              <Link to={product.id}>
                <img className={styles.product} src={product.gallery[0]} />
              </Link>
              <button
                disabled={product.inStock ? false : true}
                onClick={() => addToCart(product.id)}
                className={
                  product.inStock ? styles.add_to_cartbtn : styles.disabledbtn
                }
              >
                <img className={styles.cartIcon} src={cartIcon} />
              </button>
              <h3 className={styles.font}>{product.name}</h3>

              <div>
                {product.prices.map(price => {
                  if (price.currency.label == 'USD') {
                    return (
                      <span key={price.currency.label} className={styles.font}>
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

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
