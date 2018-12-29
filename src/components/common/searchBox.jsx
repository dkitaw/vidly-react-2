import React from "react";
import { PropTypes } from "prop-types";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      value={value}
      name="query"
      onChange={e => onChange(e.currentTarget.value)}
      className="form-control my-3"
      type="text"
      placeholder="Search..."
    />
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBox;
