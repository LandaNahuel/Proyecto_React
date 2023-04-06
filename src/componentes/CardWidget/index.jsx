import { useContext } from "react";
import { Context } from "../../context";
import "./cardWidget.css";


export function CardWidget(){
    const {itemsAddCant} = useContext(Context)
    return (
    <div >
        <img className="car" src="../public/canasta.jpeg"/>
        <span>{itemsAddCant.length}</span>
    </div>
    );

}

export default CardWidget;
