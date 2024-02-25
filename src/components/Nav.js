import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/reservation">Reserve</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Nav;
