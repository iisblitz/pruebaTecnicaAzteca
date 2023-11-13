#Proyecto "Prueba técnica Banco azteca"
##Asignación:
Configuración del Proyecto React:

Crea un nuevo proyecto React usando Create React App o una herramienta similar.
Asegúrate de limpiar el proyecto y mantener solo los componentes necesarios.
Consumo de la API:

Utiliza el método GET para consumir la API https://jsonplaceholder.typicode.com/posts.
Muestra los datos de los posts en una tabla.
Implementa un buscador para filtrar los posts por título.
Implementa la paginación de la tabla, mostrando 10 posts por página.
Crea un formulario que incluya campos para userId, id, title, body.
Utiliza el método POST para enviar los datos del formulario a https://jsonplaceholder.typicode.com/posts. Asegúrate de que todos los campos del formulario sean obligatorios.
Entregable:

Sube el proyecto a un repositorio de GIT.
Incluye un archivo README con los datos necesarios para probar el proyecto.
Comparte la URL del repositorio para la revisión.

##Procedimiento:
1.- Se genera el proyecto en Git bash con el comando "npx create-react-app prueba-tecnica-frontend-davidgonzalez.

2.- se eliminan los archivos de template y el modo prueba estricta de react.

3.- se instala axios.

4.- se genera un useEffect donde se consulta a travez de axios el sitio web determinado por el proyecto, y se guarda en el estado de react como setPosts.

5.- se genera el metodo add post, el cual va a concatenar variables de diferentes estados y enviarlos por axios.post.

nota, se usa try catch con lo cual si cualquiera de los dos metodos falla se contará con un mensaje de error.

6.- se generan variables para llevar el control de la paginación:
index of last post - nos va a decir el indice del primer post de la siguiente pagina.
index of first post - nos va a decir el indice del primer post de la siguiente pagina.
current posts - un sub array con los posts entre los indices
paginate - metdo para actualizar la pgina actual en el estado de react.
filtered posts - se usa el metodo de filtrado de arrays para dejar solo los posts que incluyan cierto numero de busqueda

7.- return - aqui se hace el jsx, es decir el mix de elementos de html y js para generar una pagina en react
h1- titulo
input- captura el elemento para hacer el filtrado
button - ejecuta el llamado para ajustar la paginación
tabla se usa para renderizar los elementos de la consulta - id - title -
body
tr define una fila cada th es un header
tbody es el cuerpo de la tabla con una funcion map para representar todos los elementos de la consulta hecha en axios
button - anterior y siguiente para controlar la paginacion

h2 subtitulo para el formulario de captura
input - aqui se fijan los valores de las variables de estado que se mandaran al axios post
button - agregar - llama la funcion addPost, la cual hace una validacion de que los campos estén llenos y se envia por axios
