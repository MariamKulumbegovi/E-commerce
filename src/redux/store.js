// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartRedux';

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// export default configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
