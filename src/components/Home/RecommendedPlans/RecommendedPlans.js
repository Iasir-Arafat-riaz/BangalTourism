import React, { useEffect, useState } from 'react';

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
            <h2>Recommended Plans Here</h2>
        </div>
    );
};

export default RecommendedPlans;