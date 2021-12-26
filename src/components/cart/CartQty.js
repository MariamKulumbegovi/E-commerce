import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  removeFromCart,
  adjustQty,
} from '../../redux/shopping/shopping-actions';
import styles from './Cart.module.css';
const CartQty = ({ removeFromCart, adjustQty, CartQuantity, ID }) => {
  const [quantity, setQuantity] = useState(CartQuantity);

  const handleQ = type => {
    let count = CartQuantity;
    if (type === 'dec') {
      adjustQty(ID, count > 1 && count - 1);
      setQuantity(count > 1 && count - 1);
    } else {
      adjustQty(ID, count + 1);
      setQuantity(count + 1);
    }
  };

  return (
    <div className={styles.btns}>
      <div className={styles.quantityWrapper}>
        <button onClick={() => handleQ('asc')} className={styles.qbtn}>
          +
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button onClick={() => handleQ('dec')} className={styles.qbtn}>
          -
        </button>
      </div>
      <div>
        <button onClick={() => removeFromCart(ID)} className={styles.dltbtn}>
          {' '}
          ❌
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartQty);
