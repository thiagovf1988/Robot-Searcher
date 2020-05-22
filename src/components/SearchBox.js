import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="tc pa2 ba b--red bg-lightest- red"
        type="search"
        placeholder="Name of the robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
