import { Route, Switch } from 'react-router-dom';
import { Cart } from './components/cart/Cart';
import * as route from './constants/routes';
import { HomePage, ClothesPage, TechPage } from './pages/Categories';
import { PDP_Page } from './pages/PDP-page/PDP_Page';
import { Redirect } from 'react-router';
import { Test } from './components/cart/Test';
export const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/" >
      <Redirect to="/all" component={HomePage} />
    </Route> */}
      {/* <Route path={route.CATEGORY_PATH} exact component={Test} /> */}
      <Route path={route.HOME_PATH} component={HomePage} exact />
      <Route path={route.CLOTHES_PATH} component={ClothesPage} />
      <Route path={route.CART_PATH} component={Cart} />
      <Route path={route.TECH_PATH} component={TechPage} />
      <Route path={route.PDP_PATH} component={PDP_Page} exact />
    </Switch>
  );
};
