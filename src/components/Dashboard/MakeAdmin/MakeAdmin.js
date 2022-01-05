import React, { useState } from "react";
import Swal from "sweetalert2";
import "./MakeAdmin.css"

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const emailArea = (e) => {
    setEmail(e.target.value);
  };
  const createAdmin = (event) => {
    const user ={email}
    console.log(user);
    fetch("https://glacial-shelf-30568.herokuapp.com/users/admin", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
    if(data.modifiedCount){
        setEmail("")
        Swal.fire('New Admin Created successfully')
    }
    })
    event.preventDefault();
  };
  return (
    <div id="makeAdmin" style={{paddingTop:"30px"}}>
     <div>
     <h3>You can make a new admin</h3>
      <form onSubmit={createAdmin} action="">
        <input  onBlur={emailArea} type="email" placeholder="enter email" />
        <br />
        <input className="adminButton" type="submit" value="Create New Admin" />
      </form>
     </div>
    </div>
  );
};

export default MakeAdmin;