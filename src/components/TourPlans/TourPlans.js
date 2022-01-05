import React, { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import Loading from "../Shared/Loding/Loading";
import TourListCard from "../Tours/TourLists/TourListCard";

const TourPlans = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allTours, setAllTours] = useState([]);
  const [tourMainArray, setToursMainArray] = useState([]);
  const [filterMaxPrice, setMaxPrice] = useState(2000);
  const [filterValue, setFilterValue] = useState(0);

  const handleChange = (e) => {
    setFilterValue(parseFloat(e.target.value));
  };

  useEffect(async () => {
    const result = await fetch(
      "https://glacial-shelf-30568.herokuapp.com/places"
    ).then((res) => res.json());
    let maxPrice = 2000;
    if (result.length > 0) {
      maxPrice = result.reduce((acc, item) => {
        if (parseFloat(item.price) > acc) {
          acc = item.price;
        }
        return acc;
      }, 0);
    }
    setMaxPrice(maxPrice);
    setAllTours(result);
    setToursMainArray(result);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const newTours = tourMainArray.filter((item) => item.price <= filterValue);
    setIsLoading(true);
    setAllTours(newTours);
    setIsLoading(false);
  }, [filterValue]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div
        className="tourLists_header text-center p-5"
        style={{ height: "260px" }}
      >
        <h1 className="text-light custom_font">
          Choose your desired destination
        </h1>
      </div>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-12 col-md-2">
            <h5 className="my-3 fw-bold text-muted ">Filter Your Result</h5>
            <div className="price_filter">
              <h4>Price</h4>
              <Slider
                defaultValue={filterMaxPrice}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChange}
                max={filterMaxPrice}
              />
            </div>
          </div>
          <div className="col-12 col-md-10">
            <h1 className="custom_font mb-4">Our All tours plan</h1>
            {allTours.length < 1 ? (
              <h1></h1>
            ) : (
              <div className="row">
                {allTours.map((tour) => (
                  <TourListCard key={tour._id} {...tour} colNum="4" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPlans;
