import "./Search.css";
import allJsonData from "../data.json";

function Search({ allRecipe, setAllRecipe, searchedItems, setSearchedItems }) {
  function searchRecipe() {
    const value = document.getElementById("search-input").value;
    setAllRecipe(
      value
        ? allJsonData.filter((recipe) =>
            recipe.title.toLowerCase().includes(value.toLowerCase())
          )
        : allJsonData
    );
  }

  const showResultsHandle = (e) => {
    setSearchedItems(e.target.value);
  };

  return (
    <div>
      <div className="search-filter-container">
        <input
          type="search"
          id="search-input"
          className="search-input"
          placeholder="Search"
          onChange={searchRecipe}
        />
        <ul className="list">
          {searchedItems.map((recipe) => (
            <li
              key={recipe.id}
              className="listItem"
              onChange={(e) => showResultsHandle(e)}
            >
              {recipe.title}
            </li>
          ))}
        </ul>
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
}

export default Search;
