import React from "react";
import { connect } from "react-redux";
import HeadingModule from '../components/Layout/HeadingComponent/Heading';
import { Nav } from "react-bootstrap";
import AddWallet from "../components/Wallet/AddWallet";
import { Link } from "react-router-dom";
const PortfolioModule = ({ WalletItems }) => {
  return (
    <section className="zl_portfolio_page">
      <HeadingModule name={"Portfolio"} />
      <div className="zl_add_currency_content zl_protfolio_currency_content">
        <h3 className="zl_bottom_content_heading">Wallets</h3>
        <Nav className="zl_add_currency_row row">
          {WalletItems.map((item) => (
            <AddWallet item={item} key={Math.random()} />
          ))}
          <div className="zl_add_currency_column zl_add_currency_btn_col col">
            <Link to={"/addcurrency"} className="zl_add_currency_btn_content">
              + Add Currency
            </Link>
          </div>
        </Nav>
      </div>
    </section>
  );
};

const mapStateToProps = ({ wallets: { WalletItems } }) => ({
  WalletItems,
});

export default connect(mapStateToProps, null)(PortfolioModule);