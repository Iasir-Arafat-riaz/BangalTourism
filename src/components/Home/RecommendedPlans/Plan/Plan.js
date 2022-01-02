import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Plan.css"

const Plan = (props) => {
    const {totalPlace,image,id,divisionName}=props.plan;
    return (
        <div>
           <Col  >
        <Card className="m-2" style={{backgroundImage: `url(${image})`,backgroundSize: 'cover',height: '200px', }} >
          {/* <Card.Img className="purchase-img" variant="top" src={image} /> */}
          <Card.Body>
            <Card.Title>
              {" "}
              <h1 className='divName'>{divisionName}</h1>
            </Card.Title>
            <Card.Text>
              <h6 ><span className='divPlaces'>Total {totalPlace} Places</span></h6>
            </Card.Text>

          </Card.Body>
          
          {/* <button className="purchaseButton" onClick={}><b>Purchase <FontAwesomeIcon icon={faTour} /></b></button> */}
        </Card>
      </Col>
        </div>
    );
};

export default Plan;