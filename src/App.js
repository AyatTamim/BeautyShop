
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import Home from "./views/Home";
// import About from "./views/About"
// import Products from './views/Products';
// import Cart from './views/Cart';
// import Error from './views/Error';
// import ViewMore from './views/ViewMore';
// import ShowCategoriesDetails from './views/ShowCategoriesDetails';
// import SiteNav from './layout/SiteNav';
// import "./sass/styles.scss"
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import EnglishTranslation from "./local/en.json";
// import ArabicTranslation from "./local/ar.json";
// import ShoppingCartProvider from './context/ShoppingCart';

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: {
//         translation: EnglishTranslation,
//       },
//       ar: {
//         translation: ArabicTranslation,
//       }
//     },
//     lng: localStorage.getItem("language") ? localStorage.getItem("language") : "en",
//     fallbackLng: "en",

//     interpolation: {
//       escapeValue: false
//     }
//   });


// const App = () => {

//   return (
//     <>
//     <SiteNav/>
//     <ShoppingCartProvider>
//          <Container className="mb-4">
//         <Routes>
//         <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:productId" element={<ViewMore />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/*" element={<Error />} />
//           <Route path="/products/category/:cat" element={<ShowCategoriesDetails />} />
//         </Routes>
//       </Container>
//     </ShoppingCartProvider>
//     </>
//   );
// };
// export default App;
