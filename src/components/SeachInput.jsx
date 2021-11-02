import { useState } from "react"
import useDebounce from './useDebounce';


 function SearchInput({value,onChange}){
    const[visualDisplay,setVisualDisplay]=useState(value);
    const debouncedChange= useDebounce(onChange,500);

    function handleChange(event){
        setVisualDisplay(event.target.value);
        debouncedChange(event.target.value);
    }


    return(
        <>
        
        <input type="search" placeholder="Ex:NARUTO" value={visualDisplay} onChange={handleChange} />

        </>
    )


}

export default SearchInput;


