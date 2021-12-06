// cosmos1gx7lns4l0k73t7s63z0r7fx357gvsu0dyvmcd0;/
import Axios,{useEffect} from 'axios'
import React from 'react'
import { connect } from "react-redux";
import { akashaccount, bandaccount ,bitcanaaccount, bitsongaccount, bostromaccount, comdexaccount,cosmosaccount, cryptoaccount, emoneyaccount, injectiveaccount, irisaccount, junoaccount, kichainaccount,likecoinaccount, osmosisaccount , regenaccount, secretaccount, sentinelaccount,shentuaccount, stargazeaccount, starnameaccount, terraaccount } from '../store/reducers/wallet.actions';



function Balances({
  WalletItems,
  akashaccount,
  bandaccount,
  bitcanaaccount,
  bitsongaccount,
  bostromaccount,
  comdexaccount,
  cosmosaccount,
  cryptoaccount,
  emoneyaccount,
  injectiveaccount,
  irisaccount,
  junoaccount,
  kichainaccount,
  likecoinaccount,
  osmosisaccount,
  regenaccount,
  secretaccount,
  sentinelaccount,
  shentuaccount,
  stargazeaccount,
  starnameaccount,
  terraaccount,
}) {
  const AkashBnkAdr = WalletItems.filter((item) => item.id === 1).map(
    (ids) => ids.address
  );
  const BandBnkAdr = WalletItems.filter((item) => item.id === 2).map(
    (ids) => ids.address
  );
  const BitcanaBnkAdr = WalletItems.filter((item) => item.id === 3).map(
    (ids) => ids.address
  );
  const BitsongBnkAdr = WalletItems.filter((item) => item.id === 4).map(
    (ids) => ids.address
  );
  const BostromBnkAdr = WalletItems.filter((item) => item.id === 5).map(
    (ids) => ids.address
  );
  const ComdexBnkAdr = WalletItems.filter((item) => item.id === 6).map(
    (ids) => ids.address
  );
  const CosmosBnkAdr = WalletItems.filter((item) => item.id === 7).map(
    (ids) => ids.address
  );
  const CryptoBnkAdr = WalletItems.filter((item) => item.id === 8).map(
    (ids) => ids.address
  );
  const EmoneyBnkAdr = WalletItems.filter((item) => item.id === 9).map(
    (ids) => ids.address
  );
  const InjectiveBnkAdr = WalletItems.filter((item) => item.id === 10).map(
    (ids) => ids.address
  );
  const IrisBnkAdr = WalletItems.filter((item) => item.id === 11).map(
    (ids) => ids.address
  );
  const JunoBnkAdr = WalletItems.filter((item) => item.id === 12).map(
    (ids) => ids.address
  );
  const KichainBnkAdr = WalletItems.filter((item) => item.id === 13).map(
    (ids) => ids.address
  );
  const LikecoinBnkAdr = WalletItems.filter((item) => item.id === 14).map(
    (ids) => ids.address
  );
  const OsmosisBnkAdr = WalletItems.filter((item) => item.id === 15).map(
    (ids) => ids.address
  );
  const RegenBnkAdr = WalletItems.filter((item) => item.id === 16).map(
    (ids) => ids.address
  );
  const SecretBnkAdr = WalletItems.filter((item) => item.id === 17).map(
    (ids) => ids.address
  );
  const SentinelBnkAdr = WalletItems.filter((item) => item.id === 18).map(
    (ids) => ids.address
  );
  const ShentuBnkAdr = WalletItems.filter((item) => item.id === 19).map(
    (ids) => ids.address
  );
  const StargazeBnkAdr = WalletItems.filter((item) => item.id === 20).map(
    (ids) => ids.address
  );
  const StarnameBnkAdr = WalletItems.filter((item) => item.id === 20).map(
    (ids) => ids.address
  );
  const TerraBnkAdr = WalletItems.filter((item) => item.id === 22).map(
    (ids) => ids.address
  );

  const AkashBalaccount = () => {
    Axios.get(`http://135.181.181.119:1518/bank/balances/${AkashBnkAdr}`).then(
      (Response) => {
        akashaccount(Response.data.result);
      }
    );
  };
  const BandBalaccount = () => {
    Axios.get(`https://laozi1.bandchain.org/api/bank/balances/${BandBnkAdr}`).then(
      (Response) => {
        bandaccount(Response.data);
      }
    );
  };
  const BitcanaBalaccount = () => {
    Axios.get(`https://lcd.bitcanna.io/bank/balances/${BitcanaBnkAdr}`).then(
      (Response) => {
        bitcanaaccount(Response.data);
      }
    );
  };
  const BitsongBalaccount = () => {
    Axios.get(`https://lcd-bitsong.itastakers.com/bank/balances/${BitsongBnkAdr}`).then(
      (Response) => {
        bitsongaccount(Response.data);
      }
    );
  };
  const BostromBalaccount = () => {
    Axios.get(`https://lcd.bostrom.cybernode.ai/${BostromBnkAdr}`).then(
      (Response) => {
        bostromaccount(Response.data);
      }
    );
  };
  const ComdexBalaccount = () => {
    Axios.get(`https://api.comdex.audit.one/rest/bank/balances/${ComdexBnkAdr}`).then(
      (Response) => {
        comdexaccount(Response.data);
      }
    );
  };
  const CosmosBalaccount = () => {
    Axios.get(
      `https://api.cosmos.network/cosmos/bank/balances/${CosmosBnkAdr}`
    ).then((Response) => {
      cosmosaccount(Response.data);
    });
  };
  const CryptoBalaccount = () => {
    Axios.get(`https://lcd-crypto-org.keplr.app/bank/balances/${CryptoBnkAdr}`).then(
      (Response) => {
        cryptoaccount(Response.data);
      }
    );
  };
  const EmoneyBalaccount = () => {
    Axios.get(`https://lcd-emoney.keplr.app/bank/balances/${EmoneyBnkAdr}`).then(
      (Response) => {
        emoneyaccount(Response.data);
      }
    );
  };
  const InjectiveBalaccount = () => {
    Axios.get(`http://135.181.181.119:1518/bank/balances/${InjectiveBnkAdr}`).then(
      (Response) => {
        injectiveaccount(Response.data);
      }
    );
  };
  const IrisBalaccount = () => {
    Axios.get(`https://lcd-iris.keplr.app/bank/balances/${IrisBnkAdr}`).then(
      (Response) => {
        irisaccount(Response.data);
      }
    );
  };
  const JunoBalaccount = () => {
    Axios.get(`https://lcd-juno.itastakers.com/bank/balances/${JunoBnkAdr}`).then(
      (Response) => {
        junoaccount(Response.data);
      }
    );
  };
  const KichainBalaccount = () => {
    Axios.get(`https://api-mainnet.blockchain.ki/bank/balances/${KichainBnkAdr}`).then(
      (Response) => {
        kichainaccount(Response.data);
      }
    );
  };
  const LikecoinBalaccount = () => {
    Axios.get(`https://mainnet-node.like.co/bank/balances/${LikecoinBnkAdr}`).then(
      (Response) => {
        likecoinaccount(Response.data);
      }
    );
  };
  const OsmosisBalaccount = () => {
    Axios.get(`https://lcd-osmosis.keplr.app/bank/balances/${OsmosisBnkAdr}`).then(
      (Response) => {
        osmosisaccount(Response.data);
      }
    );
  };
  const RegenBalaccount = () => {
    Axios.get(`http://public-rpc.regen.vitwit.com:1317/bank/balances/${RegenBnkAdr}`).then(
      (Response) => {
        regenaccount(Response.data);
      }
    );
  };
  const SecretBalaccount = () => {
    Axios.get(`https://lcd-secret.scrtlabs.com/bank/balances/${SecretBnkAdr}`).then(
      (Response) => {
        secretaccount(Response.data);
      }
    );
  };
  const SentineBalaccount = () => {
    Axios.get(`https://lcd-sentinel.keplr.app/bank/balances/${SentinelBnkAdr}`).then(
      (Response) => {
        sentinelaccount(Response.data);
      }
    );
  };
  const ShentuBalaccount = () => {
    Axios.get(`https://azuredragon.noopsbycertik.com/bank/balances/${ShentuBnkAdr}`).then(
      (Response) => {
        shentuaccount(Response.data);
      }
    );
  };
  const StargazeBalaccount = () => {
    Axios.get(`https://api.stargaze.ezstaking.io/bank/balances/${StargazeBnkAdr}`).then(
      (Response) => {
        stargazeaccount(Response.data);
      }
    );
  };
  const StarnameBalaccount = () => {
    Axios.get(`https://lcd-iov.keplr.app/bank/balances/${StarnameBnkAdr}`).then(
      (Response) => {
        starnameaccount(Response.data);
      }
    );
  };
  const TerraBalaccount = () => {
    Axios.get(`http://64.227.72.101:1317/bank/balances/${TerraBnkAdr}`).then(
      (Response) => {
        terraaccount(Response.data);
      }
    );
  };
  AkashBnkAdr !== 0 ? AkashBalaccount() : console.log("Address not found");
  BandBnkAdr != 0 ? BandBalaccount() : console.log("Address not found");
  BitcanaBnkAdr != 0 ? BitcanaBalaccount() : console.log("Address not found");
  BitsongBnkAdr != 0 ? BitsongBalaccount() : console.log("Address not found");
  BostromBnkAdr != 0 ? BostromBalaccount() : console.log("Address not found");
  ComdexBnkAdr != 0 ? ComdexBalaccount() : console.log("Address not found");
  CosmosBnkAdr != 0 ? CosmosBalaccount() : console.log("Address not found");
  CryptoBnkAdr != 0 ? CryptoBalaccount() : console.log("Address not found");
  EmoneyBnkAdr != 0 ? EmoneyBalaccount() : console.log("Address not found");
  InjectiveBnkAdr != 0 ? InjectiveBalaccount() : console.log("Address not found");
  IrisBnkAdr != 0 ? IrisBalaccount() : console.log("Address not found");
  JunoBnkAdr != 0 ? JunoBalaccount() : console.log("Address not found");
  KichainBnkAdr != 0 ? KichainBalaccount() : console.log("Address not found");
  LikecoinBnkAdr != 0 ? LikecoinBalaccount() : console.log("Address not found");
  OsmosisBnkAdr != 0 ? OsmosisBalaccount() : console.log("Address not found");
  RegenBnkAdr != 0 ? RegenBalaccount() : console.log("Address not found");
  SecretBnkAdr != 0 ? SecretBalaccount() : console.log("Address not found");
  SentinelBnkAdr != 0 ? SentineBalaccount() : console.log("Address not found");
  ShentuBnkAdr != 0 ? ShentuBalaccount() : console.log("Address not found");
  StargazeBnkAdr != 0 ? StargazeBalaccount() : console.log("Address not found");
  StarnameBnkAdr != 0 ? StarnameBalaccount() : console.log("Address not found");
  TerraBnkAdr != 0 ? TerraBalaccount() : console.log("Address not found");

  return <div></div>
}
const mapStateToProps = ({ wallets: { WalletItems } }) => ({
  WalletItems,
});

