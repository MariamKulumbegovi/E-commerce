import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useLocation } from 'react-router';
import { Product } from '../Products/Product';

export const Test = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[1];
  console.log(cat);
  const Cat = gql`
    query GetCat {
      category(input:{title:"${cat}"}){
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(Cat);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return <div>{/* {cat? <Product data={data}/> : <div>none </div>} */}</div>;
};
