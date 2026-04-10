import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json"

//! Cualquier elemento que este dentro de la funcion significa que va a cambiar 
//! y los elementos que esten fuera no cambian se muestran el momento

const Events = ({ searchValue }) => {
    // esta parte esta pensanda para los elementos que sean reactivos que cambien (en este caso no pero se hace uso de useState)
    const [data] = useState(eventsJSON)
    // Para acceder directamente a los eventos del objeto .json
    const events = data._embedded.events;
    // object destructuring de la parte de arriba  const {_embedded: {events}} = data;

    const handleEventItemClick = (id) => {
        console.log('evento clickeado ', id)
    }

    // es un maping o iteración de los eventos que importamos de nuestro archivo .json, despues 
    // se itera , cada iteracion nos va a devolver un elementos con el key

    // cuando se crea una funcion que va a llamar un jsx o regresa un componente se debe de llamar "render" por eso el nombre
    const renderEvents = () => {

        let eventsFiltered = events;
        
        if (searchValue.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        }
    
      return eventsFiltered.map((eventItem) => (
            <EventItem
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                // Usar optional chaining evita el error: Cannot read properties of undefined (reading '0')
                // cuando algun evento no trae imagenes en images.
                image={eventItem.images?.[0]?.url}
                onEventClick={handleEventItemClick}
                id={eventItem.id}
            />
        ));
    };

return (
    <div>
        Eventos
        {renderEvents()}
    </div>
);
};

export default Events