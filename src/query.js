import { gql } from '@apollo/client';

export const CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

export const Category = gql`
  query GetCategory {
    categories {
      name
      products {
        id
        name
        description
        inStock
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;
