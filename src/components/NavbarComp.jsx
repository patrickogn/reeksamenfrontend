import {Link, NavLink} from "react-router-dom";
import logo from "/src/images/frontendlogo.png";
import facade from "../apiFacade.js";

function NavbarComp({loggedIn, setLoggedIn, setErrorMessage}) {

    //const getClass = ({isActive}) => (isActive ? "nav-active" : null)

    const logout = () => {
        facade.logout()
        setLoggedIn(false)
        setErrorMessage('Logged out.')
    }

    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={logo}/>
            </Link>
            <nav>
                <div style={{textAlign: "right", paddingRight: 50, paddingTop: 20}}>
                    <NavLink to={"login"}>{loggedIn ?  <button className="logout" onClick={logout}>Logout</button>: "Login / Sign Up"}</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default NavbarComp;