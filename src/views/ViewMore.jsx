import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Footer from './Footer';
import BackTotop from './BackTotop';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import SiteNav from '../layout/SiteNav';
import { useShoppingCart } from '../context/ShoppingCart';
import { Button } from 'react-bootstrap';

export default function ViewMore({ id }) {
    const { getItmesQuantity, increaseCartQuantity, decreaseCartQuantity, removeCartItem } = useShoppingCart(id);
    const quantity = getItmesQuantity();

    const { t } = useTranslation();
    document.body.dir = i18n.dir();
    let changeLAnguage = () => {
        i18n.language === "en" ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
        localStorage.setItem("language", i18n.language)
    }
    const params = useParams();

    let [product, setProduct] = useState({});

    function getSingleProduct() {
        fetch("https://extendsclass.com/mock/rest/fc1f978f3c1a614f2e16ea9e240463d9/products/" + params.productId)
            .then(json => json.json())
            .then(res => setProduct(res))
    }

    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem("language"))
        getSingleProduct()
    }, [])

    // const descriptionDetails = `${product.description}`;
    return (
        <>
            <SiteNav />
            <div className='d-flex flex-column'>
            <div className='text-center d-flex viewMore'>
                <Card className=" p-5">
                    <Card.Body className=''>
                        <Image variant="top" src={product.image_link} alt={product.title} width="" className='' />
                        <Card.Title className='text-capitalize pt-2'>{product.brand}</Card.Title>
                        <Card.Title className='pt-3'>{product.name}</Card.Title>
                        <Card.Title className='pt-3'>{product.price}{product.price_sign}</Card.Title>
                        <Card.Title className='pt-3' >{product.description}</Card.Title>
                    </Card.Body>
                </Card >
            </div>
            <div className='Details mt-auto pb-3'>
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
                        </div>
            </div>
            <Footer />
            <BackTotop />
        </>
    )
}
