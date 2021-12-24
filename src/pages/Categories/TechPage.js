import { withProducts } from '../../hoc/withProducts';
import { Products } from '../../components/Products/Products';
import { useEffect } from 'react';

const TechPage = ({ data }) => {
  useEffect(() => {}, [data]);

  return (
    <div>
      <div></div>
      <div>
        {data.categories.map(category => {
          if (category.name == 'tech') {
            return <Products key={'tech'} data={category} />;
          }
        })}
      </div>
    </div>
  );
};

export default withProducts(TechPage);