const mapdispatchtoprop = dispatch => ({
  akashaccount: (item) => dispatch(akashaccount(item)),
  bandaccount: (item) => dispatch(bandaccount(item)),
  bitcanaaccount: (item) => dispatch(bitcanaaccount(item)),
  bitsongaccount: (item) => dispatch(bitsongaccount(item)),
  bostromaccount: (item) => dispatch(bostromaccount(item)),
  comdexaccount: (item) => dispatch(comdexaccount(item)),
  cosmosaccount: (item) => dispatch(cosmosaccount(item)),
  cryptoaccount: (item) => dispatch(cryptoaccount(item)),
  emoneyaccount: (item) => dispatch(emoneyaccount(item)),
  injectiveaccount: (item) => dispatch(injectiveaccount(item)),
  irisaccount: (item) => dispatch(irisaccount(item)),
  junoaccount: (item) => dispatch(junoaccount(item)),
  kichainaccount: (item) => dispatch(kichainaccount(item)),
  likecoinaccount: (item) => dispatch(likecoinaccount(item)),
  osmosisaccount: (item) => dispatch(osmosisaccount(item)),
  regenaccount: (item) => dispatch(regenaccount(item)),
  secretaccount: (item) => dispatch(secretaccount(item)),
  sentinelaccount: (item) => dispatch(sentinelaccount(item)),
  shentuaccount: (item) => dispatch(shentuaccount(item)),
  stargazeaccount: (item) => dispatch(stargazeaccount(item)),
  starnameaccount: (item) => dispatch(starnameaccount(item)),
  terraaccount: (item) => dispatch(terraaccount(item)),
})
export default connect(mapStateToProps,mapdispatchtoprop)(Balances);
