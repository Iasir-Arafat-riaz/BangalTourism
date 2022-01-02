import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Plan from './Plan/Plan';

const RecommendedPlans = () => {
    const [plans,setPlans]=useState([])
    useEffect(()=>{
        fetch("plans.json")
        .then(res=>res.json())
        .then(data=>setPlans(data))
    },[])
    console.log(plans);
    return (
        <div>
             <div className="custom-product">
        <h2 className="common-header">Our Recommended Tour Plans</h2>
        <Row xs={1} md={3} className="g-4 m-3">
          {plans.map((plan, index) => (
            <Plan key={index} plan={plan}></Plan>
          ))}
        </Row>
      </div>
        </div>
    );
};

export default RecommendedPlans;