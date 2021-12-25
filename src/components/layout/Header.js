import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as route from '../../constants/routes';
import styles from './Header.module.css';
import logo from '../../img/a-logo.svg';
import cartl from '../../img/EmptyCart.svg';
import { useQuery } from '@apollo/client';
import { CURRENCIES } from '../../query';
import { MiniCart } from '../cart/MiniCart';

export const Header = () => {
  const quantity = useSelector(state => state.cart.quantity);

 

  const { loading, error, data } = useQuery(CURRENCIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.ul}>
          <NavLink
            exact
            className={styles.navlink}
            activeClassName={styles.navlinkActive}
            to={route.HOME_PATH}
          >
            All
          </NavLink>
          <NavLink
            className={styles.navlink}
            activeClassName={styles.navlinkActive}
            to={route.TECH_PATH}
          >
            Tech
          </NavLink>
          <NavLink
            className={styles.navlink}
            activeClassName={styles.navlinkActive}
            to={route.CLOTHES_PATH}
          >
            Clothes
          </NavLink>
        </div>
        <div>
          <Link to={route.CART_PATH}>
            <img width="auto" height="auto" src={logo} />
          </Link>
        </div>
        <div className={styles.actions}>
          <select>
            {data.currencies.map(curr => {
              return (
                <option key={curr.label}>
                  {curr.label} {curr.symbol}{' '}
                </option>
              );
            })}
          </select>
          <div className={styles.cartdiv}>
            <Link to={route.CART_PATH}>
              <label className={styles.cartLabel}>{quantity}</label>
              <img
                className={styles.cart}
                width="auto"
                height="auto"
                src={cartl}
              />
            </Link>

            <MiniCart />
          </div>
        </div>
      </nav>
    </header>
  );
};
