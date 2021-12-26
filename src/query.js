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
        brand
        description
        inStock
        gallery
        attributes {
          id
          name
          items {
            displayValue
            value
            id
          }
        }
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
