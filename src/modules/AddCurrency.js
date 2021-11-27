import React, { useState } from "react";
import { connect } from "react-redux";
import HeadingModule from '../components/Layout/HeadingComponent/Heading';
import { InputGroup, FormControl} from 'react-bootstrap' // Form,
// import { arrayPush } from "redux-form";
// import { Route } from "react-router";


import WalletDetails from "../components/Wallet/walletDetails";

// import { mapStateToProps } from './mappers';
const addCurrency = [
  {
    id: 1,
    image: "assets/image/algo.svg",
    heading: "AKASH",
    peregraph: "Algorand",
    checkboxId: "checkbox4",
  },
  {
    id: 2,
    image: "assets/image/bitcoinlight.svg",
    heading: "BANDCHAIN",
    peregraph: "Bitcoin Cash",
    checkboxId: "checkbox5",
  },
  {
    id: 3,
    image: "assets/image/dash.svg",
    heading: "BITCANNA",
    peregraph: "Dash Parr",
    checkboxId: "checkbox6",
    isChecked: "true",
  },
  {
    id: 4,
    image: "assets/image/algo.svg",
    heading: "BITSONG",
    peregraph: "Algorand",
    checkboxId: "checkbox4",
  },
  {
    id: 5,
    image: "assets/image/bitcoinlight.svg",
    heading: "BOSTROM",
    peregraph: "Bitcoin Cash",
    checkboxId: "checkbox5",
  },
  {
    id: 6,
    image: "assets/image/dash.svg",
    heading: "COMDEX",
    peregraph: "Dash Parr",
    checkboxId: "checkbox6",
    isChecked: "true",
  },
  {
    id: 7,
    image: "assets/image/lumen.svg",
    heading: "COSMOSHUB",
    peregraph: "Lumen Pierce",
    checkboxId: "checkbox7",
  },

  {
    id: 8,
    image: "assets/image/tezos.svg",
    heading: "EMONEY",
    peregraph: "Tezos",
    checkboxId: "checkbox8",
  },
  {
    id: 9,
    image: "assets/image/zcash.svg",
    heading: "IMPACTHUB",
    peregraph: "Lumen",
    checkboxId: "checkbox9",
  },
  {
    id: 10,
    image: "assets/image/eos.svg",
    heading: "IRISNET",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 11,
    image: "assets/image/eos.svg",
    heading: "JUNO",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 12,
    image: "assets/image/eos.svg",
    heading: "KAVA",
    checkboxId: "checkbox10",
    peregraph: "Eos",
  },
  {
    id: 13,
    image: "assets/image/eos.svg",
    heading: "KICHAIN",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 14,
    image: "assets/image/eos.svg",
    heading: "LIKECOIN",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 15,
    image: "assets/image/eos.svg",
    heading: "OSMOSIS",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 16,
    image: "assets/image/eos.svg",
    heading: "PANASEA",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 17,
    image: "assets/image/eos.svg",
    heading: "PROVENANCE",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 18,
    image: "assets/image/eos.svg",
    heading: "REGEN",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 19,
    image: "assets/image/eos.svg",
    heading: "SECRETNETWORK",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 20,
    image: "assets/image/eos.svg",
    heading: "SENTINEL",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 21,
    image: "assets/image/eos.svg",
    heading: "SHENTU",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 22,
    image: "assets/image/eos.svg",
    heading: "SIFCHAIN",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 23,
    image: "assets/image/eos.svg",
    heading: "STARGAZE",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 24,
    image: "assets/image/eos.svg",
    heading: "STARNAME",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 25,
    image: "assets/image/eos.svg",
    heading: "TERRA",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
  {
    id: 26,
    image: "assets/image/eos.svg",
    heading: "CRYPTOORYCHAIN",
    peregraph: "Eos",
    checkboxId: "checkbox10",
  },
];
const AddCurrencyModule = () => {
  const [filterData, setFilterData] = useState(addCurrency);
  const [wallets, setwallets] = useState({cryptoWallets:[]})

    const search = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        const regex = new RegExp(event.target.value, 'i');
        console.log(regex);
        const filtered = addCurrency.filter((item , i) => {
          return ((item['peregraph'].search(regex) && item['heading'].search(regex)) > -1);
        });
        setFilterData(filtered);
    }

    return (
      <section className="zl_add_currency_page">
        <HeadingModule name={"Add Currency"} />
        <div className="zl_all_page_comman_content">
          <InputGroup className="zl_add_currency_search">
            <InputGroup.Text className="zl_add_currency_search_icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.0972"
                  cy="10.0968"
                  r="8.58064"
                  stroke="#828CAE"
                  strokeWidth="2"
                />
                <path
                  d="M15.9678 16.8709L20.2968 21.2"
                  stroke="#828CAE"
                  strokeWidth="2"
                />
              </svg>
            </InputGroup.Text>
            <FormControl placeholder="Search" type="text" onChange={search} />
          </InputGroup>
          <div className="zl_add_currency_row row">
            {
              addCurrency
              .map((item , id) => (
                <WalletDetails key={id} item={item} />
              ))}
          </div>
        </div>
      </section>
    );
}

export default connect(null, null )(AddCurrencyModule);
