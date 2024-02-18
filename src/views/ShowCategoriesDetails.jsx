import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ShowCategoriesDetails() {
    const params = useParams()
    let [selectedCat, setSelectedCat] = useState([])

    let getCatDetails = () => {
        fetch("https://extendsclass.com/mock/rest/fc1f978f3c1a614f2e16ea9e240463d9/products")
            .then(json => json.json())
            .then(res => setSelectedCat(res.filter(product => product.category === params.cat)))
            .then(setSelectedCat)
    }

    useEffect(() => {
        getCatDetails()
    }, [])
    return (
        <div className='text-center'>
            {selectedCat}
        </div>
    )
}
