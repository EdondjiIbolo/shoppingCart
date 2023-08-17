import { useContext } from "react"
import { FiltersContext } from "../context/filetrs"
export function useFilter(){
    
    // 3.CONSUMIR EL CONTEXTO
    const {filters, setFilters  } = useContext(FiltersContext)
  
    const filterProduct = (products) =>{
      return products.filter(
        product=>{
             return ( product.price >= filters.minPrice && (product.category==filters.category || filters.category =='all'))
          })
    }

    return {filters,filterProduct, setFilters}
  }