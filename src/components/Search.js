import { useState } from "react";
import "../App.css";

const Search = ({ changeQuery }) => {
  let [queryWord, setQueryWord] = useState("");
  let handleChange = (e) => {
    let value = e.target.value;
    setQueryWord(value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    changeQuery(queryWord);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="queryField"
          id="queryField"
          name="queryField"
          value={queryWord}
          onChange={handleChange}
        />
        <button type="submit" className="bttn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
