import React, {useState} from "react";
import {Outlet} from "react-router-dom";

function LoginForm({login, loginCredentials, setLoginCredentials}) {

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
        setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }

    return (
        <div >
            <form onChange={onChange}>
                <h2>Login</h2>
                <br/>
                <input className="inputLogin" placeholder="User Name" id="username" defaultValue={""}/>
                <br/>
                <input className="inputLogin" type={"password"} placeholder="Password" id="password" defaultValue={""}/>
                <br/>
                <button onClick={performLogin}>Login</button>
            </form>
        </div>
    )

}

export default LoginForm;