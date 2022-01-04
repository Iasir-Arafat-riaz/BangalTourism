import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BiTimeFive } from "react-icons/bi";

const TourListCard = ({
  placeName,
  placeId,
  image,
  division,
  _id,
  price,
  duration,
  rating,
  review,
}) => {
  console.log(placeName, placeId, image, division, _id, rating, duration);
  return (
    <div className="col-6 mb-3">
      <div className="card">
        <div className="position-relative">
          <img
            src={image}
            className="card-img-top"
            alt={placeName}
            style={{
              height: "250px",
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
            }}
          />
          <div className="colorOverlay"></div>
          <span className="badge rounded-pill custom_badge">${price}</span>
        </div>
        <div className="text-start ps-2 mt-2">
          <div>
            <h2 className="mb-0 custom_font-2 custom_font">{placeName}</h2>
            <p className="text-muted fw-bold custom_font custom_font_para">
              {division}
            </p>
          </div>
          <div className="tour_info mb-2">
            <div className="row">
              <div className="col-6 d-flex align-items-center text-muted">
                <ReactStars
                  count={5}
                  size={20}
                  value={parseFloat(rating)}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                  edit={false}
                />
                ({review} Reviews)
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <BiTimeFive className="d-inline-block me-1" />
                <span className="me-2 text-muted">{duration} days</span>
              </div>
            </div>
          </div>
        </div>
        <Link to={`tour-details/${_id}`} className="btn btn-outline-success">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default TourListCard;
