//import styled from "styled-components";
//import { mobile } from "../responsive";
import React, { useState } from "react";

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Signup</h2>
            <from className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor= "name">First name</label>
                <input value={name} name="name" id="name" placeholder="first name" />
                <label htmlFor= "name">Last name</label>
                <input value={name} name="name" id="name" placeholder="last name" />
                <label htmlFor= "email"> Email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type= "email"  placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor= "password"> Password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type= "password"  placeholder="********" id="password" name="password"/>
                <label htmlFor= "password"> Confirm Password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type= "password"  placeholder="********" id="password" name="password"/>
                <button type="submit"> <b> Register </b> </button>
            </from>
            <button className="link-btn" onClick={() => props.onFormSwitch('signin')}>Already do you have an account? Signin here.</button>
        </div>
    )
}

export default Signup;