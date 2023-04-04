import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../App";
// estilos ccs. Puede que hubiera sido mejor haciendo un archivo css aparte, pero queria comprobar esta manera.
// lo hice asi tambien por que podiendo los estilos en linea crasheaba;
// aparte, no sabia si era conveniente hacer un archivo css para item otro para item list otro para itemlist CSSContainerRule, o si era mejor poner todo en el css de app


const itemStyles = {
  width: "200px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin:"10px"
};

const itemImageStyles = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  marginBottom: "10px",
};

const itemNameStyles = {
  fontSize: "1.2rem",
  margin: 0,
  marginBottom: "auto",
};

const itemPriceStyles = {
  fontSize: "1.1rem",
  margin: 0,
  marginBottom: "auto",
};

const itemLinkStyles = {
  backgroundColor: "#227C70",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  marginTop: "auto",
};

const itemLinkHoverStyles = {
  backgroundColor: "#1A513E",
};
//ACA SIGUE EL CODIGO
// Componente Item


const Item = ({ id, name, price, img }) => {

  const value = useContext(CartContext)
  console.log(value)
  //este estado está para q cambie el boton con un hover, No se si sera la mejor manera
  const [buttonStyles, setButtonStyles] = useState(itemLinkStyles);
  return (
    <div style={itemStyles}>
      <img src={img} style={itemImageStyles} alt={name} />
      <h2 style={itemNameStyles}>{name}</h2>
      <h3 style={itemPriceStyles}>${price}</h3>
      {/* generacion del link/boton detalles */}
      <Link
        to={`/item/${id}`}

        // siguiente parte para agregar el hover al boton
        style={buttonStyles}
        onMouseEnter={(e) => {
          setButtonStyles({ ...itemLinkStyles, backgroundColor: itemLinkHoverStyles.backgroundColor });
        }}
        onMouseLeave={(e) => {
          setButtonStyles(itemLinkStyles);
        }}
       >Detalles
     </Link>
    </div>
  );
};

export default Item;