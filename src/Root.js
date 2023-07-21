import { NavLink } from "react-router-dom";

import "./Root.css";
import data from "./data.json";

function Root() {
  return (
    <>
      <div className="search-filter-container">
        <div class="search">
          <input type="search" class="search-input" placeholder="Search" />
          <button class="search-btn">Search</button>
        </div>
        {/* <div class="filter">
        <button class="filter-btns">All</button>
        <button class="filter-btns">East Asia</button>
        <button class="filter-btns">Southeast Asia</button>
        <button class="filter-btns">South Asia</button>
        <button class="filter-btns">West Asia</button>
      </div> */}
        <div class="add-content">
          <NavLink to="add-post" className="add-post">
            <button class="add-btn">ADD RECIPE</button>
          </NavLink>
        </div>
      </div>
      <div className="menu-list-container" key={data.id}>
        {data.map((element) => (
          <div className="recipe-container" key={element.id}>
            <NavLink to={`ingredients/${element.id}`}>
              <img
                src={element.image}
                className="image"
                alt="Asian Cuisine"
                width="400px"
                height="250px"
              />
            </NavLink>
            <div class="content">
              <NavLink to={`ingredients/${element.id}`}>
                <h3 className="title">{element.title}</h3>
              </NavLink>
              <p className="description">{element.description}</p>
            </div>
            <div className="buttons">
              <button className="edit-btn">EDIT</button>
              <button className="delete-btn">DELETE</button>
            </div>
            ;
          </div>
        ))}
      </div>
    </>
  );
}

export default Root;
