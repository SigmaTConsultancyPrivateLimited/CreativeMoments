import React, { useEffect, useState } from 'react';
import JsonData from './Data/data.json';
import Product from '../Product';
import Card from './Card/Card';

const Shop = () => {
    const [product, setProduct] = useState([]);
 
    const [card, setCard] = useState([]);
 
    useEffect(() => {
        setProduct(JsonData);
    }, []);
 
    const addProduct = (product) => {
        const newCard = [...card, product]
        setCard(newCard);
    }
    return (
        <div className="container-fluid d-flex">
            <div className="col-lg-9 product-area border-right">
 
                {
                    product.map(pd => <Product product={pd} addProduct={addProduct}></Product>)
                }
 
            </div>
 
            <div className="col-lg-3 card-area">
                <Card card={card}></Card>
            </div>
        </div>
    );
};
 
export default Shop;