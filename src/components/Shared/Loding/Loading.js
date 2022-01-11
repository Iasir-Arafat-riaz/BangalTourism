import React from "react";

const Loading = () => {
  return (
    <div  className="my-5 container ">
      <div className="d-flex justify-content-center">
        <div style={{marginTop:"40px"}} className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
