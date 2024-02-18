import React from 'react'
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import checks from "../checks.png"
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faHeartCircleCheck, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCart';

export default function SiteNav({ product, id }) {
  const { openCart } = useShoppingCart();

  const { getItmesQuantity, increaseCartQuantity, decreaseCartQuantity, removeCartItem } = useShoppingCart(id);
  const quantity = getItmesQuantity();
  const { t } = useTranslation();
  document.body.dir = i18n.dir();
  let changeLAnguage = () => {
    i18n.language === "en" ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
    localStorage.setItem("language", i18n.language)
  }
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language"))
  }, [])
  return (
    <>
      <Navbar expand="md" >
        <Container className='pb-3 pt-3'>
          <Navbar.Brand href="/" className='BeautyShop' >Beauty Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex gap-2">
              <NavLink className="nav-link" to="/">{t('Home')}</NavLink>
              <NavLink className="nav-link " to="/about">{t("About")}</NavLink>
              <NavLink className="nav-link " to="/products">{t("Product")}</NavLink>
              <Button className='rounded-circle ' style={{
                width: "3rem",
                height: "3rem",
                backgroundColor: "black",
                position: "relative"
              }}
                onClick={openCart} >
                <FontAwesomeIcon style={{
                  fontSize: "1.5rem"
                }} icon={faCartPlus}  className='mt-2'/>
                <div className='rounded-circle  d-flex justify-content-center align-items-center' style={{
                  position: "absolute",
                  width: "1.5rem",
                  bottom: "-0.7rem",
                  right: "-0.2rem",
                  backgroundColor: "#9329ad",
                }}>
                  {quantity}
                </div>
              </Button>
              <FontAwesomeIcon className="m-1 pt-1 iconeHover" size="xl" icon={faGlobe} onClick={changeLAnguage} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <img
        src={checks}
        width="100%"
      /> */}
    </>

  )
}
