# taller-6-API-REST
Johan Jimenez
En esta aplicación, tenemos una lista de tareas que se almacena en memoria. La aplicación proporciona las siguientes funcionalidades:

Obtener todas las tareas mediante una solicitud GET a /api/tasks.
Obtener una tarea específica por su ID mediante una solicitud GET a /api/tasks/:id, donde :id es el ID de la tarea.
Crear una nueva tarea mediante una solicitud POST a /api/tasks con un objeto JSON que contenga los campos title y description.
Actualizar una tarea existente mediante una solicitud PUT a /api/tasks/:id con un objeto JSON que contenga los campos title, description y completed.
Eliminar una tarea mediante una solicitud DELETE a /api/tasks/:id, donde :id es el ID de la tarea.
