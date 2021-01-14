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

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    return query;
  };

  return (
    <div>
      Here you can search
      <form onSubmit={handleSubmit}>
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
