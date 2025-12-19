import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Real Estate
      </div>

      <nav className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/book">Product</NavLink>
        <NavLink to="/mycart">My Cart</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
