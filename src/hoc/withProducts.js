import { useQuery } from '@apollo/client';
import { Category } from '../query';

export const witProducts = Component => {
  const WithProducts = props => {
    const { loading, error, data } = useQuery(Category);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);
    return <Component {...props} data={data} />;
  };

  return WithProducts;
};
