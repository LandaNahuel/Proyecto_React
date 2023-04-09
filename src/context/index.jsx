import { createContext, useState } from "react";

export const Context = createContext();

function CustomProvider({ children }) {
  const [itemsAddCant, setItemsCant] = useState([]);

  const onAdd = (product, quantity) => {
    setItemsCant((estadoAnt) => estadoAnt.concat(product));
  };

  const onRemove = () => {
    setItemsCant((estadoAnt) => estadoAnt.slice(1));
  };

  const value = {
    itemsAddCant,
    onAdd,
    onRemove,
  };

  return <Context.Provider value={{itemsAddCant, onAdd, onRemove}}>{children}</Context.Provider>;
}

export default CustomProvider;
