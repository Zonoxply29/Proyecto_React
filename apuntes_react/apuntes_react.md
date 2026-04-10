## La historia de React

Es una dependencia que se vasa en componentes mismos que se pueden reutilizar

![alt text](image.png)
---

![alt text](image-1.png)

---

## No es un framework
## No es una herramienta de backend 
## No es un remplazo de JS
## No es una solución completa

---

## Virtual DOM

VDOM es una copia del DOM real del Navegador
React hace las actualizaciones al VDOM y hace una actualización de una manera inteligente 

Mediante el *"Algoritmo de Reconciliación en Base a Fibras"*

![alt text](image-2.png)

Lo que hace el algoritmo es identificar que parte se tiene que actualizar
Si se llega a hacer una interaccion con el sitio web cambia el *"ESTADO"*
hace el calculo y depues hace la fase de *"RE-RENDEREO"*

Se encarga de actualizar el componente con un nuevo valor y unicamente se cambia el "Nodo" que se tiene que cambiar debido al calculo que hace el algoritmo 

Mas rapido que JQUERY o dependencias antiguas

Gracias al *VDOM* React se hizo tan popular ya que la representación virtual del DOM hace las actualizaciones primero de el VDOM y despues el DOM real del Navegador

---

## Ejemplo de un usuario empieza a escribir en un input

![alt text](image-3.png)
 
 - El valor del input cambia al momento que se interactua Y empieza a cambiar

 - React en el VDOM cambia el estado cambia el valor del input hace la diferencia , recorre el arbol al buscar el nodo que cambio y al final hace el "re-rendereo" 

 - Y el DOM de el navegador el *"BROWSER DOM"* de la imagen o el dom real solo se actualiza unicamente lo que se tiene que actualizar y por ende
 no se tienen actualizaciones directas y es un re-rendero mas rapido

 ## Dependencias Mas Utilizadas con React para su entorno

 - Vite -> Se encarga de empaquetar todo el codigo y generar una sola salida 

- Redux -> Manejo de "estados globales" toda la información que venga de una API , guardar en un objeto global para acceder 

- Zustand -> Manejo de estado globales mas simple 

- React Router ->  Maneja el Routing para cambiar de una pagina a otra, rutas , navegación entre paginas

- SWR -> React Hooks 

- React Hook Form -> Manejo optimo de los formularios en los componentes , para manejar la informacion de los inputs de algun formulario

- Tailwind -> Para los estilos es rapido y personalizable

- Styled Components -> Te ayuda a inyectar codigo css a un archivo JS para agregar valores o crear estilos para cada uno de los componentes de manera aislada o reusable

- React Spring -> Ayuda a crear animaciones de una manera fluida 

- React Testing Library -> Usado para Testing 

- NEXT JS -> Es el Framework para la web para JS , ya que lo ocupa react para que puedas desplegar componentes de react ya en la WEB

## COMO PENSAR EN COMPONENTES

Primero debemos saber como separar cada cosa dividir lo que tengamos en nuestra *"UI"* para que podamos crear y reutilizar algunos como se muestran en la imagen 

![alt text](image-4.png)

![alt text](image-5.png)

## DIVIDIR TANTOS COMPONENTES SE NECESITAN PARA NUESTRA UI
---

## JSX
Vino a remplazar la manera antigua de que se hacia al crear funciones para cuando el usuario interactura con el sitio

Es una nueva *SIntaxis* que no es propia de REACT y ayuda a colocar HTML dentro de los archivos HTML

Donde se incluye logica 

- Ejemplo de como se ve 

![alt text](image-6.png)

## Convertir HTML a JSX
Solo se tiene que copiar y pegar el HTML y seguir unas reglas

- Solamente se puede regresar un archivo como ruta

Solo puede haber un contenedor que regrese todo no puede haber multiples contenedores ya que se necesita un componente extra

- Todas las tags se tienen que cerrar , en JSX se tiene  que cerrar si no marca error 

- El uso de camelCase en todas las propiedad de las etiquetas HTML se debe de ocupar ejemplo

por ejemplo la etiqueta img en html se ocupa `className` porque es una etiqueta HTML y no detecta `class` por si solo

![alt text](image-7.png)

---
Para convertir componentes o etiquetas de html existen convertidores a JSX

## Componentes 

Para declarar componentes son funciones que regresan codigo de JSX simple

## Existe dos maneras de crear componentes con *Funciones Flechas* o *Funciones tradicionales*  lo mas comun son las {*Funciones Anonimas*}

