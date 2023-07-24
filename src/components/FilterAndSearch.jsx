import allJsonData from "../data.json";
import "./Filter.css";

function FilterAndSearch({
  filteredRecipes,
  setFilteredRecipes,
  allRecipe,
  setAllRecipe,
}) {
  const filterHandler = (itemData) => {
    const filterData =
      itemData === "All"
        ? allJsonData
        : allJsonData.filter((item) => item.category === itemData);
    setAllRecipe(filterData);
  };

  // useEffect(() => {
  //   setFilter(allRecipe);
  //   setFilteredRecipes([
  //     ...new Set(allRecipe.map((recipe) => recipe.category)),
  //   ]);
  // }, []);

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
      {/* <div className="result">
        <Result filteredRecipes={filteredRecipes} />
      </div> */}
    </>
  );
}

// function Result({ filteredRecipes }) {
//   return (
//     <>
//       <div className="results">
//         {filteredRecipes.map((element) => (
//           <div className="recipe-container" key={element.id}>
//             <div className="image-container">
//               <NavLink to={`ingredients/${element.id}`}>
//                 <img
//                   src={element.image}
//                   className="image"
//                   alt="Asian Cuisine"
//                   width="400px"
//                   height="250px"
//                 />
//               </NavLink>
//             </div>
//             <div className="content">
//               <NavLink to={`ingredients/${element.id}`}>
//                 <h3 className="title">{element.title}</h3>
//               </NavLink>
//               <p className="description">{element.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

export default FilterAndSearch;
