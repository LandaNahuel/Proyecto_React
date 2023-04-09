import { useContext } from "react";
import { Context } from "../../context";


function ItemDetailContainer(){
    const {onAdd, onRemove} = useContext (Context);

    return (
    <div>
        <h1>ITEM DETAIL CONTAINER</h1>
        <button onClick={onAdd}>Agregar al carrito</button>
        <button onClick={onRemove}>Eliminar del carrito</button>
    </div>
    );

}
export default ItemDetailContainer;