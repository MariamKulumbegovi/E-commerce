import { Link, NavLink } from 'react-router-dom';
import * as route from '../../constants/routes';
import styles from './Header.module.css';
import logo from '../../img/a-logo.svg';
import cart from '../../img/EmptyCart.svg';
export const Header = () => {
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
            exact
            className={styles.navlink}
            activeClassName={styles.navlinkActive}
            to={route.TECH_PATH}
          >
            Tech
          </NavLink>
          <NavLink
            exact
            className={styles.navlink}
            activeClassName={styles.navlinkActive}
            to={route.CLOTHES_PATH}
          >
            Clothes
          </NavLink>
        </div>
        <div>
          <Link to={route.HOME_PATH}>
            <img width="auto" height="auto" src={logo} />
          </Link>
        </div>
        <div className={styles.actions}>
          <select>
            <option>$ USD</option>
            <option>€ EUR</option>
            <option>¥ JPY</option>
          </select>
          <img className={styles.cart} width="auto" height="auto" src={cart} />
        </div>
      </nav>
    </header>
  
  );
};
