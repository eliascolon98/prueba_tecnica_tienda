# prueba_tecnica_tienda
Para esta prueba se propondrá una situación la cual seria resulta a través de una API, que satisfaga los casos de uso descritos mas adelante, cabe destacar que para la solución de dicho problema NO se espera contar con un UI que implemente la API solicitada.
Para esta prueba se propondrá una situación la cual seria resulta a través de una
API, que satisfaga los casos de uso descritos mas adelante, cabe destacar que
para la solución de dicho problema NO se espera contar con un UI que
implemente la API solicitada.
Situación propuesta:
Daniela, tiene una tienda de barrio que con los años ha crecido, actualmente
cuenta con 5 empleados, y está presentando problemas al hacer las cuentas
finalizando los días de trabajo, en donde más a presentado problemas es en el
cruce de las ventas que se realizaron en el día junto al dinero que debería estar al
final del día.
Actualmente Daniela y sus empleados, cada que realizan una venta escriben cual
fue el producto que se vendió y valor correspondiente a dicho producto;
ocasionando que uno de los problemas más frecuentes sea que algún empleado o
ella misma escriban mal el producto o su costo.
Requerimientos:
- Administrar las ventas
- Administrar los productos
- Administrar los usuarios
- Hacer cierres diarios
- Hacer un balance mensual
Como requerimiento para la aplicación habrán ciertas URLS que cubrirán los
casos de uso descritos más adelante, hay que tener en cuenta que en los casos
de uso se especifica el tipo de usuario que tiene permitido realizar cada operación.
Para satisfacer que cada usuario solo tenga acceso a las URLS que se requieren
se debe enviar el tipo de usuario en un header &#39;Auth: &lt;id_usuario&gt;&#39;, el servidor
web debe poder tomar esta info y determinar si el usuario tiene o no acceso a esta
información
retornando códigos http 401 o 403 según sea el caso.
Ejemplo de solicitud con auth header
HTTP FORMAT
GET /api/v1/sales HTTP/1.1
Host: localhost:3000
Auth: 123456789
CURL

curl --location --request GET &#39;localhost:3000/api/v1/sales&#39; --header &#39;Auth:
123456789&#39;
Tipos de usuario que tienen permitido hacer las operaciones, basado en el rol que
tenga el usuario
admin = (*)
employee = (+)
everyone = (&#39;)
Casos de uso
- Administrar las ventas
(Por facilidad una compra siempre va a implicar a solo un producto)
(&#39;) Crear venta [5pt]
(*) Actualizar venta [5pt]
(*) Eliminar venta [2pt]
(&#39;) Listar ventas [1pt]
- Administrar los productos
(*) Crear productos [5pt]
(&#39;) Listar productos [5pt]
- Administrar los usuarios
(*) Crear usuarios [5pt]
(*) Listar usuarios [1pt]
(*) Borrar usuarios [3pt]
(*) Asignarle un rol a un usuario [3pt]
(*) Crear roles [5pt]
- Hacer cierres diarios
(*) Entregar el valor total de ventas [5pt]
en un dia especifico
- Hacer un balance mensual
(*) Entregar el valor total de ventas en un mes [5pt]
----------------------------------------------------------
Total [50pt]

La base de datos que se usara para la resolución de este problema, será
PostgresSQL 12 y el diagrama se entrega adjunto en el presente correo
La base de datos debe ser inicializada con los productos adjuntos en el archivo
products.json
CONSIDERACIONES DE LA PRUEBA

La prueba debe realizarse en NodeJs
Criterios de evaluación:
manejo del lenguaje 3pt
manejo del framework web 3pt
manejo del repositorio (hacer commits para cada caso de uso) 3pt
uso de herramientas externas (postman/swagger) 1pt
cumplimiento de requerimientos 5 pt
patrones de diseño de la aplicación (se sugiere clean arquitecture con SOLID)
5pt (adicionales)
Puntaje máximo (Sin adicionales): 15
Opcional: Puedes dejar un Dockerfile para desplegar tu aplicación aplicación en
un contenedor.
Al final se requiere que en el repositorio (urls a repositorio publico bit bucket, gitlab
o github)
Se agregue una colección exportada desde postman con las diferentes urls que
contiene tu servicio o el archivo oas en el caso de usar swagger,
También se deben agregar las diferentes sentencias DDL y DML que se haya
usado para la creación de la Base de datos y para creación de los productos
