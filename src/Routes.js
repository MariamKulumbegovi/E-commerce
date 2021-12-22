import { Route, Switch } from 'react-router-dom';
import * as route from './constants/routes';
import { ClothesPage } from './pages/clothes-page';
import { HomePage } from './pages/home-page';
import { PDP_Page } from './pages/PDP-page/PDP_Page';
import { TechPage } from './pages/tech-page';

export const Routes = () => {
  return (
    <Switch>
      <Route path={route.HOME_PATH} component={HomePage} exact />
      <Route path={route.TECH_PATH} component={TechPage} />
      <Route path={route.CLOTHES_PATH} component={ClothesPage} />
      <Route path={route.PDP_PATH} component={PDP_Page} />
    </Switch>
  );
};
