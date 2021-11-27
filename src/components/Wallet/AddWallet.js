import React from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { Tab, Nav } from "react-bootstrap";
function AddWallet({item}) {
    return (
      <Nav className="zl_add_currency_column col">
        <Nav.Item className="col">
          <Nav.Link
            eventKey="tab1"
            className="zl_add_currency_inner_content zl_add_bitcoin_currency"
          >
            <div className="zl_add_currency_icon_chart">
              <div className="zl_currency_icon">
                <svg
                  viewBox="0 0 34 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.96 9.45191L13.9783 13.2264H19.3666C20.3236 13.2264 21.0992 12.4443 21.0944 11.4825L21.093 11.1958C21.0884 10.2338 20.3053 9.45191 19.3482 9.45191H14.6976H13.96ZM21.7786 18.9638L21.7771 18.6608C21.772 17.5879 20.8995 16.7168 19.8322 16.7168H19.3838H13.9955L14.0159 20.9079H19.8524C20.9198 20.9079 21.7838 20.0353 21.7786 18.9638ZM23.4886 14.6793C24.5609 15.6723 25.2408 17.0875 25.2484 18.6608L25.2499 18.9638C25.2645 21.9591 22.8506 24.3969 19.8692 24.3969H19.7373L19.7449 26H16.2735L16.2657 24.3969H14.8429L14.8507 26H11.3793L11.3715 24.3969H10.5611H8.83951L8.82256 20.9079H10.5442L10.5239 16.7168L10.5068 13.2264L10.4886 9.45189H8.76694L8.75 5.9616H11.282L11.2725 4H14.7439L14.7534 5.9616H16.1763L16.1667 4H19.6383L19.6478 5.97803C22.3731 6.14423 24.5513 8.41715 24.5648 11.1958L24.5661 11.4825C24.572 12.6866 24.1667 13.7932 23.4886 14.6793Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.96 9.45191L13.9783 13.2264H19.3666C20.3236 13.2264 21.0992 12.4443 21.0944 11.4825L21.093 11.1958C21.0884 10.2338 20.3053 9.45191 19.3482 9.45191H14.6976H13.96ZM21.7786 18.9638L21.7771 18.6608C21.772 17.5879 20.8995 16.7168 19.8322 16.7168H19.3838H13.9955L14.0159 20.9079H19.8524C20.9198 20.9079 21.7838 20.0353 21.7786 18.9638ZM23.4886 14.6793C24.5609 15.6723 25.2408 17.0875 25.2484 18.6608L25.2499 18.9638C25.2645 21.9591 22.8506 24.3969 19.8692 24.3969H19.7373L19.7449 26H16.2735L16.2657 24.3969H14.8429L14.8507 26H11.3793L11.3715 24.3969H10.5611H8.83951L8.82256 20.9079H10.5442L10.5239 16.7168L10.5068 13.2264L10.4886 9.45189H8.76694L8.75 5.9616H11.282L11.2725 4H14.7439L14.7534 5.9616H16.1763L16.1667 4H19.6383L19.6478 5.97803C22.3731 6.14423 24.5513 8.41715 24.5648 11.1958L24.5661 11.4825C24.572 12.6866 24.1667 13.7932 23.4886 14.6793Z"
                      fill="#7781A2"
                    />
                  </g>
                </svg>
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
                <p>1.9678</p>
              </div>
              <div className="zl_add_currency_right_price">
                <span>
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.60609 3.60609L2.69695 4.51523C2.36222 4.84996 1.81951 4.84996 1.48477 4.51523C1.15004 4.18049 1.15004 3.63778 1.48477 3.30305L2.39391 2.39391L0 0H6V6L3.60609 3.60609Z"
                      fill="#50E2C2"
                    />
                  </svg>
                  +12,5%
                </span>
                <p>$6,541.1</p>
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
}

export default AddWallet
