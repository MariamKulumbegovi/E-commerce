import { useEffect } from 'react';
import {Products} from '../Products/Products';
import { witProducts } from '../../hoc/withProducts';

export const Tech = ({ data }) => {
  useEffect(() => {}, [data]);
  return (
    <div>
      <div>
        <h1>Tech</h1>
      </div>
      <div>
        {data.categories.map(category => {
          if (category.name == 'tech') {
            return <Products data={category} />;
          }
        })}
      </div>
    </div>
  );
};

export default witProducts(Tech);