```jsx

// Funcion Flecha 
const MyFirst Component = () =>{

};

// Funcion Tradicional
function MyFirstComponent2 (){

}

// Unicamente se pueden exportar una sola cosa
export default MyFirstComponent;

```

Lo que importa es lo que regresas y que viva dentro de una función, ya que una función cuando REGRESA codigo de JSX se convierte en un COMPONENTE

---

## Creando el primer Componente
- Al crear el componente debemos de crear el archivo con el nombre de el componente y la función deben de ser los mismos 

## El nombre de el archivo sera : MyFirstComponent.jsx

```jsx
const MyFirstComponent = () => {
  const hola = 'Hola';

  return <div>{hola} este es mi primer componente</div>;
};

export default MyFirstComponent;


```

Para este ejemplo solo creamos un div con el texto de Hola este es mi primer componente y lo vamos a exportar a la vista principal 

en el archivo principal con el nombre *App.jsx* necesitamos *IMPORTAR*
el componente a la vista que es la que se esta ejecutando

## Nombre de el archivo App.jsx

```jsx
// El nombre de el archivo va a depender de donde este ubicado el componente 

import MyFirstComponent from './MyFirstComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero"></div>
        <div>
            {/*Este es el componente que se estaria importando */}
          <MyFirstComponent />
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;

```
Aqui tenemos el ejemplo de como se esta *IMPORTANDO* el componente para esta vista que tenemos ya un contandor unicamente con el texto de este es mi primer componente .

---

## Reactividad

Es la capacidad que tienen los componentes de reaccionar o su reactividad ya que con una actualización el componente vuelve a llamarse a si mismo 

Ah actualizarse a si mismos

## State(Estados)

Los estados se componen de lo siguiente de una importacion de una libreria de react que es 

```jsx
import {useState } from 'react';
```

Es una funcion que se manda a llamar y te permite obtener un valor y setearlo(Actualizarlo) cada que se necesite

---

```jsx
import { useState } from 'react';

const MyFirstComponent = () => {
  const [value, setValue] = useState(0);

  const hola = 'Hola';

  {
    /* Este set time out se ocupo para que se llamara el valor del useState
setTimeout(() => {
    setValue(value + 1);
  }, 2000);
*/
  }

  return (
    <div>
      {hola} este es mi primer componente {value}
    </div>
  );
};

export default MyFirstComponent;
```

El uso de la funcion *useState nos ayuda a que podamos hacer reactivo el componente que se este tomando para mantener valores de estado y setearlo
para que se vuelva a llamar y sea el valor siempre actualizado

```jsx
{/*EL uso de los los valores iniciales y setters hacen que el componente se actualice de una manera inmutable   */}

const [value, setValue] = useState(0);
const [hola, setHola] = useState('hola');

 return (
    <div>
      {hola} este es mi primer componente {value}
    </div>
  );

```
## Inmutabilidad

CUando hace un cambio de estado 
- Evita errores no intencionados en nuestro código
- Juega un rol crucial al momento de actualizar un componente de React
- Facilita la implementacion de debugging , rehacer y deshacer

React ocupa la inmutabilidad usando *ArrayDestructuring* que es el setState, cuando se manda a llamar el estado despues el setter y cuando lo mandas a llamar internamente aplica la inmutabilidad , actualizando unicamente el estado de el componente sin afectar a todo el componente haciendolo de una manera limpia y eficiente

```jsx
const[,setState] = useState()
```

---

## Props

Los atributos que se agregan para los componentes propios como *propiedades* y para declararlos se deben de definir en la funcion en este ejemplo la de *"MyFirstComponent"* tenemos 
- propOne , propTwo , propThree

```jsx

const MyFirstComponent = ({ propOne, propTwo, propThree }) => {
  const [value, setValue] = useState(0);
  const [hola, setHola] = useState('hola');

  console.log('My FirstComponent Render');

  return (
    <div id="1" className="myclassname">
      {hola} este es mi primer componente {value}
    </div>
  );
};


```

En este caso para mandar la propiedad se pueden ser llamadas cuando el componente se esta utilizando 

se mandaria en este caso de la App.jsx

```jsx

function App() {
  const [value, setValue] = useState(0);
  
  const [count, setCount] = useState(0);

  setTimeout(() => {
    setValue(value + 1);
  }, 5000);

  console.log('App rendered');
  return (
    <>
      <section id="center">
        <div className="hero"></div>
        <div>
          <MyFirstComponent propOne={value} propTwo={2} propThree={{}} />
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

```
Si el componente prinicipal tuviera un componente reactivo , se le pasa el valor del estado en este caso a *propOne={value}* y cuando se le pasa el valor de la propiedad 


