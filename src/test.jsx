import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About"
import Products from './views/Products';
import Cart from './views/Cart';
import Error from './views/Error';
import Wishlist from './views/Wishlist';
import Addtocart from './views/Addtocart';
import "./sass/styles.scss"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ViewMore from './views/ViewMore';
import FooterCategories from './views/FooterCategories';
import ShowCategoriesDetails from './views/ShowCategoriesDetails';
import EnglishTranslation from "./local/en.json";
import ArabicTranslation from "./local/ar.json";
import ShoppingCartProvider from './context/ShoppingCart';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EnglishTranslation,
      },
      ar: {
        translation: ArabicTranslation,
      }
    },
    lng: localStorage.getItem("language") ? localStorage.getItem("language") : "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:productId",
    element: <ViewMore />
  },
  {
    path: "/products/add/:productId",
    element: <Addtocart />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  ,
  {
    path: "/wishlist",
    element: <Wishlist />
  },
  {
    path: "/*",
    element: <Error />
  },
  {
    path: "/products/category/:cat",
    element: <ShowCategoriesDetails />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShoppingCartProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ShoppingCartProvider>

);



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <ShoppingCartProvider>
//       <App />
//     </ShoppingCartProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );


























import React, { useContext, useState } from 'react'
import { createContext } from "react";

const ShoppingCart = createContext({});


const ShoppingCartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState([]);

    const getItmesQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 1;
    };
    const increaseCartQuantity = (id) => {
        setCartItems((currItmes) => {
            if (currItmes.find((item) => item.id === id) == null) {
                return [...currItmes, { id, quantity: 1 }];
            } else {
                return currItmes.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const decreaseCartQuantity = (id) => {
        setCartItems((currItmes) => {
            if (currItmes.find((item) => item.id === id) == null) {
                return currItmes.filter((item) => item.id !== id);
            } else {
                return currItmes.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const removeCartItem = (id) => {
        setCartItems((currItmes) => currItmes.filter((item) => item.id !== id))
    };

    return (
        <ShoppingCart.Provider
            value={{
                cartItems,
                getItmesQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeCartItem
            }}>
            {children}
        </ShoppingCart.Provider>
    )
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCartProvider);
}