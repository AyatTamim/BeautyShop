import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCart'
import CartItem from './CartItem';

export default function ShoppingCartProuct({ isOpen }) {
    const { cartItems, closeCart } = useShoppingCart();
    return (
        <div>
            <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Cart
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
