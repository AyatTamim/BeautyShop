import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Container, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
export default function EditProduct() {


    let [product, setProduct] = useState({})
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    let navigate = useNavigate();

    let params = useParams()

    let handleProductData = ev => {
        ev.target.name === "title"
            ? setTitle(ev.target.value)
            : ev.target.name === "price"
                ? setPrice(ev.target.value)
                : ev.target.name === "description" &&
                setDescription(ev.target.value);
    };

    async function postData(url = `https://extendsclass.com/mock/rest/fc1f978f3c1a614f2e16ea9e240463d9/products/${params.productId}`) {
        const response = await fetch(url, {
            method: "PUT",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                ...product,
                title,
                price,
                description
            })
        });
        return response.json();
    }
    async function postDataInCategory(url = `http://localhost:1111/${(product.category).split(" ").join("_")}/${params.productId}`) {
        const response = await fetch(url, {
            method: "PUT",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                ...product,
                title,
                price,
                description
            })
        });
        return response.json();
    }

    useEffect(() => {
        fetch(`https://extendsclass.com/mock/rest/fc1f978f3c1a614f2e16ea9e240463d9/products/${params.productId}`)
            .then(res => res.json())
            .then(product => {
                setProduct(product)
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
    }, [params.productId])

    let handleEditProduct = (ev) => {
        postData();
        postDataInCategory();
        ev.preventDefault();
        navigate("/products");
    }
    return (
        <div>
            
            <Container className="mainContent text-center">
                <h2>{product.title}</h2>
                <Form
                    className="w-50 mx-auto"
                    onSubmit={ev => {
                        handleEditProduct(ev);
                    }}
                >
                    <br />
                    <br />
                    <Form.Control
                        type="text"
                        onChange={handleProductData}
                        value={title}
                        name="title"
                        placeholder="Title"
                    />
                    <br />
                    <br />
                    <Form.Control
                        type="number"
                        onChange={handleProductData}
                        name="price"
                        value={price}
                        placeholder="Price"
                    />
                    <br />
                    <br />
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        onChange={handleProductData}
                        label="Description"
                    >
                        <Form.Control
                            value={description}
                            onChange={handleProductData}
                            name="description"
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                        />
                    </FloatingLabel>
                    <Button variant="primary" type="submit" className="m-3">
                        OK
                    </Button>
                </Form>
            </Container>

        </div>
    )
}
