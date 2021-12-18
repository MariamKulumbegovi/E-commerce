import { Route, Switch } from 'react-router-dom';
import * as route from './constants/routes';
import { ClothesPage } from './pages/clothes-page';
import { HomePage } from './pages/home-page';
import { TechPage } from './pages/tech-page';

export const Routes = () => {
  return (
    <Switch>
      <Route path={route.HOME_PATH} component={HomePage} exact />
      <Route path={route.TECH_PATH} component={TechPage} />
      <Route path={route.CLOTHES_PATH} component={ClothesPage} />
    </Switch>
  );
};
