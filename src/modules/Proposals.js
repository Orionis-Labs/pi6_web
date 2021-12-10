import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import HeadingModule from "../components/Layout/HeadingComponent/Heading";
import { Card, ListGroup } from 'react-bootstrap';
function Proposals() {
  const [Proposal, setProposal] = useState("Loading...");
  const [Type, setType] = useState("Loading...");
  const [Description, setDescription] = useState("Loading...")
  const ProposalApi = () => {
    Axios.get("https://api.cosmos.network/cosmos/gov/v1beta1/proposals?proposal_status=2").then((Response) => {
      setProposal(Response.data.proposals[0]);
      setType(Response.data.proposals.map((item) => item.content.title));
      setDescription(Response.data.proposals.map((item)=> item.content.description))
    }).catch(e => console.log(e))
  }
  useEffect(() => {
    ProposalApi()
  }, [])
    return (
      <div>
        <HeadingModule name={"Proposals"} />
        <Card style={{ width: "98%", padding: "2rem" }}>
          <Card.Text style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
            Proposal Id : #{Proposal.proposal_id}
          </Card.Text>
          <Card.Body>
            <Card.Title>{Type}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>{Description}</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Proposals
