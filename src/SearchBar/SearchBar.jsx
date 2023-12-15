import { useState } from "react";

export default ({ handleChange, handleClick, search, handleSort }) => {
  return (
    <>
      <h2>Search a UNI</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        onClick={handleClick}
        disabled={search.trim() === "" ? true : false}
      >
        Search
      </button>
      <button onClick={handleSort}>Sort alphabetically</button>
    </>
  );
};
