import { useState } from "react";
import generateRandomNum from "../utils/geenrateRandomNum";

export default function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));

  const changeRandomNum = () => {
    setRandomNum(generateRandomNum(maxNum));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate random number</button>
    </div>
  );
}
