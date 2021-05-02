import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Product from '../Components/Product';
import axios from 'axios'

const HomeScreens = () => {
const [products, setProduct] = useState([])
useEffect(() => {
    const getProducts = async() =>{
       const res = await axios.get('/api/products');
       setProduct(res.data)
    }
    getProducts()
    return () => {
       
    };
}, []);
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product)=>
                
                  <Col key={product._id}
                  sm={12} md={6} lg={4} xl={3}
                    >
                <Product product={product}/>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default HomeScreens
