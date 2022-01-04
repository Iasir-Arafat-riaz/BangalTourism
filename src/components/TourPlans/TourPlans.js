import React, { useState } from "react";
import { Slider } from "@mui/material";
import Loading from "../Shared/Loding/Loading";
import TourListCard from "../Tours/TourLists/TourListCard";

const TourPlans = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allTours, setAllTours] = useState([]);

  useEffect(() => {
    const result = fetch();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (allTours.length < 1) {
    return (
      <div className="container">
        <h1>There is no match tours</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <div
        className="tourLists_header text-center p-5"
        style={{ height: "260px" }}
      >
        <h1 className="text-light custom_font">
          Choose your desired destination
        </h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-3">
          <h5 className="my-3">Filter Your Result</h5>
          <div className="price_filter">
            <Slider
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        <div className="col-12 col-md-9">
          {allTours.map((tour) => (
            <TourListCard key={tour._id} {...tour} division="dhaka" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPlans;
