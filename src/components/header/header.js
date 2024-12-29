import "./header.css"
import NavigationItem from "./navigationItem/navigationItem";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  const openNav = () => {
    document.getElementById("myNav").style.width = "70%";
  }

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }
  let menu = (
    <ul>
      <NavigationItem link="/" close={closeNav} exact>
        <HomeIcon color="primary" />
      </NavigationItem>
      <NavigationItem link="/aboutme" close={closeNav}>About me</NavigationItem>
      <NavigationItem link="/contact" close={closeNav}>Contact</NavigationItem>
    </ul>
  );

  return (
    <header className="Toolbar">
      <button className="Login">Login</button>
      <span className="MobileMenu" onClick={openNav}>&#9776;</span>
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <div class="overlay-content">
          {menu}
        </div>
      </div>
      <div className="menu">
        {menu}
      </div>
    </header>
  );
};

export default Header;
