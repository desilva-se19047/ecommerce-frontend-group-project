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
        <>
            <from onSubmit={handleSubmit}>
                <label htmlFor= "name">Full name</label>
                <input value={name} name="name" id="name" placeholder="full Name" />
                <label htmlFor= "email"> email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type= "email"  placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor= "password"> password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type= "password"  placeholder="********" id="password" name="password"/>
                <button type="submit"> Signin </button>
            </from>
            <button onClick={props.onFromSwitch}>Already do you have an account? Signin here.</button>
        </>
    )
}