import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../Components/Rating";
const ProductScreen = ({ match }) => {
 const [product, setProduct] = useState({});
 useEffect(() => {
   const getProduct= async() =>{ 
    const res =  await axios.get(`/api/products/${match.params.id}`)
     setProduct(res.data)
  }
   getProduct()
   
 }, [])

  return (
    <>
      <Link to="/">
        <Button>Home</Button>{" "}
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid atl={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating product={product} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
            <ListGroup.Item>
            <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
              
          
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  <strong>{product.countInStock>0?"In Stock":"Out of Stock"}</strong>
                </Col>
              </Row>
              </ListGroup.Item>
          
            <Button block>
              ADD TO CART
            </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
