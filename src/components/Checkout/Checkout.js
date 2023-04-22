import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext/CartContext'
import { db } from '../../services/firebase/firebaseConfig'
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'
import { useNotification } from '../../notification/Notification'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext/AuthContext'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const [modoPago, setModoPago] = useState("");
    const { cart, total, clearCart } = useContext(CartContext)
    
    const { user, email } = useAuth()

    const { setNotification } = useNotification()
    
    function cambiarFormulario(e) {
        setModoPago(e.target.value);
    }

    const navigate = useNavigate()
  // armado de orden del cliente luego de la confirmacion
    const handleConfirm = async (formCheckData) => {
        formCheckData.preventDefault()


    



let payment = {};

if (formCheckData.target.payment.value === 'credit') {
  payment = {
    payment: 'tarjeta',
    number: formCheckData.target.creditNumber.value,
    name: formCheckData.target.creditName.value,
    expires: formCheckData.target.expiration.value,
    cvv: formCheckData.target.cvv.value,
  };
} else {
  payment = {
    payment: formCheckData.target.payment.value,
  };
}
//bueno ideas para resolver este menu y el check aut puedo hacer usestate que me permita setear el formulario, aunque no cambiaria el fallo a la hora de hacer el documento. la otra es crear el objeto dreditPayment por encima del try
        try{ 
            setLoading(true)
            const objOrder = {
                
                buyer: {
                    name: formCheckData.target.name.value,
                    email: formCheckData.target.email.value,
                    phone: formCheckData.target.phone.value,
                    address: formCheckData.target.address.value
                },
                payment:payment,
                items: cart,
                total: total,
               
            }
         
            const ids = cart.map(prod => prod.id)

          // consulta a la base de datos discriminado por los id del carrrito que obtiene de la const ids arriba
         //de esta manera se optimizan las consultas, ya que no se consulta a firestore multipres veces
            const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const productsAddedFromFirestore = await getDocs(productRef)
           // constante que mantiene los productos consultados de firestore
            const { docs } = productsAddedFromFirestore
           //el batch que va a permitir ejecutar al mismo tiempo las funciones de la compra sobre firestore, para q no haya errores en el stock, por ejemplo ante compras simultaneas
            const batch = writeBatch(db)
            const outOfStock = []
         // iteracion que compara entre el stock del carro y el stock en la base de datos
            docs.forEach(doc => {
                //stock del carrito
                const dataDoc = doc.data()
                //stock de base de datos
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                                                       //evitamos undefined, si devuelve true sigue con la propiedad
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    //si los stock estan ok, actualizo a la referencia stock de la base de datos:
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } //si no, pusheo a un array de productos fuera de stock:
                else {
                    outOfStock.push({ id: doc, ...dataDoc})
                }
            })
            //si hay algo en el array de productos fuera de stock el else muestra un error, sino genera la orden actualizando la base de datos
           
            if(outOfStock.length === 0) {
                batch.commit()
                
                const orderRef = collection(db, 'orders')
                //creacion del documento orden
                const orderAdded = await addDoc(orderRef, objOrder)
              
                clearCart()
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate('/')
                }, 5000)

            } else {
                setNotification('error', 'Hay productos que no tienen stock disponible')
            } 
        } catch (error) {
            setNotification('error', 'Hubo un error generando la orden')
         
        } finally {
            setLoading(false)
        }
    }
    
    if(loading) {
        return <h1>SE esta generando su orden...</h1>
    }


    //retorno para el browser
    return (
   
    <div className="checkout">
      <h1>Checkout</h1>
      {
      user?<h2>  {`Hola ${user}, para estar seguros, tu email es: ${email}`}</h2>
      : <h2>{`Para estar seguros, tu email es: ${email}`}</h2>
      }
        
      
      
      <form onSubmit={(formCheckData)=>handleConfirm(formCheckData)}>
        <label htmlFor="nombre">Nombre completo:</label>
        <input type="text" id="nombre" name="name" defaultValue={'mi nombre'} required /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" defaultValue={'mi@mail.com'} required /><br />

        <label htmlFor="address">Dirección:</label>
        <input type="text" id="address" name="address" defaultValue={'mi casa'} required /><br />

        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="phone" defaultValue={4539000} required /><br />



        <label htmlFor="payment">Modo de pago:</label>
        <select id="payment" name="payment" onChange={cambiarFormulario} defaultValue='cash' required>
          <option value="">Selecciona una opción</option>
          <option value="cash">Efectivo contra reembolso o transferencia bancaria</option>
          <option value="credit">Tarjeta </option>
        </select><br />
     {modoPago === "cash" && (
        <div className="form-cash">
          <p>Seleccionaste efectivo contra reembolso. No necesitas ingresar más información. Nos pondremos en contacto contigo para definir la entrega. Recuerda que solo hacemos envios, con esta modalidad de pago, en la ciudad de La Plata</p>
        </div>
      )}
        
     {modoPago === "credit" && (
            <div className="form-credit">
              <label htmlFor="image.png">Número de tarjeta:</label>
              <input type="text" id="creditNumber" name="creditNumber" defaultValue="1"/><br />
              <label htmlFor="image.png">Nombre en la tarjeta:</label>
              <input type="text" id="creditName" name="creditName" defaultValue=''/><br />

              <label htmlFor="expiration">Fecha de vencimiento:</label>
              <input type="month" id="expiration" name="expiration" defaultValue=''/><br />

               <label htmlFor="cvv">CVV:</label>
             <input type="password" id="image.png" name="cvv" defaultValue=''/><br />

            
            </div>
          )}

        <input type="submit" value="Comprar" />
      </form>
     
     
            {/* <Form onConfirm={handleConfirm}/>  */}
            {/* { orderId ? <h2>El id de su orden es: {orderId}</h2> : <button onClick={handleConfirm}>Generar orden</button> } */}
        </div>
    )
}

export default Checkout