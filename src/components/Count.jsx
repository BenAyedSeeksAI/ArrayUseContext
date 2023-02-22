import React, { useContext } from "react";
import { context } from "../context/context";

const Count = () => {
  const { array, setArray } = useContext(context);
  const list = (
    <ul>
      {array.map((element) => {
        return <li key={element}>{element}</li>;
      })}
    </ul>
  );
  return (
    <>
      <div>
        {list}

        <button onClick={() => setArray([...array, "bhim"])}>inc</button>
      </div>
    </>
  );
};
export default Count;
