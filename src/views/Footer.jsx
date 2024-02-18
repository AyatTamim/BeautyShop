import React from 'react'
import checks from "../checks.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faSquareInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faMobileScreen } from "@fortawesome/free-solid-svg-icons"
import FooterCategories from './FooterCategories'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
export default function Footer() {

  return (

    <>
      <div className='footerStyle pb-5'>
        
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 pt-5">
              <Link className="h2 footerLogo" to="/">Beauty Shop</Link>
              <ul className="list-unstyled">
                <li> <FontAwesomeIcon icon={faLocationDot} /> 123 Consectetur at ligula 10660</li>

                <li><i className="fa fa-phone fa-fw"></i> <a className="text-decoration-none" href="tel:010-020-0340"> <FontAwesomeIcon icon={faMobileScreen} /> 010-020-0340</a></li>
                <li><i className="fa fa-envelope fa-fw"></i> <a className="text-decoration-none" href="mailto:info@company.com">info@company.com</a></li>
              </ul>
            </div>
            <div className="col-md-4 pt-5">
              <Link className="h2 footerLogo" to="/products" >Products</Link>
              <div>
                <FooterCategories />
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <h2 className="footerLogo">Further Info</h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li><a className="text-decoration-none" href="/">Home</a></li>
                <li><a className="text-decoration-none" href="./about">About</a></li>
                <li><a className="text-decoration-none" href="./cart">Cart</a></li>
                <li><a className="text-decoration-none" href="./products">Products</a></li>
              </ul>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12 mb-3">
              <div className="w-100 my-3 border-top border-light"></div>
            </div>
            <div className="col-auto me-auto socialMedia">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faSquareInstagram} />
              <FontAwesomeIcon icon={faPinterest} />
            </div>
            <div className="col-auto">
              <Form className='input-group mb-2'>
                <Form.Control type="email" placeholder="Email address" />
                <div className="input-group-text btn-success text-light">Subscribe</div>
              </Form>
            </div>
          </div>
        </div>
      </div >
      <div className="col-12 d-flex flex-column design mx-auto">
      <img className='pb-4'
          src={checks}
          width="100%"
        />
        <p className="text-center">Copyright © 2023 Beauty Shop</p>
        <p className="text-center">Designed by Ayat Tamim</p>
      </div>
    </>
  )
}
