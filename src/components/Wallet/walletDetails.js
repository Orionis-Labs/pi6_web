import React from 'react'
import { connect } from 'react-redux';

import AddWalletPopUp from './AddWalletPopUp';

function WalletDetails({ item }) {
    return (
      <div className="zl_add_currency_column col" key={Math.random()}>
        <div className="zl_add_currency_inner_content">
          <div className="zl_add_currency_img">
            <img src={item.image} alt="currency-img" />
          </div>
          <div className="zl_add_currency_text">
            <h3>{item.heading}</h3>
            <p>{item.peregraph}</p>
          </div>
          <AddWalletPopUp  item = {item} />
        </div>
      </div>
    );
}


export default connect(null,null)(WalletDetails)
