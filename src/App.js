import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import Data from "./data.json";
import Root from "./Root";
import AddRecipe from "./components/AddRecipe";
import Ingredients from "./components/Ingredients";

const getData = (data) => {
  console.log(data);
};

function App() {
  const [recipe, setRecipe] = useState(Data);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route>
          <Route path="/" element={<Root />}>
            <Route
              path="add-recipe"
              element={<AddRecipe onSubmit={getData} addRecipe={setRecipe} />}
            ></Route>
          </Route>
          <Route path="/ingredients/:id" element={<Ingredients />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <div className="menu">
        <div class="title-container">
          <h1 class="title-1">Asian Cuisine</h1>
          <h2 class="title-2">Favorites</h2>
        </div>
        <hr className="division" />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
