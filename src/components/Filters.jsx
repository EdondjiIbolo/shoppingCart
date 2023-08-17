import './filters.css'
import { useId , useState} from 'react'
import { useFilter } from '../hooks/useFilter'
export function Filters(){
    const {setFilters,filters} = useFilter()
    const categoryId = useId()
    const priceyId = useId()

   

    const handleChangeMinPrice = (e)=>{

        setFilters(prevState =>({
            ...prevState,
            minPrice:e.target.value
        }))
    }
    const handleChangeCtegory = (e)=>{
        setFilters(prevState =>({
            ...prevState,
            category:e.target.value
        }))
    }
    return(

        <section className='filters'>
             <div>
                <label htmlFor={priceyId}>Precio</label>
                <input value={filters.minPrice} onChange={handleChangeMinPrice} id={priceyId} min='0' max='1500' type="range" />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryId}>Categorias</label>
                <select onChange={handleChangeCtegory} id={categoryId}>
                    <option value="all">Todos</option>
                    <option value="home-decoration">Home Decoration</option>
                    <option value="laptops">Ordenadores</option>
                    <option value="smartphones">Celulares</option>
                    <option value="fragrances">Fragancia</option>
               </select>
            </div>
        </section>
    )
}