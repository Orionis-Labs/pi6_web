import React from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { connect } from 'react-redux';
import { Nav } from "react-bootstrap";

function AddWallet({ item }) {
  const price = item.price;
    const amount = item.amount.filter((ite) => (item.denom === `${ite.denom}`)).map((itee) => itee.amount)
  const balance = (amount) / Math.pow(10, 6) * price;
  const userBalance = balance.toFixed(2);
    return (
      <Nav className="zl_add_currency_column col"> 
        <Nav.Item className="col">
          <Nav.Link
            eventKey="tab1"
            className="zl_add_currency_inner_content zl_add_bitcoin_currency"
          >
            <div className="zl_add_currency_icon_chart">
              <div className="zl_currency_icon">
                <img src={item.image} alt="currency-img" />
              </div>
              <Sparklines
                data={[0, 5, 0, 15, 12, 14]}
                margin={6}
                className="zl_add_currency_mini_chart"
              >
                <SparklinesLine
                  style={{
                    strokeWidth: 10,
                    stroke: "#fec74f",
                    fill: "none",
                    curve: "smooth",
                  }}
                />
                <SparklinesSpots
                  size={4}
                  style={{
                    stroke: "#fec74f",
                    strokeWidth: 3,
                    fill: "white",
                  }}
                />
              </Sparklines>
            </div>
            <div className="zl_add_currency_price">
              <div className="zl_add_currency_left_price">
                <h3>{item.heading}</h3>
                <p>{item.price}</p>
              </div>
              <div className="zl_add_currency_right_price">
                <span>
                  {amount}
                </span>
                <p>${userBalance}</p>
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
}

const mapStateToProps = ({ wallets: { WalletItems } }) => ({
  WalletItems,
});


export default connect(mapStateToProps,null)(AddWallet)
