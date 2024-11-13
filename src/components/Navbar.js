import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  //
  return (
    <nav className="navbar">
      <h1>About us</h1>
      <h1>Blog</h1>
      <h1>API</h1>
      <h1>Support</h1>
      <h1>
        <Link to="/signin">Sign in</Link>
      </h1>
      <h1>Sign up</h1>
      {/* <div className="links">
        <a href="/about-us">About us</a>
        <a href="/Blog">Blog</a>
        <a href="/api">API</a>
        <a href="/support">Support</a>
        <a href="/sign-in">Sign in</a>
        <a href="/sign-up">Sign up</a> 
      </div>  */}
    </nav>
  );
};

export default Navbar;
