# Redux Básico

Es un patrón para el manejo de la información.

Ideas princiaples:

- Toda la data de la aplicación se encuentra en una estructura previamente definida
- Toda la información se encontrará almacenada en un único lugar llamado `STORE`
- El `STORE` jamas se modifica de forma directa
- Interacciones de usuario y/o código, dispara acciones que describen qué sucedio.
- El valor actual de la información de la aplicación se llama estado `STATE`
- Un nuevo estado es creado, en base a la combinación del viejo estado y la acción por una función llamada `REDUCER`
- `Accion` + `Viejo estado` => `Reducer` => `Nuevo estado`

### Descripción ACTION - REDUCER - STATE - STORE

#### ACCION

- Es la única fuente de información que se envía por interacciones de usuario o programa.
- Por lo general, se busca que las acciones sean lo más simple posible.
- Una acción tiene únicamente 2 propiedades:
  - `type` la acción o tarea a realizar `completar_tarea`
  - `payload` es opcional, es la menor cantidad posible de información para realizar dicha tarea.

#### REDUCER

- Es una función que únicamente recibe 2 argumentos.
- Siempre retorna un estado
- `Reducer (oldState, action)` => `Nuevo estado`

#### STATE

- El `state` es de sólo lectura.
- Nunca se mutara el `state` de forma directa
- Hay funciones prohibidas de javascript `push` , manipulación directa del objeto `oldState`

#### STORE

Es un objeto que tiene las siguientes responsabilidades:

- Contiene el estado de la aplicación.
- Permite la lectura del estado via: `getState()`.
- Permite crear un nuevo estado utilizando: `dispatch(ACTION)`
- Permite notificar de cambios de estado via: `subscribe()`
