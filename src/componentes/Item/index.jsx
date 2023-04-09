import './index.css';
import { NavLink } from "react-router-dom";


function Item({product}) {
    return (
      <div className="cardo">
        <img className="cardo-img" src={product.image} />
        <h1>{product.nombre}</h1>
        {/*<h3>{product.autor}</h3>
        <h3>{product.categoria}</h3>*/}
        <p>{product.descripcion}</p>
        <button>Mas Info</button>
        <Nav.Link href="item"><NavLink to={"/item/das"}>Item</NavLink></Nav.Link>
      </div>
    );
}

export default Item;

