import { useState, createContext } from "react";
//.1. CREAR EL CONTEXTO
//ESTE ES EL CONTEXTO QUE SE CONSUME
export const FiltersContext = createContext()

//2. PROVEER EL CONTEXTO
//ESTE ES EL CONTEXTO QUE NOS OFRECEN DE ACCESO
export function FilterProvider({children}){
    const [filters , setFilters] = useState({
        category:'all',
        minPrice:0
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
          {children}
        </FiltersContext.Provider>
    )
}