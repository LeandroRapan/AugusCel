const ItemDetail = ({name, price, img, description, stock}) => {
    return(
    <div>
    <h2>{name}</h2>
    <img src={img} alt={name} style={{width: 200}}/>
    <p>Precio: ${price}</p>
    <p>Stock:{stock}</p>
    <p>Descripcion: {description}</p>
  </div>)
}

export default ItemDetail