import React from 'react'
import SiteNav from '../layout/SiteNav'
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css';
import Footer from './Footer';
import BackTotop from './BackTotop';
import four from "../four.jpg"


export default function Home() {
  return (
    <>
    <SiteNav/>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://vimaccos.com/wp-content/uploads/2022/01/shutterstock_548156077-1.jpg"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h5>One</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.takaski.com/wp-content/uploads/2015/11/5-Best-Places-to-Buy-Japanese-Cosmetics-Makeup-and-Beauty-Products2.jpg"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h5>Two</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://greenfins.net/wp-content/uploads/2020/08/caudalie-interview.jpeg"
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h5>Three</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={four}
            alt="Slide 4"
          />
          <Carousel.Caption>
            <h5>Four</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lucymakeup.com/cdn/shop/files/Lucy_Makeup_Store_-_New_Merch_Banner_-_1600_x_600_1600x.png?v=1689842764"
            alt="Slide 7"
          />
          <Carousel.Caption>
            <h5>Five</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lucymakeup.com/cdn/shop/files/Lucy_Makeup_Store_-_New_Banners_-_Summer_Products_-_1600_x_600_1600x.png?v=1688395758"
            alt="Slide 8"
          />
          <Carousel.Caption>
            <h5>Six</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <BackTotop />
      <Footer />

    </>
  )
}
