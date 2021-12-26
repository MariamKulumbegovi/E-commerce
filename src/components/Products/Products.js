import { Product } from '.';
import styles from './Products.module.css';

export const Products = ({ data }) => {
  return (
    <div>
      <div>
        <div className={styles.prodWrapper}>
          <Product data={data} />
        </div>
      </div>
    </div>
  );
};
