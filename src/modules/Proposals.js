import React from 'react';
import HeadingModule from "../components/Layout/HeadingComponent/Heading";
function Proposals() {
    const onHandleSubmit = () => {
        console.log("submitted")
    }
    return (
      <div>
        <HeadingModule name={"Proposals"} />
        <div id="chart">
          <div>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Akash</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Bandchain</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Bitcanna</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Bitsong</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Cosmos</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Crypto.org</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Injective</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Irisnet</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Juno</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Likecoin</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Osmosis</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Regen</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Secret</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Sentinel</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Stargaze</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Starname</button>
            <button className="proposal_buttons" onClick={onHandleSubmit} >Terra</button>
          </div>
        </div>
      </div>
    );
}

export default Proposals
