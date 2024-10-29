import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import deliveryIcon from './img/delivery-motorbike.svg';

const SpecialsCards = ({special}) => (
    <Col xs={12} sm={6} md={4} lg={4} key={special.id}>
          <div class="card-overlay" style={{ width: '20%' }}>
            <Card.Img variant="top" class="specials-card-image" src={special.image} />
            <Card.Body>
              <Card.Title class="specials-card-title">{special.title}</Card.Title>
              <Card.Subtitle class="specials-card-price">{special.price}</Card.Subtitle>
              <Card.Text class="specials-card-description">
                {special.text}
              </Card.Text>
              <div class="delivery-link">
                <Link to="/Order">Order a delivery</Link>
                <img class="delivery-icon" id='bike-icon'
                  src={deliveryIcon}
                />
              </div>
            </Card.Body>
          </div>
    </Col>
);

export default SpecialsCards;