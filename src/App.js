import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Ingredients from "./components/Ingredients";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route>
          <Route path="/" element={<Root />} />
          <Route path="/ingredients/:id" element={<Ingredients />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <div className="menu">
        <div className="title-container">
          <h1 className="title-1">Asian Cuisine</h1>
          <h2 className="title-2">Favorites</h2>
        </div>
        <hr className="division" />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
