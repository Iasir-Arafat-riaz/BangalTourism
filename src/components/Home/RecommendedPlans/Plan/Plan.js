import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Plan.css";

const Plan = (props) => {
  const { totalPlace, image, id, divisionName, _id } = props.plan;
  const navigate = useNavigate();
  const handleRecommendedPlan = () => {
    navigate(`/${divisionName}/${_id}`);
  };
  // `/DivisionTourPlan/${divisionName}/${_id}`
  return (
    <div>
      <Col>
        <Card
          onClick={handleRecommendedPlan}
          className="m-2 singleCard"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            height: "250px",
          }}
        >
          {/* <Card.Img className="purchase-img" variant="top" src={image} /> */}
          <Card.Body>
            <Card.Title>
              <h1 className="divName ">{divisionName}</h1>
            </Card.Title>
            <Card.Text>
              <span className="divPlaces text-center fw-bold">
                Total {totalPlace} Places
              </span>
            </Card.Text>
          </Card.Body>

          {/* <button className="purchaseButton" onClick={}><b>Purchase <FontAwesomeIcon icon={faTour} /></b></button> */}
        </Card>
      </Col>
    </div>
  );
};

export default Plan;
