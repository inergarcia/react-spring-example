# Anima tu proyecto react con `react-spring`

A la hora de incluir animaciones en nuestro sitio web tenemos un sinfín de posibilidades. Quisás lo más común seria hacerlo con css puro o con un preprocesador. Hoy les traigo una librería que no solo anima un componente en tu sitio web, sino que lo hace utilizando físicas de resorte. Te invito a descubrir esta libreria ...

[React Spring](https://www.react-spring.io/) a diferencia de otras librerías de animaciones para react hace uso de animaciones basadas en física de resortes, como lo que encontrarías al hacer aplicaciones nativas para iOS o Android. Las animaciones basadas en física nos permiten recrear de manera sencilla como un objeto se mueve en la vida real sin tener que definir tiempo o curvas de suavizado.

### Lo que aremos ...

En el ejemplo que les traigo usaremos `react-spring` para animar una simple lista de nombres.

Lo primero que necesitas es instalar `react-spring` a tu proyecto de React. Para ello puedes emplear uno de los siguientes comandos en la consola dependiendo de tu instalador de paquetes preferido:

```
$ npm i react-spring
``` 


```
$ yarn add react-spring
``` 

Luego de instalado crearemos un nuevo componente y lo llamaremos **List**.

 Lo primero que haremos será importar las librerias necesarias:

```JavaScript
//Dependencia de react
import React, {useState} from 'react' 
//Dependencias de react spring
import {useSpring, a, config} from 'react-spring'
```

`useSpring` recibe un objeto como parámetro y dentro del objeto debemos especificar otros objetos con llaves específicas que serán nuestras propiedades. Hoy veremos tres de las propiedades principales que recibe este objeto.

1. `to`: Indica destino de la animación (**obligatorio**)
2. `from`: Indica el inicio de la animación. De no ser especificado se tomaran los valores iniciales de la propiedad css.
3. `config`: Indica el comportamiento de la animación

`useSpring` devolvera un objeto con los valores de las propiedades css que modifiquemos, por ejemplo si modificamos el `width` y el `transform` devolverá un objeto con las propiedades width y tranform.

## Creando nuestro componente

A continuación creamos un componente sin estado:

```JavaScript
const List = () => {
    const [data] = useState(['Juan', 'Pedro', 'Raul', 'Fernando', 'Antonio'])
    return (
        <div>
            {
                data.map((name, index) => {
                    return(
                        <ul className="list">
                            <li key={index} className="item">{name}</li>
                        </ul>
                    )
                })
            }      
        </div>
    )
}

export default List
```

Dentro del componente declaramos una constante haciendo uso de `useSpring`

```JavaScript
const animation = useSpring({
        from: {transform: 'scale(0)'},
        to: {transform: 'scale(1)'}
    })
```

Ahora para poder utilizar esta animación debemos utilizar el componente `a` de esta manera:

```html
<a.li style={animation} key={index} className="item">{name}</a.li>
```

A la etiqueta `li` la sustituimos por `a.li` y a la propiedad `style` le asignamos el objeto creado.

El código del componente animado quedaría de la siguiente manera:

```JavaScript
import React, {useState} from 'react'
import {useSpring, a, config} from 'react-spring'

import './List.css'

const List = () => {
    const [data] = useState(['Juan', 'Pedro', 'Raul', 'Fernando', 'Antonio'])
    
    const animation = useSpring({
        from: {transform: 'scale(0)'},
        to: {transform: 'scale(1)'}
    })

    return (
        <div>
            {
                data.map((name, index) => {
                    return(
                        <ul className="list">
                            <a.li  style={animation} key={index} className=" item">{name}</a.li>
                        </ul>
                    )
                })
            }      
        </div>
    )
}

export default List
```

El archivo `List.css` se empleó para agregar algunos estilos a la lista:

```css
.list{
    display: flex;
    list-style: none;
    flex-wrap: wrap;
}

.item{
    border: 1px solid purple;
    padding: 0.2em 0.8em;
    margin: 5px;
    color: orchid;
    font-weight: bold;
    cursor: pointer;
}
```

También se puede utilizar en el objeto `useSpring` la propiedad `config` para tener mayor control de la animación ejemplo:

```JavaScript
const animation = useSpring({
  from: {transform: 'scale(0)'},
  to: {transform: 'scale(1)'},
  config: {
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
  }
})
```

Cabe resaltar que la libreria ya trae algunas configuraciones predefinidas y se pueden utilizar primero importando `config` y luego accediendo a las configuraciones del objeto, ejemplo:

```JavaScript
const animation2 = useSpring({
    from: {transform: 'translateX(-100%)'},
    to: {transform: 'translateX(0)'},
    config: config.wobbly
})
```
### Concluciones
De esta manera podemos dotar a nuestra aplicación de animaciones mucho mas reales utilizando físicas de resorte. Espero que este articulo haya sido de tu agrado. Cualquier duda o sugerencia no dude en comentar.

Puede acceder al proyecto completo en [Github]()

