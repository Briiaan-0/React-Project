import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <div className="img">
          <img src="../../img/Logo.png" alt="logo" />
        </div>
        <ul>
          <li>
          <NavLink to="/Home">Inicio</NavLink>
          </li>
          <li>
          <NavLink to="/MiFit">MiFit</NavLink>
          </li>
          <li>
          <NavLink to="/MiFit">MiFit</NavLink>
          </li>
          <li>
            <NavLink to="/MiFit">MiFit</NavLink>
          </li>
        </ul> 
      </nav>
    </div>
  );
}

export default Header;
