import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../Shared/Loding/Loading";
import TourListCard from "./TourListCard";
import { Slider } from "@mui/material";
const TourLists = () => {
  const { divName, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [tourPlaces, setTourPlaces] = useState(null);

  useEffect(async () => {
    const url = `https://glacial-shelf-30568.herokuapp.com/place/${id}`;
    console.log(url);
    const result = await fetch(url).then((res) => res.json());

    console.log(result);
    setTourPlaces(result);
    setIsLoading(false);
  }, []);
  console.log(tourPlaces);
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
