import { useEffect } from 'react';
import {Products} from '../Products/Products';
import { witProducts } from '../../hoc/withProducts';

const Clothes = ({ data }) => {
  useEffect(() => {}, [data]);
  return (
    <div>
      <div>
        <h1>Clothes</h1>
      </div>
      <div>
        {data.categories.map(category => {
          if (category.name == 'clothes') {
            return <Products data={category} />;
          }
        })}
      </div>
    </div>
  );
};

export default witProducts(Clothes);
