import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Plan.css"

const Plan = (props) => {
    const {totalPlace,image,id,divisionName}=props.plan;
    const handleRecommendedPlan=()=>{
        console.log("go to sinfle component");
    }
    return (
        <div>
           <Col  >
        <Card onClick={handleRecommendedPlan} className="m-2 singleCard" style={{backgroundImage: `url(${image})`,backgroundSize: 'cover', height:'250px',}} >
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