Cuando se actualiza la propiedad principal se actualiza tambien la desendencia en este caso propOne esta cambiando y haciendo un re-renderero pero solo se actualiza el elemento que tenemos no se actualiza todos los componentes


Entonces con los console log de 
```jsx
    console.log('App rendered');

    console.log('My FirstComponent Render');
```

Se actualiza el padre y por ende se actualiza los decendientes
y asi es como se actualiza embase a lo que se actualiza

OJO : Si se actualiza algo que no se debe de actualizar o es muy pesado el Performance puede llegar a bajar 

---
## Que es un Bundler

Cuando tenemos diferentes archivos imagenes, codigo etc archivos multimedia , empaquetar los archivos de el proyecto es lo que se le conoce como un Bundler


- Webpack te deja configurar y administrar herramientas de optimización
para empaquetar 

- Vite Es un bundler que ayuda a hacerlo mucho mas rapido que webpack se encarga de manera automatica de hacer el bundling

---

## Como funciona Vite
Vite tiene sus ventajas al momento de empaquetar

- inicio Instantanio del Servidor -> ESM es la capacidad de los navegadores de importar archivos al navegador 

Anteriormente no se podia hacer esto y se tenia que transpilar el código para que el navegador lo pudiera ocupar 

Por eso Vite tiene esa ventaja al momento de iniciar o levantar nuestro servidor o proyecto

- HMR (Hot Module Replacement) -> se refiere a cuando uno esta trabajando en un componente los cambios se ven de manera instantanea

Si uno hace un cambio el estado de el componente es mantenido y no afecta a los demas , por lo cual ayuda a detectar errores 

- Soporta Typescript, JSX y CSS

- Crea un Bundler optimizado utiliando *"Rollup"* -> es un *"Module Bundler "* de JS es el encargado de servir todas las dependencias con *"Nodemodules"* en Vite

## Diferencia de Vite a Webpack 

- Cuando se tiene un proyecto creado con webpack normalmente se tienen las *rutas y modulos que importa* y todos ellos son compilados cuando inicia el servidor 

- despues hace la *"compilacion o la transpilación"*

- Y despues Genera el Bundler que despues es cargado en el navegador para cuando sea necesario 

Esto es un proceso que se ocupa durante los ultimos años 

## Lo que hace vite 

Inicia el servidor y hace un "HTTP Request" solicita cierta pagina y esta pagina como esta utilizando modulos de *"ESM"* va y busca esa ruta y regresa esa pantalla en tiempo real la pantalla que se solicita


## Como se carga un proyecto de REACT en un unico archivo HTML
lo que pasa es que react al manejar los modulos lo unico que necesita es que lo conecte a un solo archivo html por eso solo tenemos uno para esa conexion desde el archivo `main.jsx` encontramos que obtiene el elemento del html con el id de *root* y desde ese lo ubica en el html y coloca el archivo `App.jsx`su contenido en el HTML obteniendo su id 


## PROYECTO TICKETMASTER
vamos a crear un buscador conectado a la API de Ticketmaster para buscar los eventos de algun artista

## Estructura de Proyectos React

*src* es la carpeta donde se va a ir guardando todos los elementos del proyecto 

- creacion de la carpeta *components* para los componentes que sean reusables que se puedan ocupar en cualquier parte de la web 
- de components puede ser : navbar, footer, buscador


*views* o algunas personas le dicen *pages*
- es donde van a ir las rutas o paginas del proyecto por ejemplo /events, entonces se vincularia con el componente de events

*routes* guardar las rutas o configurar el ruteador del proyecto , si el proyecto escala o tenga mas caracteristicas complejas 

*utils* se agregan todas las utilerias -> funciones que se puedan reutilizar en el proyecto o importarlas 

*state* hace referencia a la informacion global de el proyecto a la informacion de la API o la estructura que viene de una API

## Creacion de Primer Componete

Se creo la Sub-Carpeta de el componente de Navbar esta porque es un componente que se va a reutilizar en otras vistas

## Renderizado Condicional 

Se utiliza para cuando los componentes mantienen cierta logica , para cuando queremos mostrar algo o no con una condicional
se hace el uso de  `if`, `&&`, `? :`

 ## El uso de null
  Si se regresa null no va a mostrar el contenido que le estas colocando osea nada 

```jsx
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;

```

Si `isPacked` es verdadero, el componente no devolverá nada, null. En caso contrario, devolverá JSX para ser renderizado.
 
Tambien se podria ocupar para algun elemento que queramos poner de cargando o un loder


## El uso de Operador Ternario Condicional
Es una manera mas simple o corta de crear la condicional

