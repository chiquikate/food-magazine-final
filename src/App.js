import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Ingredients from "./components/Ingredients";
import FilterAndSearch from "./components/FilterAndSearch";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route>
          <Route path="/" element={<Root />}>
            <Route path="filter" element={<FilterAndSearch />} />
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
