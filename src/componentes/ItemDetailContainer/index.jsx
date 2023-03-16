import { useEffect, useState } from "react";
import Products from "../../mocks/products";
import ItemDetail from "../ItemDetail";



function ItemDetailContainer({greetings}){
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
        <ItemDetail products={products}/>
    </div>
    );

}
export default ItemDetailContainer;