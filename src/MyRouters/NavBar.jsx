import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";

let NavBar = () => {



  const {theme, toggleTheme} = useTheme();
/* 
  const handleDark = ()=>{
    theme === "dark"
  }

  const handleLight = ()=>{
    theme === "light"
  } */

  return (
    <div className="wrapper">

      <div className="toggle">
        {
          theme === "dark" ? <button className={theme==="dark" ? "light":""} onClick={toggleTheme}>Light</button>: <button className={theme==="light" ? "dark":""} onClick={toggleTheme}>Dark</button>
        }
        
        
      </div>
      <div className="NavBar">
        <ul>
          <li>
            <NavLink className="links" to="/">
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink className="links" to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink className="links" to="/contact">
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink className="links" to="/settings">
              Settings
            </NavLink>
          </li>

          <li>
            <NavLink className="links" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
