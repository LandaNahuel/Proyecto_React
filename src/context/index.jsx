import { createContext } from "react";

export const CustomContext= createContext ()

function CustomProvider({children}) {
    return <CustomContext.Provider value="hola mundo ">{children}</CustomContext.Provider>;
}

export default CustomProvider;