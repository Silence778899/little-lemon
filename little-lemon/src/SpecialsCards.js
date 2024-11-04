import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import deliveryIcon from './img/delivery-motorbike.svg';

const SpecialsCards = ({special}) => (
          <Card className="specials-card-overlay" key={special.id} style={{flex: 1, width: "100%"}}>
            <Card.Img variant="top" class="specials-card-image" src={special.image} />
            <Card.Body>
              <Card.Title class="specials-card-title">{special.title}</Card.Title>
              <Card.Subtitle class="specials-card-price">{special.price}</Card.Subtitle>
              <Card.Text class="specials-card-description">
                {special.text}
              </Card.Text>
            </Card.Body>
            <Card.Body className="delivery-link">
                <Link to="/Order">Order a delivery</Link>
                <Card.Img class="delivery-icon" id='bike-icon' src={deliveryIcon} />
            </Card.Body>
          </Card>
);

export default SpecialsCards;