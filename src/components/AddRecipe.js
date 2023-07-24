// import { PostImage } from "../components/PostImage";
import { NavLink } from "react-router-dom";
import "./AddRecipe.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddRecipe(props) {
  // const [fileUrl, setFileUrl] = useState("");
  // const handleImageSuccess = (imageUrl) => {
  //   setFileUrl(imageUrl);
  // };

  const [recipe, setRecipe] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  // const [ingredients, setIngredients] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    props.onSubmit();
  };

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

  // const getIngredients = (event) => {
  //   const ingredients = event.target.value;
  //   setAuthor(ingredients);
  // };

  const addNewRecipeHandle = (e) => {
    e.preventDefault();

    const newRecipe = {
      // icon: fileUrl,
      title: title,
      category: category,
      description: description,
      // ingredients: ingredients,
      id: uuidv4(),
    };

    setRecipe([...recipe, newRecipe]);
    props.addRecipe((prev) => [...prev, newRecipe]);

    console.log(recipe);

    setTitle("");
    setCategory("");
    setDescription("");
    // setIngredients("");

    <NavLink to="/" />;
  };

  return (
    <>
      <div className="add-container">
        <div className="heading">
          <h2 className="heading-title">Add New Recipe</h2>
        </div>

        <div className="form-container">
          <form id="add-new-recipe" onSubmit={submitHandle}>
            <div className="user-input">
              <label for="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={getTitle}
                required
              />
              <br />
              <label for="category" className="label">
                CATEGORY
              </label>
              <select
                name="category"
                id="category"
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
              <label for="description" className="label">
                DESCRIPTION
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={getDescription}
                required
              ></textarea>
              <br />
              {/* <div className="image-upload-container">
              <PostImage
                addImageSuccessful={handleImageSuccess}
                className="uploaded-image"
              />
            </div> */}
            </div>
            <div>
              <NavLink to="/">
                ;
                <button
                  id="submit-btn"
                  type="submit"
                  value="SUBMIT"
                  onClick={addNewRecipeHandle}
                >
                  SUBMIT
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
