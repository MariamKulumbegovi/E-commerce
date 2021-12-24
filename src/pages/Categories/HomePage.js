import { withProducts } from '../../hoc/withProducts';
import { Products } from '../../components/Products/Products';
import { useEffect } from 'react';

const HomePage = ({ data }) => {
  useEffect(() => {}, [data]);

  return (
    <div>
      <div></div>
      <div>
        {data.categories.map(category => {
          if (category.name == 'all') {
            return <Products key={'all'} data={category} />;
          }
        })}
      </div>
    </div>
  );
};

export default withProducts(HomePage);
