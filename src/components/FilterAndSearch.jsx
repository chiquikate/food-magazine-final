import "./FilterAndSearch.css";

function FilterAndSearch() {
  return (
    <div className="search-filter-container">
      <div class="search">
        <input type="search" class="search-input" placeholder="Search" />
        <button class="search-btn">Search</button>
      </div>
      <div class="filter">
        <button class="filter-btns">All</button>
        <button class="filter-btns">East Asia</button>
        <button class="filter-btns">Southeast Asia</button>
        <button class="filter-btns">South Asia</button>
        <button class="filter-btns">West Asia</button>
      </div>
    </div>
  );
}

export default FilterAndSearch;
