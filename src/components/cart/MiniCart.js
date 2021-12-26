import { Component } from 'react';
import { Cart } from '.';
import styles from '../layout/Header.module.css';

export class MiniCart extends Component {
  render() {
    return (
      <div className={styles.miniCartWrap}>
        <Cart />
        <div>
          <div className={styles.btnsWrap}>
            <button className={styles.view}>VIEW BAG</button>
            <button className={styles.checkout}>CHECK OUT</button>
          </div>
        </div>
      </div>
    );
  }
}

export { Cart };
