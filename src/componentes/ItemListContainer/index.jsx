import "./itemListContainer.css";

function ItemListContainer({greeting, pokemon}){
    return (
    <div>
        <h1>{greeting}</h1>
        <p> {pokemon?.name??"no se encontro el pokemon "}</p>
    </div>
    );

}
export default ItemListContainer;