import { NavLink, Link } from "react-router";
const Header = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <Link to="/contact">Concerts</Link>
      </nav>
    </div>
  );
};

export default Header;