El codigo dice si la variable isPacked es verdadero me regresa el elemento con una palomita de lo contrario no lo regresa


```jsx
if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;

```

Se podria escribir asi

```jsx
return (
  <li className="item">
    {isPacked ? name + ' ✅' : name} 
  </li>
);
```
Se acorta y se escribe de una manera mas facil
- la condicional dice 

*si es packed es igual a true me regresa el nombre con la palomita si no me va a regresar solo el nombre*

## Operador Logico AND(&&)
 
 Para el uso de este operador debemos de verificar que sea un valor *booleano* como en el siguiente caso 
 si no es un booleano coloca un *0* y eso estaría mal 

 Que hace la diferencia a un Operador ternario el código convive con el que ya tenemos, porque solo aplicaría
 si vamos a mostrar algo que viva si o si con la otra condicional 

 Si tenemos esta condicional con un elemento que no queremos mostrar se va a mostrar a la par de el elemento a condicionar

```jsx
return (
  <li className="item">
    {name} {isPacked && '✅'}
  </li>
);
```
*si isPacked, entonces (&&) renderiza la marca de verificación, si no, no renderiza nada.”*

## Renderizado de Listas 

Cuando se hace el uso de una API o información dentro de un arreglo y se quiere colocar o convertir en alguno de nuestros componentes , debemos de hacer un *renderizado dinamico*

Para iterrar los elementos de nuestro arreglo se ocupa `map`

Para mostrar informacion en un listado de elemnentos cuando vienen de una API o el usuario empiece a nutrir de información

- Mover los datos en un array es lo primero que se debe de hacer

```jsx

const people = [
  'Creola Katherine Johnson: matemática',
  'Mario José Molina-Pasquel Henríquez: químico',
  'Mohammad Abdus Salam: físico',
  'Percy Lavon Julian: químico',
  'Subrahmanyan Chandrasekhar: astrofísico'
];

```
---

- Mapea los miembros de people en un nuevo array de nodos JSX, listItems:

El mapign puede ir directamente en la constante o tambien en el render de el componente 

```jsx

const listItems = people.map(person => <li>{person}</li>);

```
* Se hace uso de el callback para person devuelva los elementos o item

Un problema comun que aparece es que *cada uno de los elementos se les tiene asignar un atributo key*

La manera correcta de agregar una key a cada componente se debe de hacer una concatenacion y colocar un nombre que distinga que es lo que se esta trabajando que datos en este caso como son nombre de personas se coloco

```jsx

const listItems = people.map(person => <li key ={`array-people-item-${people}`}>{person}</li>);

```
la key siempre tiene que ir si no se va a comportar de mala manera nuestros datos

---

- Devuelve listItems desde tu componente envuelto en un <ul>:
```jsx

return <ul>{listItems}</ul>;

```

## Filtrar ARRAYS DE OBJETOS o JSON

```jsx

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'matemática',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'químico',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'físico',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'químico',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrofísico',
}];

```
Debemos de crear para este caso de la misma forma pasada solo que al ser un objeto accedemos a los elementos de esta manera 
```jsx

const peopleItems = people.map((person => <li key ={`array-person-item-${person.id}`}>${person.id : person.name}</li>);

```

## MANEJANDO EVENTOS (EVENT HANDLER)

Los controladores de eventos son tus propias funciones que se ejecutarán en respuesta a interacciones como hacer clic, hover, enfocar inputs en formularios, entre otras.

```jsx

export default function Button() {
  function handleClick() {
    alert('¡Me hiciste clic!');
  }

  return (
    <button onClick={handleClick}>
      Hazme clic
    </button>
  );
}

```
La manera correcta de pasar el nombre de la funcion debe de ser de la forma que viene en el ejemplo

- Es incorrecto si se llama de la siguiente manera
```jsx

<button onClick={handleClick()}>

```
Si hacemos esto nos estaria llamando infinitas veces a la funcion y por ende se trabaria el sitio

- Para cuando se escriba codigo en linea lo correcto es 
```jsx
<button onClick={() => alert('...')}>

```
- Lo incorrecto y que provocaria que cada vez que se renderize el componente se trabe seria esto
```jsx
<button onClick={alert('...')}>

```

## Pasando Eventos como Props
Cuando los nombres de los EVENTOS sean mandados por propiedad empiecen por el prefijo oN (Onclick,OnEvent) como buena practica

> [!TIP]
No es mala practica pasar el evento como propiedad 

## Event Bumbling
Nos referimos  en casos donde tengamos anidados algunos eventos un evento en un elemento hijo , ese evento suve hacia sus elementos padres provocando una "Propagación"

para evitar esto existe una forma para que no suceda
