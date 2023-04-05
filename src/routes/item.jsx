import { useState, useEffect } from "react";
import ItemListContainer from "../componentes/ItemListContainer";
import NavBar from "../componentes/Navbar";
import ItemDetailContainer from "../componentes/ItemDetailContainer";


function ItemRoot()  {
  return (
    <div>
      <NavBar />
      <ItemDetailContainer/>
    </div>
  );
}

export default ItemRoot;