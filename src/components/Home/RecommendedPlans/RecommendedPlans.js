import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Plan from "./Plan/Plan";
import "aos/dist/aos.css";
import Aos from "aos";

const RecommendedPlans = () => {
  
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    fetch("https://glacial-shelf-30568.herokuapp.com/divisions")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  console.log(plans);

  //using aos
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div >
      <div className="custom-product">
        <h2 className="recommendedHeader text-center">Recommended Tour Plans</h2>
        <Row data-aos="zoom-in"  xs={1} md={3} className="g-4 m-3">
          {plans.map((plan, index) => (
            <Plan key={index} plan={plan}></Plan>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecommendedPlans;
