import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext/CartContext'
import { db } from '../../services/firebase/firebaseConfig'
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'
import { useNotification } from '../../notification/Notification'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)


    const { setNotification } = useNotification()

    const navigate = useNavigate()
// armado de orden del cliente luego de la confirmacion
    const handleConfirm = async (userData) => {
        try{ 
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: 'Sebastian Zuviria',
                    phone: '123456789',
                    address: 'mi direaccion 123'
                },
                items: cart,
                total: total
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
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    
    if(loading) {
        return <h1>SE esta generando su orden...</h1>
    }


    //retorno para el browser
    return (
        <div>
            <h1>Checkout</h1>

            {/* <Form onConfirm={handleConfirm}/> */}
            { orderId ? <h2>El id de su orden es: {orderId}</h2> : <button onClick={handleConfirm}>Generar orden</button> }
        </div>
    )
}

export default Checkout