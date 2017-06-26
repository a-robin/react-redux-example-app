import React from "react";
import { Link } from "react-router-dom";
import LoadingDots from "./LoadingDots";
import PropTypes from "prop-types";

const Header = ({ loading }) => (
  <nav>
    <Link to="/" className="active">Home</Link>
    {" | "}
    <Link to="/courses" className="active">Courses</Link>
    {" | "}
    <Link to="/about" className="active">About</Link>
    {loading && <LoadingDots interval={100} dots={20} />}
  </nav>
);

Header.PropTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
