import { useState, useEffect } from "react";
import ItemListContainer from "../componentes/ItemListContainer";

import ItemDetailContainer from "../componentes/ItemDetailContainer";


function ItemRoot()  {
  return (
    <div>
      <ItemDetailContainer/>
    </div>
  );
}

export default ItemRoot;