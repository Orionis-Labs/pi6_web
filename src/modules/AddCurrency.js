import React, { useState } from "react";
import { connect } from "react-redux";
import HeadingModule from '../components/Layout/HeadingComponent/Heading';
import { InputGroup, FormControl} from 'react-bootstrap'


import WalletDetails from "../components/Wallet/walletDetails";
import { addCurrency } from "../Data/AllWallets";

const AddCurrencyModule = () => {
  const [filterData, setFilterData] = useState(addCurrency);

    const search = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        const regex = new RegExp(event.target.value, 'i');
        console.log(regex);
        const filtered = filterData.filter((item) => {
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
                .map((item, id) => (
                <WalletDetails key={Math.random()} item={item}  />
              ))}
          </div>
        </div>
      </section>
    );
}

export default connect(null, null )(AddCurrencyModule);
