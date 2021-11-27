import React,{useState} from 'react'
import { Modal, Button, InputGroup , FormControl } from 'react-bootstrap';
function AddWalletPopUp({addwalletTowallet}) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const [address, setAddress] = useState('')
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
            <input
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Type a message..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={addwalletTowallet}
            >
              Close
            </Button>
            <div onClick = {handleClose} >
            <Button variant="primary" onClick={addwalletTowallet}>
            ADD WALLET
            </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
}


export default AddWalletPopUp
