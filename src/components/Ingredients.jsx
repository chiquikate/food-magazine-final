import { useParams } from "react-router-dom";
import Data from "../data.json";
import "./Ingredients.css";

function Ingredients() {
  const { id } = useParams();
  const data = Data.find((post) => post.id.toString() === id);

  return (
    <>
      <div className="ingredients-container">
        <h2 className="heading">Ingredients</h2>
        <div className="ingredient-list">
          <ul>
            {data?.ingredients.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          ;
        </div>
      </div>
    </>
  );
}

export default Ingredients;
