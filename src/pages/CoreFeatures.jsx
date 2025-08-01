// import React from "react";
import PropTypes from "prop-types";
const Feature = ({ heading, paragraph }) => {
  return (
    <div className='media-body mt-3 mt-md-0'>
      <h5 className='bold mt-0 mb-1'>{heading}</h5>
      <p className='m-0'>{paragraph}</p>
    </div>
  );
};
Feature.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
export default Feature;
