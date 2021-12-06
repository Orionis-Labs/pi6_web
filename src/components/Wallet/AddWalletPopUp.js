import React,{useState} from 'react'
import { Modal, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import Axios from 'axios';
import { addwalletTowallets } from '../../store/reducers/wallet.actions';
function AddWalletPopUp({ addwalletTowallets, item }) {
  const newitem = {
    id: `${item.id}`,
    image: `${item.image}`,
    heading: `${item.heading}` ,
    peregraph: `${item.peregraph}`,
    address: 0,
    amount: "",
    api: `${item.api}`,
    coin_id: `${item.coin_id}`,
    price: "",
    denom: `${item.denom}`,
  };
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false);
  };
  const handleSubmit = () => {
    setShow(false);
    Axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${item.coin_id}&vs_currencies=usd`
    ).then((Response) => {
      newitem.price = Response.data[item.coin_id].usd;
    });
    Axios.get(`${item.api}/bank/balances/${newitem.address}`).then(
      (Response) => {
        newitem.amount = Response.data.result;
      }
    );
    addwalletTowallets(newitem);

    
  };
    const handleShow = () => setShow(true);
    return (
      <div>
        <Button variant="outline-secondary" onClick={handleShow}>
          +
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Wallet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              onChange={(e) => (newitem.address = e.target.value)}
              placeholder="Type your wallet address..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
              <Button variant = "outline-success" onClick={handleSubmit}>
                ADD WALLET
              </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
  addwalletTowallets: (item) => dispatch(addwalletTowallets(item)),
});

// const mapDispatchToProps = (dispatch) => ({
//   address: (address) => dispatch(addWalletsAddress(address)),
// });


export default connect(null ,mapDispatchToProps) (AddWalletPopUp)
