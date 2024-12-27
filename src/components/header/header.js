import { NavLink, Link } from "react-router";
import "./header.css"
import NavigationItem from "./navigationItem/navigationItem";

const Header = () => {
  return (
    <header className="Toolbar">
      <ul className="NavigationItems">
        <NavigationItem link="/" exact>
          Home
        </NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="/aboutme">About me</NavigationItem>
      </ul>
    </header>
  );
};

export default Header;
