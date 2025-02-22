import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import products from './products';
import ProductCard from './components/ProductCard';
import './App.css';
import hiGif from './images/hi.gif'; 

const firstName = "Anwar";

function App() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Nos Produits</h1>
      
      <Row className="g-4 justify-content-center">
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      <h2 className="mt-5 text-center">
        {firstName ? `Bonjour, ${firstName} !` : "Bonjour !"}
      </h2>

      {firstName && (
        <div className="text-center mt-3">
          <img src={hiGif} alt="User Avatar" className="rounded-circle" />
        </div>
      )}
    </Container>
  );
}

export default App;