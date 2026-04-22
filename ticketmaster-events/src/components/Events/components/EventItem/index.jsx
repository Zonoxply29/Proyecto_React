import styles from './Eventitem.module.css'

// EventItem recibe props como objeto; se usa destructuring y fallbacks
// para evitar render roto cuando falte algun campo del evento.

const EventItem = ({ info, id, name, image, onEventClick }) => {
    // funcion que detiene la posible propagacion de un evento padre
    const handleSeeMoreClick = (event) => {
        event.stopPropagation()
        onEventClick(id);
    }
    return (
        <div className={styles.eventItemContainer}>
            <img src={image || ""} alt={name || "Evento"} width={200} height={200}></img>
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info || "Sin informacion disponible"}</p>
                <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>Ver mas</button>
            </div>
        </div>
    );

};
export default EventItem;