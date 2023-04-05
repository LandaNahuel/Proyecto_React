import { CardGroup, CardImg } from "react-bootstrap";
import './index.css';
import Card from 'react-bootstrap/Card';




function Item({product}) {
    return (
      <div className="cardo">
        <img className="cardo-img" src={product.image} />
        <h1>{product.nombre}</h1>
        <h2>{product.autor}</h2>
        <h3>{product.categoria}</h3>
        <h4>{product.precio}</h4>
        <p>{product.descripcion}</p>
      </div>
    );
}

export default Item;

