import React from "react";
import { Link } from "react-router-dom";

const TourListCard = ({ placeName, placeId, image, division }) => {
  console.log(placeName, placeId, image, division);
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
        </div>
        <div className="text-start ps-2 mt-2">
          <h2 className="mb-0 custom_font-2 custom_font">{placeName}</h2>
          <p className="text-muted fw-bold custom_font custom_font_para">
            {division}
          </p>
        </div>
        <Link to={`tour-details/${placeId}`} className="btn btn-outline-dark">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default TourListCard;
