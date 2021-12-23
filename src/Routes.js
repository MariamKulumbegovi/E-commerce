import { Route, Switch } from 'react-router-dom';
import { Cart } from './components/cart/Cart';
import * as route from './constants/routes';
import { HomePage, ClothesPage, TechPage } from './pages/Categories';
import { PDP_Page } from './pages/PDP-page/PDP_Page';

export const Routes = () => {
  return (
    <Switch>
      <Route path={route.HOME_PATH} component={HomePage} exact />
      <Route path={route.CLOTHES_PATH} component={ClothesPage} />
      <Route path={route.TECH_PATH} component={TechPage} />
      <Route path={route.CART_PATH} component={Cart} />
      <Route path={route.PDP_PATH} component={PDP_Page} exact />
    </Switch>
  );
};
