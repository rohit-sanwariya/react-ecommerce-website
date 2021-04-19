import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Product from '../Components/Product';
import products from '../products';

const HomeScreens = () => {

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product)=>{
                  return  <Col key={product.id}
                  sm={12} md={6} lg={4} xl={3}
                    >
                <Product product={product}/>
                    </Col>
                })}
            </Row>
        </>
    )
}

export default HomeScreens
