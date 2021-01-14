import { useEffect, useState } from "react";
import "../App.css";

const Search = () => {
  let [query, setQuery] = useState("");

  let handleChange = (e) => {
    let value = e.target.value;
    console.log(e.target.value);
    setQuery(value);
    console.log(value);
  };

  return (
    <div>
      Here you can search
      <form>
        <input
          type="text"
          className="queryField"
          id="queryField"
          name="queryField"
          value={query}
          onChange={handleChange}
        ></input>
        <button type="submit" className="bttn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
