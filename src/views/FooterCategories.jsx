import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export default function FooterCategories() {


    const [products, setProducts] = useState([]);
    const [singlecategories, setsingleCategories] = useState([]);
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
        <div className='d-flex flex-column'>
            {
                categories.map((category, index) =>
                    category && <Link to={`/products/category/${category}`} key={index} className=' text-capitalize' onClick={() => productFilter(category)}>{category.split("_").join(" ")}
                    </Link>
                )}
        </div>
    )
}

