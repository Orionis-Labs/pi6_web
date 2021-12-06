import React from "react";
import { connect } from "react-redux";
import HeadingModule from '../components/Layout/HeadingComponent/Heading';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import WalletDetails from '../components/Layout/WalletComponent/main';
import AddWallet from "../components/Wallet/AddWallet";

const PortfolioModule = ({ WalletItems }) => {
  return (
    <section className="zl_wallets_page">
      <HeadingModule name={"Wallets"} />
      <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
        <div className="zl_add_currency_content">
          <h3 className="zl_bottom_content_heading">crypto currencies</h3>
          <Nav className="zl_add_currency_row row">
            {WalletItems.map((item) => (
              <AddWallet item={item} />
            ))}
            <div className="zl_add_currency_column zl_add_currency_btn_col col">
              <Link to={"/addcurrency"} className="zl_add_currency_btn_content">
                + Add Currency
              </Link>
            </div>
          </Nav>
        </div>
        <Tab.Content>
          {WalletItems.map((item) => (
            <Tab.Pane eventKey={`tab${item.id}`} key={Math.random()}>
              <WalletDetails {...item} />
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </section>
  );
};

const mapStateToProps = ({ wallets: { WalletItems } }) => ({
  WalletItems,
});

export default connect(mapStateToProps, null)(PortfolioModule);
