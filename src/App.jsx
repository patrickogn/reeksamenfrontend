import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbarcomp from "./components/NavbarComp.jsx";
import WelcomePage from "./components/WelcomePage.jsx";
import LogIn from "./components/LogIn.jsx";
import {Alert} from "react-bootstrap";
import facade from "./apiFacade.js";
import Footer from "./components/Footer.jsx";
import SideBar from "./components/SideBar.jsx";

import Side1 from "./components/Side1.jsx";
import Side4 from './components/Side4.jsx';

import apiFacade from "./apiFacade.js";
import AccessDenied from "./components/AccessDenied.jsx";

import SignUp from "./components/SignUp.jsx";


function App() {
    //useStates her
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('It just works! ~Todd Howard');


    return (
        <BrowserRouter>
            <div className="row">
                <Navbarcomp loggedIn={loggedIn} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage}/>
                <SideBar loggedIn={loggedIn} />

                <Routes>
                    <Route path="/" element={<WelcomePage/>}/>
                    <Route path="side1" element={facade.hasUserAccess('user', loggedIn) ?
                        <Side1 setErrorMessage={setErrorMessage}/> : <AccessDenied/>}/>

                   <Route path="side4" element={facade.hasUserAccess('admin', loggedIn) ?
                        <Side4 setErrorMessage={setErrorMessage}/> : <AccessDenied/>}/>
                   
                       


                    <Route path="/signUp" element={<SignUp/>}/>
                    <Route path="login" element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}
                                                        setErrorMessage={setErrorMessage}/>}/>
                    <Route path="*" element={<main style={{padding: "1rem"}}><p>There's nothing here!</p></main>}/>
                </Routes>
            </div>
            <Footer/>

            <Alert className="mt-4" >Status: {errorMessage}</Alert>
        </BrowserRouter>
    );
}

export default App;