import { createContext, useState } from "react";

export const Context = createContext();

function CustomProvider({ children }) {
  const [itemsAddCant, setItemsCant] = useState([]);

  const onAdd = () => {
    setItemsCant((estadoAnt) => estadoAnt.concat({}));
  };

  const onRemove = () => {
    setItemsCant((estadoAnt) => estadoAnt.slice(1));
  };

  const value = {
    itemsAddCant,
    onAdd,
    onRemove,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default CustomProvider;
