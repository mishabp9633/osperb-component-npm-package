import React from "react";
import PropTypes from "prop-types";
import './greeting.css'

function Greeting({ name }) {
  return <h1>Hi, {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;
