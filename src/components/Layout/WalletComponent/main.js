import React from "react";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
// import { Button, FormControl } from 'react-bootstrap'
// import QRCode from 'qrcode.react';
// import { Link } from 'react-router-dom';
// import AllTransactionList from "../TransactionList/AllTransactionList";

const MainComponent = (props) => {

    
    const { name} = props;
    

    return (
            <div className="zl_chart_component">
                <div className="zl_all_page_comman_content">
                    <div className="zl_chart_box_heading_date">
                        <h2 className="zl_chart_box_heading">{name}</h2>
                </div>
            </div>
            </div>
    );
}

export default connect(null, null)(MainComponent);

