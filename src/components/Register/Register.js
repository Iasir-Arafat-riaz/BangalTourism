import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { registerUser, handaleGoogleSign, error } = useAuth();

    const history = useNavigate()
    const location = useLocation();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const navigate = useNavigate()

    // const redirect_url = location.state?.from || "/Home";

    const handleGoogleSignUp = () => {
        // setIsloading(true)
        handaleGoogleSign(location, history)
        // .then(() => {
        //     history.push(redirect_url);
        // })
        // .finally(() => setIsloading(false))
    }
    const handleRegister = () => {
        registerUser(email, password, name, navigate, location)
        // registerUser(history)

        // setInterval(() => {
        //     window.location.reload(true);
        // }, 2000)
    }

    return (
        <div>
            <p className="position-absolute text-danger" style={{ marginTop: "0%", marginLeft: "25%" }}>{error}</p>
            <h4 className="mb-4">Sign Up</h4>

            <input onChange={e => setname(e.target.value)} placeholder=" Name" type="text" />
            <input onChange={e => setemail(e.target.value)} placeholder=" Email" type="email" />
            <input onChange={e => setpassword(e.target.value)} placeholder=" Password" type="password" /><input onClick={handleRegister} type="submit" variant="danger" value="Sign Up" style={{ backgroundColor: "#89ABE3" }} />

            <small className="d-none d-lg-block">---------------- Or sign up with ----------------</small>
            <div className="SocialIcon">
                <Button className="SignMethod" onClick={handleGoogleSignUp}>Google Sign In</Button>
            </div>
        </div>
    );
};

export default Register;