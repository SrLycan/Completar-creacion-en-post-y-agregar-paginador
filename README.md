Tarea Semana 7 – JSON Server + Formulario POST + CRUD
Descripción de la tarea

En esta actividad se amplió el proyecto integrando JSON Server como backend simulado. Se agregó un formulario para crear un nuevo post utilizando el método POST hacia el endpoint /posts.

Funcionalidades agregadas:

Se agregó un enlace para regresar al listado general de posts desde el formulario.

Se implementó validación para impedir el envío si los campos titulo o contenido están vacíos.

Los campos se limpian automáticamente luego de realizar el POST.

Se muestra un mensaje confirmando la creación del post o se redirige al listado.

Se implementó un sistema de paginación usando los parámetros _page y _limit de JSON Server.

Reflexión sobre el uso de endpoints en clase

Durante la clase trabajamos con endpoints REST, principalmente los métodos:

GET para obtener datos

POST para crear nuevos registros

PUT/PATCH para editar

DELETE para eliminar

Esto permitió simular un backend real y comprender cómo interactúan las aplicaciones frontend con servicios REST. JSON Server resultó muy útil para aprender estos procesos sin necesidad de un servidor completo.

Comprender endpoints ayuda a estructurar mejor nuestras aplicaciones y a separar responsabilidades entre frontend y backend.

Explicación de CORS y cómo se resolvió en clase

CORS (Cross-Origin Resource Sharing) es una política de seguridad de los navegadores que evita que una página en un dominio realice peticiones a otro dominio diferente sin permiso.

Ejemplo de bloqueo típico:

Access to fetch at 'http://localhost:3000/posts' from origin 'http://localhost:5173' has been blocked by CORS policy


En clase lo solucionamos porque JSON Server permite habilitar CORS automáticamente, por lo que no tuvimos que configurar encabezados manuales. Simplemente ejecutándolo con:

json-server --watch db.json --port 3000


JSON Server envía encabezados como:

Access-Control-Allow-Origin: *


Esto permite que el frontend (por ejemplo Vite en puerto 5173) pueda consumir la API sin restricciones.