
import { useEffect, useState } from "react";
import Products from "../../mocks/products";
import ItemList from "../ItemList";
import "./itemListContainer.css";



function ItemListContainer({greetings}){
    const [products, setProducts] = useState([])
    useEffect(() => {
        const productsPromise = new Promise((resolve, rejects) => 
        setTimeout(() => resolve(Products), 2000)
        );

        productsPromise
            .then((response) => setProducts(response)) 
            .catch((err) => console.log(err));
    }, [])

    console.log({products});

    return (
    <div>
        <h1>ITEM LIST</h1>
        <ItemList products={products}/>
    </div>
    );

}
export default ItemListContainer;