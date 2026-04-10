// EventItem recibe props como objeto; se usa destructuring y fallbacks
// para evitar render roto cuando falte algun campo del evento.
const EventItem = ({ info, id, name, image, onEventClick }) => {
    // funcion que detiene la posible propagacion de un evento padre
    const handleSeeMoreClick = (event) => {
        event.stopPropagation()
        onEventClick(id);
    }
    return (
        <div>
            <img src={image || ""} alt={name || "Evento"} width={200} height={200}></img>
            <h4>{name}</h4>
            <p>{info || "Sin informacion disponible"}</p>
            <button onClick={handleSeeMoreClick}>Ver mas</button>
        </div>
    );

};
export default EventItem;