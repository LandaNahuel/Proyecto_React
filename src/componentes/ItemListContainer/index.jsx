
import { useEffect, useState } from "react";
import Products from "../../mocks/products";
import "./itemListContainer.css"

import ItemList from "../ItemList";
import { CardGroup } from "react-bootstrap";



function ItemListContainer({categoryId, isCategoryRoute, }){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsPromise = new Promise((resolve, rejects) => 
        setTimeout(() => resolve(Products), 500)
        );

        productsPromise
            .then((response) => {
                if (isCategoryRoute) {
                    const productsFiltered = response.filter(
                        (product) => product.category === categoryId
                    );
                    setProducts(productsFiltered);
                } else {
                    setProducts(response);
                }
            }) 
            .catch((err) => console.log(err));
    }, [isCategoryRoute, categoryId]);


    return (
    <CardGroup>
    <div className="div-container">
        <h1>ITEM LIST CONTAINER</h1>
        <ItemList products={products}/>
    </div>
    </CardGroup>
    );

}
export default ItemListContainer;