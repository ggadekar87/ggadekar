import { NavLink, Link } from "react-router";
import "./header.css"
import NavigationItem from "./navigationItem/navigationItem";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  return (
    <header className="Toolbar">
      <ul className="NavigationItems">
        <NavigationItem link="/" exact>
          <HomeIcon color="primary" />
        </NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="/aboutme">About me</NavigationItem>
      </ul>
    </header>
  );
};

export default Header;
