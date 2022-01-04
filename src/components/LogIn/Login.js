import { Button } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../../Hooks/useAuth';
import Register from '../Register/Register';
import './Login.css'



const handleSignUp = () => {
    const formBox = document.getElementById("formBox");
    const body = document.querySelector(".body");
    formBox.classList.add("active");
    body.classList.add("active");
}
const handleSignIn = () => {
    const formBox = document.getElementById("formBox");
    const body = document.querySelector(".body");
    formBox.classList.remove("active");
    body.classList.remove("active");
}

const Login = () => {
    const [email, setEmail] = useState('');
    const location =useLocation()
    const navigate = useNavigate()
    const [password, setPassword] = useState('');

    const userLoginEmail = e => {
        setEmail(e.target.value)
    }
    const userLoginPassword = e => {
        setPassword(e.target.value)
    }

    

    const { handaleGoogleSign, loginUser } = useAuth();

    const handalelogin = (e) => {
        loginUser(email, password, location, navigate)
        e.preventDefault()
        // signInWithEmailAndPassword(auth, email, password)
        // .then(result => {

        //     setUser(result.user)
        // })
    }

    

  
    return (
        <div className="body">
            <div className="loginContainer">
                <div className="form-container">

                    <div className="box signIn">
                        <h3 className="ms-5 mb-5 mb-md-0 ms-md-0">Already Have an Account ?</h3>
                        <button id="signinBtn" onClick={handleSignIn} >Sign in</button>
                    </div>

                    <div className="box signUp">
                        <h3 className="ms-5 mb-5 mb-md-0 ms-md-0">Don't Have an Account ?</h3>
                        <button id="signupBtn" onClick={handleSignUp}>Sign Up</button>
                    </div>

                </div>

                {/* sign in box */}
                <div id="formBox">
                    <div className="form signinForm">
                        <form onSubmit={handalelogin}>
                            {/* <span>{user.displayName}</span> */}
                            <h3>Sign In</h3>
                            <input onChange={userLoginEmail} type="email" placeholder="Enter your Email" />
                            <input onChange={userLoginPassword} type="password" placeholder="Enter your Password" />
                            {/* <button >Sign Out</button> */}
                            <input type="submit" value="Sign In" className=" p-2 submitBtn" /><br />
                            <a href className="text-danger d-none d-lg-block text-center forgetText"> Forget Password ?</a>
                            <br /><br />
                            <small className="d-none d-lg-block">----------------- Or sign in with -----------------</small>
                            <aside className="SocialIcon">
                                <Button className="SignMethod" onClick={()=>handaleGoogleSign(location,navigate)}>Google Sign In</Button>
                            </aside>
                        </form>
                    </div>

                    {/* sign up box */}
                    <div className="form signUpForm">
                        <Register></Register>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;