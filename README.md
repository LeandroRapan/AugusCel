## AugusCel
Un e.commerce creado a partir de REACT y con base de datos en firebase.
los componentes están dividios entre los que son de ejecución y los que tienen que escribir sobre el DOM.
en el encontramos el listado general de productos, al hacer click sobre uno que nos interese, vamos a ver sus detalles. Si el mismo modelo tiene diferentes tipos o colores, se selecciona esto; la cantidad.
El cart, donde uno puede ver el listado de productos a comprar.
El checkout donde se realiza la orden y se guarda en base de datos. COmo el dominio esta enfocado para una ciudad en particular, se pueden relizar pagos contra reembolso en la misma. Pero, si se decide por un pago con tarjeta (lo que habilita el envio con correo a todo el pais), se despliega del formulario un menu desplegable. Idealmentee este menu deberia ser un formulario aparte donde se compre con tarjeta directamente usando los servicios de un banco... como no se hacer eso, por ahora, a modo de prototipo, el mismo formulario que genera la orden guarda los datos de la tarjeta en el servidor.
tiene un sistema de log-in que permite hacer una cuenta con us/pass como tambien entrar con la cuenta de google.
los datos de inicio de sesion se guardan en un session storage y carrito, aunque este ultimo me gustaria que si esta log el usuario se acceda al local storage.
EN la orden se valida la compra desde un usuario activo logeado, sin embargo la pagina permite compras desde sin login. La idea es que los usuarios consigan beneficios especiales como el acceso a compras mayoristas o incluso formar parte de una red de distribucion en el futuro. Los usuarios tienen ya acceso a una wishlist y a un apartado mis compras donde puedan revisar sus ordenes, idealmente aqui se agregaria el codigo de seguimiento del producto por coreo, el id de la compra. Los usuarios no resgistrados pueden revisar lo mismo buscando el pedido llenando el form dentro del apartado mis compras.

## Los componentes son:
 [Item]
item detail
item detail container se comunica con el servidor buscando el producto de la id correspondiente, si no lo encuentra devuelve una notificacion de error
item list
item list container
cart
cartwidget
checkout
counter
login
navbar

como context tiene
auth cntext
cart context

tiene una carpeta con un unico archivo notification
notification

y en services tiene la configurcion de firebase


Pensaba incluir un usuario con derechos de escritura que pudieran 
hay variables de entorno para ajustar objetos. estan en la carpeta adaptadores.