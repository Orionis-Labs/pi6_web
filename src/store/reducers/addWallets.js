import WALLETS from "./WalletTypes";

const INITIAL_STATE = {
    WalletItems: [],
  
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















    //       AkashBal: [],
    // BandBal: [],
    // BitcanaBal: [],
    // BitsongBal: [],
    // BostromBal: [],
    // ComdexBal: [],
    // CosmosBal: [],
    // CryptoBal: [],
    // EmoneyBal: [],
    // InjectiveBal: [],
    // IrisBal: [],
    // JunoBal: [],
    // KichainBal: [],
    // LikecoinBal: [],
    // OsmosisBal: [],
    // RegenBal: [],
    // SecretBal: [],
    // SentinelBal: [],
    // ShentuBal: [],
    // StargazeBal: [],
    // StarnameBal: [],
    // TerraBal: [],


        // case WALLETS.AKASH_ACCOUNT:
        //     return {
        //         ...state,
        //         AkashBal: [...state.AkashBal , action.payload]
        //     }
        // case WALLETS.BAND_ACCOUNT:
        //     return {
        //         ...state,
        //         BandBal: [...state.BandBal , action.payload]
        //     }
        // case WALLETS.BITCANA_ACCOUNT:
        //     return {
        //         ...state,
        //         BitcanaBal: [...state.BitcanaBal , action.payload]
        //     }
        // case WALLETS.BITSONG_ACCOUNT:
        //     return {
        //         ...state,
        //         BitsongBal: [...state.BitsongBal , action.payload]
        //     }
        // case WALLETS.BOSTROM_ACCOUNT:
        //     return {
        //         ...state,
        //         BostromBal: [...state.BostromBal , action.payload]
        //     }
        // case WALLETS.COMDEX_ACCOUNT:
        //     return {
        //         ...state,
        //         ComdexBal: [...state.ComdexBal , action.payload]
        //     }
        // case WALLETS.COSMOS_ACCOUNT:
        //     return {
        //         ...state,
        //         CosmosBal: [...state.CosmosBal , action.payload]
        //     }
        // case WALLETS.CRYPTO_ACCOUNT:
        //     return {
        //         ...state,
        //         CryptoBal: [...state.CryptoBal , action.payload]
        //     }
        // case WALLETS.EMONEY_ACCOUNT:
        //     return {
        //         ...state,
        //         EmoneyBal: [...state.EmoneyBal , action.payload]
        //     }
        // case WALLETS.INJECTIVE_ACCOUNT:
        //     return {
        //         ...state,
        //         InjectiveBal: [...state.InjectiveBal , action.payload]
        //     }
        // case WALLETS.IRIS_ACCOUNT:
        //     return {
        //         ...state,
        //         IrisBal: [...state.IrisBal , action.payload]
        //     }
        // case WALLETS.JUNO_ACCOUNT:
        //     return {
        //         ...state,
        //         JunoBal: [...state.JunoBal , action.payload]
        //     }
        // case WALLETS.KICHAIN_ACCOUNT:
        //     return {
        //         ...state,
        //         KichainBal: [...state.KichainBal , action.payload]
        //     }
        // case WALLETS.LIKECOIN_ACCOUNT:
        //     return {
        //         ...state,
        //         LikecoinBal: [...state.LikecoinBal , action.payload]
        //     }
        // case WALLETS.OSMOSIS_ACCOUNT:
        //     return {
        //         ...state,
        //         OsmosisBal: [...state.OsmosisBal , action.payload]
        //     }
        // case WALLETS.REGEN_ACCOUNT:
        //     return {
        //         ...state,
        //         RegenBal: [...state.RegenBal , action.payload]
        //     }
        // case WALLETS.SECRET_ACCOUNT:
        //     return {
        //         ...state,
        //         SecretBal: [...state.SecretBal , action.payload]
        //     }
        // case WALLETS.SENTINEL_ACCOUNT:
        //     return {
        //         ...state,
        //         SentinelBal: [...state.SentinelBal , action.payload]
        //     }
        // case WALLETS.SHENTU_ACCOUNT:
        //     return {
        //         ...state,
        //         ShentuBal: [...state.ShentuBal , action.payload]
        //     }
        // case WALLETS.STARGAZE_ACCOUNT:
        //     return {
        //         ...state,
        //         StargazeBal: [...state.StargazeBal , action.payload]
        //     }
        // case WALLETS.STARNAME_ACCOUNT:
        //     return {
        //         ...state,
        //         StarnameBal: [...state.StarnameBal , action.payload]
        //     }
        // case WALLETS.TERRA_ACCOUNT:
        //     return {
        //         ...state,
        //         TerraBal: [...state.TerraBal , action.payload]
        //     }