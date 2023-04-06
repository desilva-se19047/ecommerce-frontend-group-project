import React, { useState } from "react";

export const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Signin</h2>
            <from className="signin-form" onSubmit={handleSubmit}>
                <label htmlFor= "email"> email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type= "email"  placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor= "password"> password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type= "password"  placeholder="********" id="password" name="password"/>
                <button type="submit"> <b>Signin</b> </button>
            </from>
            <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>Don't you have an account? Register here.</button>
        </div>
    )

};

export default Signin;