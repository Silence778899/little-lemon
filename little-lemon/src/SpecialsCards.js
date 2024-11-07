import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonLink from './ButtonLink';
import deliveryIcon from './img/delivery-motorbike.svg';

const SpecialsCards = ({special}) => (
          <Card className="specials-card-overlay" key={special.id}>
            <Card.Img variant="top" class="specials-card-image" src={special.image}/>
            <Card.Body>
              <Card.Title class="specials-card-title">{special.title}</Card.Title>
              <Card.Subtitle class="specials-card-price">{special.price}</Card.Subtitle>
              <Card.Text class="specials-card-description">
                {special.text}
              </Card.Text>
            </Card.Body>
            <div class="card-footer">
                <ButtonLink to="/Order">Order a delivery</ButtonLink>
                <Card.Img class="delivery-icon" id='bike-icon' src={deliveryIcon} />
            </div>
          </Card>
);

export default SpecialsCards;