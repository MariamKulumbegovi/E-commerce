import { withProducts } from '../../hoc/withProducts';
import { Products } from '../../components/Products/Products';
import { useEffect } from 'react';

const ClothesPage = ({ data }) => {
  useEffect(() => {}, [data]);

  return (
    <div>
      <div></div>
      <div>
        {data.categories.map(category => {
          if (category.name == 'clothes') {
            return <Products key={"clothes"} data={category} />;
          }
        })}
      </div>
    </div>
  );
};

export default withProducts(ClothesPage);
