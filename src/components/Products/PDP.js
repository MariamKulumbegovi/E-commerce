import { gql, useQuery } from '@apollo/client';
import styles from './PDP.module.css';
export const Product = gql`
  query GetProduct {
    product(id: "huarache-x-stussy-le") {
      gallery
      name
      brand
      description
      inStock
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
`;

// huarache-x-stussy-le  ps-5
export const PDP = () => {
  const { loading, error, data } = useQuery(Product);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.product.attributes[0], ' PDP');
  console.log(data.product);

  const item = data.product;

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgsWrapper}>
        {item.gallery.map(img => {
          return <img key={img} className={styles.imgs} src={img} />;
        })}
      </div>

      <div>
        <img className={styles.photo} src={item.gallery[0]} />
      </div>
      <div className={styles.detailedInfo}>
        <div>
          <h1 className={styles.brand}>{item.brand}</h1>
          <h2 className={styles.name}>{item.name}</h2>
          <h3 className={styles.outofstock}> {item.inStock ? "" : "This item is out of stock"} </h3>
        </div>
        <div>
          <h3>{item.attributes[0].id}:</h3>
          <div className={styles.sizesWrapper}>
            {item.attributes[0].items.map(att => {
              if (item.attributes[0].id == 'Size') {
                return (
                  <button className={styles.sizebtn} key={att.id}>
                    {att.value}
                  </button>
                );
              } else {
                return (
                  <div
                    className={styles.colors}
                    style={{ backgroundColor: `${att.value}` }}
                  ></div>
                );
              }
            })}
          </div>
        </div>
        <div>
          <h3 className={styles.priceh}>PRICE:</h3>
          <strong className={styles.price}> $50 </strong>
        </div>
        <div>
          <button className={styles.addtocart}>ADD TO CART</button>
        </div>
        <div>
          <p className={styles.description}> {item.description}</p>
        </div>
      </div>
    </div>
  );
};
