import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../Shared/Loding/Loading";
import TourListCard from "./TourListCard";
import { Slider } from "@mui/material";
const TourLists = () => {
  const { divName, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [tourPlaces, setTourPlaces] = useState(null);
  const [mainTourPlace, setMainTourPlaces] = useState([]);
  const [filterMaxPrice, setMaxPrice] = useState(0);
  const [filterValue, setFilterValue] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFilterValue(parseFloat(e.target.value));
  };
  useEffect(async () => {
    const url = `https://glacial-shelf-30568.herokuapp.com/place/${id}`;

    const result = await fetch(url).then((res) => res.json());
    let maxPrice = 0;
    if (result.length > 0) {
      maxPrice = result.reduce((acc, item) => {
        if (parseFloat(item.price) > acc) {
          acc = item.price;
        }
        return acc;
      }, 0);
    }
    setMaxPrice(maxPrice);
    setTourPlaces(result);
    setMainTourPlaces(result);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const newTours = mainTourPlace.filter((item) => item.price <= filterValue);
    setTourPlaces(newTours);
  }, [filterValue]);

  if (isLoading) {
    return <Loading />;
  }

  if (!tourPlaces) {
    return (
      <div className="container">
        <h1>There is no match tours</h1>
      </div>
    );
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
      <div className="tourLists_places_container container py-4">
        <div className="row">
          <div className="col-12 col-md-3">
            <h5 className="my-3 text-muted fw-bold mb-3">Filter Your Result</h5>
            <h3>Price</h3>
            <div className="price_filter">
              <Slider
                defaultValue={filterMaxPrice}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChange}
                max={filterMaxPrice}
              />
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <h1 className="mb-4 custom_font">
                All Our {divName} divison tourist places
              </h1>
              {tourPlaces.map((item) => (
                <TourListCard key={item.placeId} {...item} division={divName} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourLists;
