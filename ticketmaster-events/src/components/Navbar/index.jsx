import { useState } from "react";

const Navbar = ({onSearch}) =>{

    // lo que hace esta parte es que creamos una constante de estado que seria search, que facilita
    // para poder tomar en cuenta el valor que se ingresa en el input y es reactiva y se ocupe en cualquier parte 
    const [search, setSearch] = useState('');

    const handleInputChange = (event) =>{
        setSearch(event.target.value)
    }

    // se encarga de que solamente se envie el nombre de lo que busque el usuario al dar enter
    const handleInputKeyDown = (event) =>{
        if (event.key === 'Enter'){
            onSearch(search);
        }
    }

    return(
        <div>
            <p>Eventos</p>
            <input placeholder="Busca tu evento Favorito" 
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={search}
            >
            </input>        
        </div>
    );
}

export default Navbar;