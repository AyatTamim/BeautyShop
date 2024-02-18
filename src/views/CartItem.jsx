import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import database from "../database/database.json"
import { useShoppingCart } from '../context/ShoppingCart';

const CartItem = ({ id, quantity }) => {
    const { removeCartItem } = useShoppingCart();
    const item = database.products.find((item) => item.id === id);
    if (item === null) {
        return null;
    }
    return (
        <Stack direction="horizontal" className='d-flex align-items-center' gap={2} >
            <img src={item.image_link} alt='cart-image' style={{
                width: "125px",
                height: "75px",
                objectFit: "cover"
            }} />
            <div className='me-auto'>
                <div>
                    {item.brand}{" "}
                    {quantity > 1 && <span className='text-muted' style={{
                        font: "0.65rem"
                    }}>x{quantity}</span>}
                </div>
                <div className='text-muted' style={{
                    font: "0.75rem"
                }}>
                    {item.price * quantity} {item.price_sign}
                </div>
            </div>
            <Button size='sm' onClick={() => removeCartItem(id)} ></Button>
        </Stack>
    );
};

export default CartItem;