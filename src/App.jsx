import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: 'Product 1', price: 10, image: 'https://m.media-amazon.com/images/I/918A2P0YN+L._AC_SL1500_.jpg' },
        { id: 2, name: 'Product 2', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6964NGQXQ6GI2x4lCVOpEAieHM_wAK3T7y3kCmlElOhNiRPgT-2K2h1nggGc3DyjFIM&usqp=CAU' },
        { id: 3, name: 'Product 3', price: 30, image: 'https://i.ebayimg.com/images/g/aBcAAOSwj99Z9kNR/s-l1200.jpg' },
        { id: 4, name: 'Product 4', price: 40, image: 'https://www.lego.com/cdn/cs/set/assets/bltf322f4a9d73f5430/71795_alt1.png?fit=crop&quality=80&width=600&height=600&dpr=1' },
        { id: 5, name: 'Product 5', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaFSlCw8jQ7HD3NBglsdXHibNQfy0PBmAiJDbGBrvfikqKKG8rl_FaMs9kDwJlHpTlPY&usqp=CAU' },
        { id: 6, name: 'Product 6', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtRdhgiqzu55QtsG7_Hmi0KFrKjPzoTjg4nif6ZrToUpErRSt75-1ZRYhrA3fqvfpf6Q&usqp=CAU' },
        { id: 7, name: 'Product 7', price: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTovFr8GS8nY8xjeB_QOU3YyN3wKYBK1kJog2rN1FcA5Ju_DIxbSL8xDHWBCTAVZwT8Xo&usqp=CAU' },
        { id: 8, name: 'Product 8', price: 80, image: 'https://media.juguetesland.com/product/ninjago-dragon-elemental-de-jay-800x800.jpg' },
        { id: 9, name: 'Product 9', price: 90, image: 'https://bttw.com.au/image/cache/catalog/Ninjago/71760%20Jays%20Thunder%20Dragon%20EVO-650x650.JPG' },
        { id: 10, name: 'Product 10', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTEloWSVJdjWGeetRXQnYHRJUQ3wzewhEtWfBeRJQ7owq2fFX4I1BuaHG5NUyXmo-j7o&usqp=CAU' },
        { id: 11, name: 'Product 11', price: 110, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHVhhSJCd6DFnqCv2Qq6YhLtyLi7af17axwv-KbvJlvSJSKa_EzJEvHNzOgnxWVAqpwmA&usqp=CAU' },
        { id: 12, name: 'Product 12', price: 120, image: 'https://s13emagst.akamaized.net/products/27525/27524136/images/res_20a6b68c78454dcf6d15d96755bc9bdb.jpg' },
    ];

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCart(cart.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity - 1) };
            }
            return item;
        }));
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />} />
            </Routes>
        </Router>
    );
};

export default App;
