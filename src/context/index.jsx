import { createContext } from "react";

export const CustomContext = createContext ()

function CustomProvider({children}) {
    return <Context.Provider value={"hola mundo anal"}>{children}</Context.Provider>;
}

export default CustomProvider;