import React from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { addwalletTowallets } from '../../store/reducers/wallet.actions';
import AddWalletPopUp from './AddWalletPopUp';

function WalletDetails({ item , addwalletTowallets}) {
    const addwalletTowallet = () => { addwalletTowallets(item)}
    return (
      <div className="zl_add_currency_column col" key={item.id}>
        <div className="zl_add_currency_inner_content">
          <div className="zl_add_currency_img">
            <img src={item.image} alt="currency-img" />
          </div>
          <div className="zl_add_currency_text">
            <h3>{item.heading}</h3>
            <p>{item.peregraph}</p>
          </div>
          <AddWalletPopUp addwalletTowallet = {addwalletTowallet} />
        </div>
      </div>
    );
}


const mapDispatchToProps = dispatch => ({
     addwalletTowallets :item => dispatch(addwalletTowallets(item))
  });


export default connect(null,mapDispatchToProps)(WalletDetails)
