import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";
import { BiTimeFive } from "react-icons/bi";
import Loading from "../../Shared/Loding/Loading";

const TourDetails = () => {
  const { tourId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [tourDetails, setTourDetails] = useState(null);
  useEffect(async () => {
    const url = `https://glacial-shelf-30568.herokuapp.com/places/${tourId}`;
    const result = await fetch(url).then((res) => res.json());
    console.log(result);
    setTourDetails(result);
    setIsLoading(false);
  }, [tourId]);
  if (isLoading) {
    return <Loading />;
  }

  if (!tourDetails) {
    return <h1 className="text-center">There is no tour matched tour.</h1>;
  }
  const { placeName, image, description, price, review, duration, rating } =
    tourDetails;
  return (
    <div className="">
      <div className="tour_details_header position-relative">
        <img
          src={image}
          alt={placeName}
          className="img-fluid w-100 d-block"
          style={{ maxHeight: "500px" }}
        />
        <div className="overlay"></div>
        <div className="tourDetails_header">
          <h1 className="text-light text-center p-5 custom_font">
            {placeName}
          </h1>
        </div>
      </div>
      <div className="container mt-4">
        <div className="d-flex align-items-center text-muted mb-3">
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
        <div className="d-flex align-items-center mb-3">
          <BiTimeFive className="d-inline-block me-1" />
          <span className="me-2 text-muted">{duration} days</span>
        </div>
        <div className="mb-3">
          <span
            className="badge rounded-pill bg-success p-2"
            style={{ fontSize: "20px" }}
          >
            Price: ${price}
          </span>
        </div>
        <h3 className="mb-2">Description:</h3>
        <p className="custom_letterSpacing">{description}</p>
        <button className="btn btn-outline-success mb-5 px-4 fw-bold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourDetails;
