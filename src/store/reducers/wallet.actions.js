import WALLETS from "./WalletTypes";

export const addwalletTowallets = item => ({
    type: WALLETS.ADD_WALLET,
    payload: item
});