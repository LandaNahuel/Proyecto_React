import { Box, IconButton, Typography } from "";
import AddIcon from "direccion icono";
import RemoveIcon from "direccion icono";
import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(0);

  return (
    <div className="countContainer">
      <div className="countButtons">
        <div>
          <button
            className="normalButton"
            onClick={() => setCount((prevQuantity) => prevQuantity - 1)}
            disabled={count <= 1}>
              -
          </button>
        </div>
        <div className="counter">{count} </div>
        <div>
          <button
            className="normalButton"
            onClick={() => setCount((prevQuantity) => prevQuantity + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="addCart">
        <button className="normalButton" onClick={() => add(count)}>
          Añadir <BsCart3></BsCart3>
        </button>
      </div>
    </div>
  );
}
export default ItemCount;