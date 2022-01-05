import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { Card, Col } from "react-bootstrap";
import "./Review.css";

const Review = (props) => {
  const { name, description, rating, email } = props.review;
  console.log(description);
  const descriptionFixed = `${description.slice(0, 149)}......`;
  // console.log(descriptionFixed)
  return (
    <div>
      <Col data-aos="flip-left">
        <Card id="rev" className="singleReview">
          <Card.Body>
            <Card.Title>
              {" "}
              <h6 className="text-center">
                <b>
                  <FontAwesomeIcon icon={faUser} /> {name}
                </b>
              </h6>
            </Card.Title>
          
            <p className="text-center">{email}</p>
        
            <Card.Text>
              <small className="reviewComment">
                <i class="far fa-comment "></i> {descriptionFixed}
              </small>
            </Card.Text>

            {rating === 5 ? (
              <div className="icons text-center">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 5 && rating >= 4 ? (
              <div className="text-center">
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 4 && rating >= 3 ? (
              <div className="text-center">
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 3 && rating >= 2 ? (
              <div className="text-center">
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : (
              <div className="text-center">
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Review;
