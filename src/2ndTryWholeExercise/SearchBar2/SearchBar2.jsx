import { useState } from "react";

export default ({}) => {
  const [inputValue2, setInputValue2] = useState("");
  console.log(inputValue2);

  return (
    <>
      <h2>Search a UNI</h2>
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      {/* <button
        onClick={}
        disabled={}
      >
        Search
      </button>
      <button onClick={}>Sort alphabetically</button> */}
    </>
  );
};
