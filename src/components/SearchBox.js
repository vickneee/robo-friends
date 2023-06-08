import React from "react";
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba br3 b--green bg-lightest-blue"
        style={{marginBottom: "20px"}}
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
