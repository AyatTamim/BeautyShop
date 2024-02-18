import React, { useTransition } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductDetails from './ProductDetails';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Footer from "./Footer"
import BackTotop from './BackTotop';
import SiteNav from '../layout/SiteNav';

export default function Products() {
  // const params = useParams();
  // const [product, setProduct] = useState([]);

  const { t } = useTransition();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);


  let baseUrl = "https://extendsclass.com/mock/rest/fc1f978f3c1a614f2e16ea9e240463d9/products";
  let getProducts = () => {
    fetch(baseUrl).then((res) => res.json().then((data) => setProducts(data)))
  }

  let getCategories = () => {
    fetch("http://localhost:2222/categories/").then(res => res.json().then((data) => setCategories(data)))
  }

  let productFilter = (category) => {
    let filterProducts = [],
      allProducts = [],
      productCategory = category;
    fetch("https://extendsclass.com/mock/rest/fc1f978f3c1a614f2e16ea9e240463d9/products")
      .then(json => json.json())
      .then(res => allProducts = res)
      .then(() => filterProducts = allProducts.filter((product) => product.category
        === productCategory))
      .then(() => setProducts(filterProducts))
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, [])


  return (
    <div className='text-center'>
      <SiteNav />
      <h3 className='product pt-5'>number of products {products.length}</h3>
      <Container className="pb-5 pt-5">
        <Row>
          <ButtonGroup className='d-flex align-items-center'>
            <Button className='text-white' onClick={getProducts}>All</Button>
            {
              categories.map((category, index) =>
                category && <Button key={index} className='text-white text-capitalize' onClick={() => productFilter(category)}>{category.split("_").join(" ")}
                </Button>
              )}
          </ButtonGroup>

          {
            products.map((product) =>
              <Col lg={4} md={6} sm={12} className='pt-4 card-group' key={product.id}>
                <ProductDetails product={product} />
              </Col>
            )
          }
        </Row>
      </Container>
      <Footer />
      <BackTotop />
    </div>
  )
}
