import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
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
      <div className="container"></div>
    </div>
  );
};

export default TourDetails;
