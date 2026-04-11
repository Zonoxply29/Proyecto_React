import { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {

    // lo que hace esta parte es que creamos una constante de estado que seria search, que facilita
    // para poder tomar en cuenta el valor que se ingresa en el input y es reactiva y se ocupe en cualquier parte 
    const [search, setSearch] = useState('');
    
    // cuando el usuario da enter el metodo de onsearch se actualiza de el padre al hijo de la funcion 
    useEffect(() => {
        console.log('On Search Cambio');
    }, [search, onSearch])

    useEffect(() => {
        console.log('Componente Listo');
    }, [onSearch])

    useEffect(() => {
        console.log('Search Cambio');
    }, [search])

    useImperativeHandle(ref,()=>({
        search,setSearch
    }));
    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    // se encarga de que solamente se envie el nombre de lo que busque el usuario al dar enter
    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(search);
        }
    }

    return (
        <div ref={ref}>
            <p>Mi boletera</p>
            <input placeholder="Busca tu evento Favorito"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}
            >
            </input>
        </div>
    );
})
Navbar.displayName = 'Navbar';
export default Navbar;