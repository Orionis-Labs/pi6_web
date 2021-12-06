import { combineReducers } from "redux";
import addWallets from './addWallets'
const reducers = combineReducers({
  wallets: addWallets,
});

export default reducers;