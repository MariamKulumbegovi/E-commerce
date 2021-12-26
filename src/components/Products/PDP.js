import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import { addToCart, adjustQty } from '../../redux/shopping/shopping-actions';
import styles from './PDP.module.css';

const PDP = ({ addToCart,adjustQty }) => {
  const location = useLocation();
  const id = location.pathname.split('/')[1];

  const PRODUCT = gql`
  query GetProduct {
    product(id: "${id}") {
      id
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

  const [color, setColor] = useState();
  const [att, setAtt] = useState('');

  const { loading, error, data } = useQuery(PRODUCT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const item = data.product;
  console.log(color, att);
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
          <h3 className={styles.outofstock}>
            {item.inStock ? '' : 'This item is out of stock'}
          </h3>
        </div>
        <div>
          <div className={styles.sizesWrapper}>
            {item.attributes.map(att => {
              if (att.id == 'Color') {
                return (
                  <div key={att.id} className={styles.attwrapper}>
                    <h3>{att.id} :</h3>
                    <div className={styles.cwrapper}>
                      {att.items.map(one => {
                        return (
                          <div
                            color={one.displayValue}
                            key={one.displayValue}
                            className={styles.colors}
                            onClick={() => setColor(one.displayValue)}
                            style={{ backgroundColor: `${one.value}` }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={att.id}>
                    <h3>{att.id}:</h3>
                    <div>
                      {att.items.map(one => {
                        return (
                          <button
                            onClick={() => setAtt(one.value)}
                            value={one.value}
                            name={att.id}
                            className={styles.sizebtn}
                            key={one.value}
                          >
                            {one.value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
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
          <button
            onClick={() => addToCart(item.id,color)}
            className={item.inStock ? styles.addtocart : styles.disabledbtn}
            disabled={item.inStock ? false : true}
          >
            ADD TO CART
          </button>
        </div>
        <div>
          <p className={styles.description}> {item.description}</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id,color) => dispatch(addToCart(id , color)),
  };
};

export default connect(null, mapDispatchToProps)(PDP);
