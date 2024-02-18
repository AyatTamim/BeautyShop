import React from 'react'
import Footer from "./Footer"
import BackTotop from './BackTotop';
import Memo from './Memo';
import beautyShop from "../images/beautyShop.svg"
import SiteNav from '../layout/SiteNav';
export default function About() {
  return (
    <div>
      <SiteNav/>
      <div className='About position-relative'>
        <img
          src='https://www.clarins.ie/on/demandware.static/-/Library-Sites-clarins-v3/default/dw2562133c/content/Economie-Circulaire-2022/img/CLARINSHQ_BEC-b2_tab2__bg.png'
          width="100%"
        />

        <div className='d-flex flex-column justify-content-center align-items-center position-absolute story gap-3'>
          <img className='' src={beautyShop} alt="Beauty Shop"
            width={200}
          />
          <div className='text-center aboutParagraph w-50'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga quis iste similique magnam esse voluptatum iusto impedit. Praesentium reprehenderit aliquid delectus veniam omnis obcaecati dolores labore cum voluptates quaerat?
          </div>

        </div>


      </div>
      {/* <Memo /> */}
      <BackTotop />
      <Footer />
    </div>
  )
}
