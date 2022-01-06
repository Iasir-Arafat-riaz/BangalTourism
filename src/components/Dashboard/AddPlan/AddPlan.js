import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddPlan.css";
const AddPlan = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    //   const dataobject ={bookingInfo:     }
    console.log(data);
            axios.post("https://glacial-shelf-30568.herokuapp.com/place",data)
            .then(respo=>{
                console.log(respo);
                if(respo.status==200){
       reset()
                }
            })
  };

  return (
    <div className="add-Packages-Plan">
      <h2 className="common-header mt-3 text-center">
        You Can Add New Package Plan
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          required
          placeholder="Enter Tour plane ID"
          type="number"
          {...register("placeId")}
        />
        <input
          required
          placeholder="Enter Tour Plan name "
          {...register("placeName")}
        />
        <textarea
          required
          placeholder="Enter description about your Tour Plan"
          {...register("description")}
        />

        <input
          required
          placeholder="Enter Approximate cost for your Tour Plan"
          type="number"
          {...register("price")}
        />
        <input
          required
          placeholder="enter review counts"
          type="number"
          {...register("review")}
        />
        <input
          required
          placeholder="enter Stay Duration"
          type="number"
          {...register("duration")}
        />
        <input
          required
          placeholder="enter plan rating"
          type="number"
          {...register("rating")}
        />
        <input
          required
          placeholder="enter division Parent id"
          type="number"
          {...register("parentID")}
        />
        <input
          required
          placeholder="You can submit photo, must need valid url  "
          {...register("image")}
        />
        <input
          required
          placeholder="Enter Division name"
          {...register("divisionName")}
        />

        <input id="addPlanBtn" type="submit" />
      </form>
    </div>
  );
};

export default AddPlan;
