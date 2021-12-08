import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import HeadingModule from '../components/Layout/HeadingComponent/Heading';
import { db } from "./Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Card} from "react-bootstrap";
const Airdrops = () => {
    const [data, setData] = useState([]);
    const dataCollectionRef = collection(db, "airdrops");

    useEffect(() => {
        const getData = async () => {
          const Alldata = await getDocs(dataCollectionRef);
          console.log(Alldata.docs);
          setData(Alldata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
            <section className="zl_history_page">
            <HeadingModule name={'Airdrops'} />
            {data.map((airdrops) => {
                return (
                  <div
                    style={{ margin: "2rem 3rem 3rem 3rem" }}
                    key={airdrops.id}
                  >
                    <Card border="dark" style={{ width: "38rem" }}>
                      <Card.Header style={{ height: "6rem" }}>
                        <h3>{airdrops.network}</h3>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
            })
            }
                
            </section>
    );
}

export default connect(null, null)(Airdrops);
