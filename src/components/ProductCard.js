import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className="p-3 shadow-lg text-center">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title className="card-title">{product.name}</Card.Title>
        <Card.Text className="text-success"><strong>Prix: </strong>{product.price}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
