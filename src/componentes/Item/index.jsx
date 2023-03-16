function Item({product}) {
    return (
    <div>
        <h1>{product.name}</h1>
        <h1>{product.autor}</h1>
        <img src={product.image}/>
        <p>{product.price}</p>
    </div>
    );
}

export default Item;