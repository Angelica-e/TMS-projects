import { combineReducers } from 'redux';

import filters from './filters';
import devices from './devices';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  devices,
  cart,
});

export default rootReducer;