import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating"; //* Rating stars
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    //* For product image, name, rating and price respectively
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div" className="my-2">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        {/* <Card.Text as="div">{product.description}</Card.Text> */}

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
