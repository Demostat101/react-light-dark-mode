import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {NameContext} from "../UseContext/UseContext";
import { useContext } from "react";


let LogOutPage = () => {
  let location = useLocation();
  let details = useContext(NameContext)

  return (
    <>
      <div className="wrapper">
        <div className="NavBar">
          <ul>
            <li>
              <NavLink className="links" to="/">
                LogOut
              </NavLink>
            </li>

             <h3>welcome {location.state.name} {location.state.lastName}</h3>

          </ul>
        </div>
      </div>

      <div className="FormList">

        <div className="name">
          Full Name: {location.state.name} {location.state.lastName}
        </div>

        <div className="email">Email: {location.state.email}</div>
        <div className="password">Password: {location.state.passWord}</div>
        <div className="file">image: {location.state.files}</div>
      </div>

      <div>{`Welcome to the page ${details} created`}</div>
    </>
  );
};

export default LogOutPage;
