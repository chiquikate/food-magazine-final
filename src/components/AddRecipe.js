import { PostImage } from "../components/PostImage";
import { NavLink } from "react-router-dom";
import "./AddRecipe.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddRecipe(props) {
  const [fileUrl, setFileUrl] = useState("");
  const handleImageSuccess = (imageUrl) => {
    setFileUrl(imageUrl);
  };
  return <div>AddRecipe</div>;
}

export default AddRecipe;
