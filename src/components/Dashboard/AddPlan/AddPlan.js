import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddPlan.css"
const AddPlan = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
      //   const dataobject ={bookingInfo:     }
        console.log(data)
        axios.post("",data)
        .then(respo=>{
            console.log(respo);
            if(respo.status==200){
   reset()
            }
        })
     
    };

    return (
        <div className="add-Packages-Plan">
        <h2 className="common-header mt-3 text-center">You Can Add New Package Plan</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input required placeholder="Enter Tour plane ID" type="number" {...register("serviceId")} />
          <input required placeholder="Enter Tour Plan name " {...register("service")} />
          <textarea required  placeholder="Enter description about your Tour Plan" {...register("detail")} />
          
          <input required placeholder="Enter Approximate cost for your Tour Plan"  type="number" {...register("cost")} />
          <input required placeholder="You can submit photo, must need valid url  "  {...register("img")} />
  
          <input className="bg-danger" type="submit" />
        </form>
      </div>
    );
};

export default AddPlan;