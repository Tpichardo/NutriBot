import React from "react";
import Search from "../Assets/searchicon.png";
import "./SearchBar.css";

function Searchbar(props) {
  const { input, handleInput, handleSubmit } = props;
  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={handleInput}
        ></input>
        <button type="submit">
          <img src={Search} alt="Search" />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
