import WALLETS from "./WalletTypes";

const INITIAL_STATE = {
   WalletItems:[]
}

const walletReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WALLETS.ADD_WALLET:
            return {
                ...state,
                WalletItems: [...state.WalletItems, action.payload]
            };
        default:
            return state;
      
  }

}

export default walletReducer;