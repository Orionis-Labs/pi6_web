import React      from "react";
import { connect } from "react-redux";
import HeadingModule from '../components/Layout/HeadingComponent/Heading';
import "react-datepicker/dist/react-datepicker.css";
import ReactApexChart from "react-apexcharts";
import { Link } from 'react-router-dom';
import { Tab, Nav } from "react-bootstrap";
import AddWallet from "../components/Wallet/AddWallet";
const DashboardModule = ({ WalletItems }) => {
  const graph = [];
  const label = [];
  for (const ob of WalletItems) {
    label.push(ob.heading)
  }
  
  for (const obj of WalletItems) {
    graph.push(((obj.amount.filter((ite) => (obj.denom === `${ite.denom}`)).map((it) => (it.amount) / 1000000))) * obj.price)
  }

  let balance = 0;

  for (let i = 0; i < graph.length; i++) {
    balance += graph[i];
  }
  
  const option = {
    series: graph,
    options: {
      chart: {
        type: "donut",
      },
      labels: label,
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
    return (
      <section className="zl_dashboard_page">
        <HeadingModule name={"Dashboard"} />
        <div className="zl_all_page_comman_content">
          <div className="zl_chart_box_heading_date">
            <h2 className="zl_chart_box_heading">Revenue</h2>
          </div>
          {WalletItems.length > 0 ? (
            <div id="chart">
              <ReactApexChart
                options={option.options}
                series={option.series}
                type="donut"
                height="300"
              />
            </div>
          ) : (
            <div className="no_wallets_chart">
              <h1>No Wallets!</h1>
            </div>
          )}

          <div className="zl_all_page_comman_total_price">
            <p className="zl_all_page_total_price_heading">Total Revenue</p>
            <h2 className="zl_all_page_total_price_text">{balance}</h2>
            {/* <span className="zl_all_page_total_price_up_text">
              <svg width="8" height="8"viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M4 6.66668V1.33334"stroke="#50E2C2"  strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" />
                <path  d="M2 3.33334L4 1.33334L6 3.33334"   stroke="#50E2C2"     strokeWidth="2"   strokeLinecap="round"   strokeLinejoin="round" />
              </svg>
              7,00%
            </span>*/}
          </div>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
          <div className="zl_add_currency_content">
            <h3 className="zl_bottom_content_heading">crypto currencies</h3>
            <Nav className="zl_add_currency_row row">
              {WalletItems.map((item) => (
                <AddWallet item={item} key={Math.random()} />
              ))}
              <div className="zl_add_currency_column zl_add_currency_btn_col col">
                <Link
                  to={"/addcurrency"}
                  className="zl_add_currency_btn_content"
                >
                  + Add Currency
                </Link>
              </div>
            </Nav>
          </div>
        </Tab.Container>
      </section>
    );
}
const mapStateToProps = ({
  wallets: {
    WalletItems,
  },
}) => ({
  WalletItems,
});


export default connect(mapStateToProps, null)(DashboardModule);