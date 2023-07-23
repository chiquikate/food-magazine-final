import { NavLink } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import data from "./data.json";

import "./Root.css";

function Root() {
  const [editRecipe, setEditRecipe] = useState();
  const [addRecipe, setAddRecipe] = useState([]);

  const [recipe, setRecipe] = useState([data]);
  const [allRecipe, setAllRecipe] = useState(data);

  const deleteHandle = (id) => {
    const updatedRecipe = recipe.filter((e) => e.id !== id);
    setRecipe(updatedRecipe);

    const updatedElement = allRecipe.filter((e) => e.id !== id);
    setAllRecipe(updatedElement);
  };

  return (
    <>
      {/* <div className="add-content">
        <button className="add-btn" onClick={(e) => setAddRecipe(e)}>
          ADD RECIPE
        </button>
      </div> */}
      ;
      <div className="menu-list-container" key={data.id}>
        {allRecipe.length > 0 ? (
          allRecipe.map((element) => (
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
              <div class="content">
                <NavLink to={`ingredients/${element.id}`}>
                  <h3 className="title">{element.title}</h3>
                </NavLink>
                <p className="description">{element.description}</p>
              </div>
              <div className="buttons">
                <button
                  className="edit-btn"
                  onClick={() => setEditRecipe(element)}
                >
                  EDIT
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteHandle(element.id)}
                >
                  DELETE
                </button>
              </div>
              ;
            </div>
          ))
        ) : (
          <div className="noContent">No recipes to display.</div>
        )}
        {editRecipe && (
          <EditBlog
            editRecipe={editRecipe}
            setEditRecipe={setEditRecipe}
            allRecipe={allRecipe}
            setAllRecipe={setAllRecipe}
          />
        )}
        {addRecipe && (
          <AddRecipe
            allRecipe={allRecipe}
            setAllRecipe={setAllRecipe}
            recipe={recipe}
            setRecipe={setRecipe}
          />
        )}
      </div>
    </>
  );
}

function AddRecipe({ allRecipe, setAllRecipe, recipe, setRecipe }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  const getTitle = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const getCategory = (event) => {
    const category = event.target.value;
    setCategory(category);
  };

  const getDescription = (event) => {
    const description = event.target.value;
    setDescription(description);
  };

  const getIngredients = (event) => {
    const ingredients = event.target.value;
    setIngredients(ingredients);
  };

  const addNewRecipeHandle = (e) => {
    e.preventDefault();

    const newRecipe = {
      // icon: fileUrl,
      title: title,
      category: category,
      description: description,
      ingredients: ingredients,
      id: uuidv4(),
    };

    setRecipe([...recipe, newRecipe]);
    setAllRecipe([...allRecipe, newRecipe]);

    console.log(recipe);

    setTitle("");
    setCategory("");
    setDescription("");
    setIngredients("");
  };

  return (
    <>
      <div className="add-container">
        <div className="heading">
          <h2 className="add-heading">Add New Recipe</h2>
        </div>

        <div className="form-container">
          <form id="add-new-recipe">
            <div className="user-input">
              <label for="add-title" className="label-add">
                TITLE
              </label>
              <input
                type="add-text"
                id="add-title"
                value={title}
                onChange={getTitle}
                required
              />
              <br />
              <label for="add-category" className="label-add">
                CATEGORY
              </label>
              <select
                name="add-category"
                id="add-category"
                value={category}
                onChange={getCategory}
              >
                <br />
                <option value="east-asia">East Asia</option>
                <option value="southeast-asia">Southeast Asia</option>
                <option value="south-asia">South Asia</option>
                <option value="west-asia">West Asia</option>
              </select>
              <br />
              <label for="add-description" className="label-add">
                DESCRIPTION
              </label>
              <textarea
                type="text"
                id="add-description"
                name="add-description"
                value={description}
                onChange={getDescription}
                required
              ></textarea>
              <br />
              <label for="add-ingredients" className="label-add">
                INGREDIENTS
              </label>
              <textarea
                type="text"
                id="add-ingredients"
                name="add-ingredients"
                value={ingredients}
                onChange={getIngredients}
                required
              ></textarea>
              <div>
                <button
                  id="submit-btn"
                  type="submit"
                  value="SUBMIT"
                  onClick={addNewRecipeHandle}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function EditBlog({ editRecipe, setEditRecipe, allRecipe, setAllRecipe }) {
  const [editTitle, setEditTitle] = useState(editRecipe.title);
  const [editCategory, setEditCategory] = useState(editRecipe.category);
  const [editDescription, setEditDescription] = useState(
    editRecipe.description
  );
  const [editIngredients, setEditIngredients] = useState(
    editRecipe.ingredients
  );

  const editTitleHandle = (event) => {
    const title = event.target.value;
    setEditTitle(title);
  };

  const editCategoryHandle = (event) => {
    const category = event.target.value;
    setEditCategory(category);
  };

  const editDescriptionHandle = (event) => {
    const description = event.target.value;
    setEditDescription(description);
  };

  const editIngredientstHandle = (event) => {
    const ingredients = event.target.value;
    setEditIngredients(ingredients);
  };

  const cancelEditHandle = (id) => {
    setEditRecipe(null);
  };

  const saveHandle = (id) => {
    const updateRecipe = allRecipe.find((e) => e.id === id);
    if (updateRecipe) {
      updateRecipe.title = editTitle;
      updateRecipe.category = editCategory;
      updateRecipe.description = editDescription;
      updateRecipe.ingredients = editIngredients;
    }

    const updatedRecipe = allRecipe.map((recipe) => {
      if (recipe.id === id) {
        return updateRecipe;
      }
    });

    setAllRecipe(updatedRecipe);
  };

  return (
    <div key={editRecipe.id}>
      <div className="editSection">
        <h2 className="edit-heading">EDIT CONTENT</h2>
        <div className="editInputs">
          <label for="title" className="label">
            TITLE
          </label>
          <input type="text" id="title" onChange={editTitleHandle} required />
          <br />
          <label for="category" className="label">
            CATEGORY
          </label>
          <select name="category" id="category" onChange={editCategoryHandle}>
            <br />
            <option value="east-asia">East Asia</option>
            <option value="southeast-asia">Southeast Asia</option>
            <option value="south-asia">South Asia</option>
            <option value="west-asia">West Asia</option>
          </select>
          <br />
          <label for="description" className="label">
            DESCRIPTION
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            onChange={editDescriptionHandle}
            required
          ></textarea>
          <br />
          <label for="ingredients" className="label" id="ingredients-label">
            INGREDIENTS
          </label>
          <textarea
            type="text"
            id="ingredients"
            name="ingredients"
            onChange={editIngredientstHandle}
            required
          ></textarea>
        </div>
        <div className="edit-buttons">
          <button className="saveBtn" onClick={() => saveHandle(editRecipe.id)}>
            SAVE
          </button>
          <button
            className="cancelBtn"
            onClick={() => cancelEditHandle(editRecipe.id)}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Root;
