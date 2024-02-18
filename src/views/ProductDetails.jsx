import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import ViewMore from './ViewMore';
import { useShoppingCart } from '../context/ShoppingCart';

export default function ProductDetails({ product, id }) {
    const { getItmesQuantity, increaseCartQuantity, decreaseCartQuantity, removeCartItem } = useShoppingCart(id);
    const quantity = getItmesQuantity();
    const params = useParams();

    return (
        <>
            <Card className='text-center ' >
                <Card.Body className='text-center d-flex flex-column justify-content-center cardStyle'>
                    <Image variant="top" src={product.image_link} alt={product.title} width={300} className='mx-auto pb-3 ' />

                    <div className='card-img-overlay d-flex flex-column justify-content-center'>
                        <ul class=" list-unstyled">
                            <li>
                                <Link to="/wishlist"><FontAwesomeIcon className='iconFont text-white btn btn-success mt-2' icon={faHeart} /></Link>
                            </li>
                            <li>
                                <Link to="/cart"><FontAwesomeIcon className='iconFont text-white btn btn-success mt-2' icon={faCartPlus} /></Link>
                            </li>
                        </ul>
                    </div>
                    <Card.Title className='text-capitalize'>{product.brand}</Card.Title>
                    <h5>{product.name}</h5>
                    <div className='row row-col-3 m-3 gap-3 justify-content-center '>
                        {
                            product.product_colors.map((color, index) =>
                                <div key={index} sm={2} md={6} lg={4} style={{
                                    backgroundColor: color.hex_value,
                                    borderRadius: "50%",
                                    width: "70px",
                                    height: "70px",

                                }} ></div>

                            )
                        }
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <Link to={`./${product.id}`} className='btn Details '>
                            View More
                        </Link>
                        {/* <div className='Details mt-auto'>
                            {quantity === 0 ? (
                                <Button className="Details btn" onClick={() => increaseCartQuantity(id)}>Add to card</Button>
                            ) : (
                                <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                                    <div className='d-flex align-items-center justify-content-center gap-3'>
                                        <Button className="Details btn"  size='sm' onClick={() => decreaseCartQuantity(id)}>&minus;</Button>
                                        <span className="text-dark" >{quantity} in cart</span>
                                        <Button className="Details btn" size='sm' onClick={() => increaseCartQuantity(id)}>+</Button>
                                    </div>

                                    <Button onClick={()=> removeCartItem(id)}>Remove</Button>
                                </div>
                            )}
                        </div> */}

                    </div>
                </Card.Body>

            </Card >

        </>

    )
}
