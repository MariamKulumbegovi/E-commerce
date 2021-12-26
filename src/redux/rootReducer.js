import { combineReducers } from 'redux';
import ShopReducer from './shopping/shopping-reducer';

const rootReducer = combineReducers({
  shop: ShopReducer,
});

export default rootReducer;
