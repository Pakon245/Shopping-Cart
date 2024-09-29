import React from 'react';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">฿{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
