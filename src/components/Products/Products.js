import { Product } from './Product';
import styles from './Products.module.css';
import { useQuery } from '@apollo/client';
import { Category } from '../../query';

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
