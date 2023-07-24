import "./Search.css";

import { NavLink } from "react-router-dom";

function Search({ allRecipe, searchedItems, setSearchedItems }) {
  function searchRecipe() {
    const value = document.getElementById("search-input").value;
    setSearchedItems(
      allRecipe.filter((recipe) =>
        recipe.title.toLowerCase().includes(value.toLowerCase())
      )
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
      <div className="result">
        <Result searchedItems={searchedItems} />
      </div>
    </div>
  );
}

function Result({ searchedItems }) {
  return (
    <>
      <div className="results">
        {searchedItems.map((element) => (
          <div className="recipe-container" key={element.id}>
            <div className="image-container">
              <NavLink to={`ingredients/${element.id}`}>
                <img
                  src={element.image}
                  className="image"
                  alt="Asian Cuisine"
                  width="400px"
                  height="250px"
                />
              </NavLink>
            </div>
            <div className="content">
              <NavLink to={`ingredients/${element.id}`}>
                <h3 className="title">{element.title}</h3>
              </NavLink>
              <p className="description">{element.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;
