import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) => {
    const [discountCode, setDiscountCode] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);

    const handleApplyDiscount = () => {
        // คุณสามารถปรับการตรวจสอบคูปองให้เหมาะสมกับเงื่อนไขที่คุณต้องการ
        if (discountCode === 'DISCOUNT10') {
            setDiscountAmount(10); // สมมติว่าให้ส่วนลด 10 บาท
        } else {
            alert('Invalid discount code');
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingFee = 100;
    const finalTotal = totalPrice + shippingFee - discountAmount;

    return (
        <div className="cart">
            <h2>รายการสินค้า</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3 className="cart-item-name">{item.name}</h3>
                                <p className="cart-item-price">฿{item.price}</p>
                                <div className="quantity-controls">
                                    <button className="quantity-button" onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span className="item-quantity">{item.quantity}</span>
                                    <button className="quantity-button" onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>
                                <button className="remove-from-cart" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="discount-section">
                <h3>คูปองส่วนลด</h3>
                <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Enter code"
                />
                <button onClick={handleApplyDiscount}>ยืนยัน</button>
                {discountAmount > 0 && <p>Discount Applied: ฿{discountAmount}</p>}
            </div>
            <div className="cart-total">
                <h3>ราคาสินค้า: ฿{totalPrice.toFixed(2)}</h3>
                <h3>ค่าจัดส่ง: ฿{shippingFee}</h3>
                <h3>รวม: ฿{finalTotal.toFixed(2)}</h3>
            </div>
            <button className="checkout-button">สั่งซื้อ</button>
        </div>
    );
};

export default Cart;
