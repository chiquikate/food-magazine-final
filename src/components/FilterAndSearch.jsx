import allJsonData from "../data.json";
import "./Filter.css";

function FilterAndSearch({ setAllRecipe }) {
  const filterHandler = (itemData) => {
    const filterData =
      itemData === "All"
        ? allJsonData
        : allJsonData.filter((item) => item.category === itemData);
    setAllRecipe(filterData);
  };

  return (
    <>
      <div className="search-filter-container">
        <div className="filter-btns-container">
          <ul>
            <button
              className="filter-btns"
              onClick={() => filterHandler("All")}
            >
              All
            </button>
            <button
              className="filter-btns"
              onClick={() => filterHandler("East Asia")}
            >
              East Asia
            </button>
            <button
              className="filter-btns"
              onClick={() => filterHandler("Southeast Asia")}
            >
              Southeast Asia
            </button>
            <button
              className="filter-btns"
              onClick={() => filterHandler("South Asia")}
            >
              South Asia
            </button>
            <button
              className="filter-btns"
              onClick={() => filterHandler("West Asia")}
            >
              West Asia
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FilterAndSearch;
