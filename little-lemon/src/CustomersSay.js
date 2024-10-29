import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconStar from './IconStar';


function CustomersSay() {
    return (
        <div class="review-main">
            <h1>Testimonials</h1>
            <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <div class="review-card-background" style={{ width: '20%' }}>
                        <Card.Body>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <Card.Title class="review-card-client">John John</Card.Title>
                            <Card.Subtitle class="review-card-date">1/1/2024</Card.Subtitle>
                            <Card.Text class="review-card-review">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <div class="review-card-background" style={{ width: '20%' }}>
                        <Card.Body>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <Card.Title class="review-card-client">Bob Bob</Card.Title>
                            <Card.Subtitle class="review-card-date">2/2/2024</Card.Subtitle>
                            <Card.Text class="review-card-review">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <div class="review-card-background" style={{ width: '20%' }}>
                        <Card.Body>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <Card.Title class="review-card-client">Marius Marius</Card.Title>
                            <Card.Subtitle class="review-card-date">3/3/2024</Card.Subtitle>
                            <Card.Text class="review-card-review">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <div class="review-card-background" style={{ width: '20%' }}>
                        <Card.Body>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <IconStar color="gold" width='16px' height='16px'></IconStar>
                            <Card.Title class="review-card-client">Dimi Dimi</Card.Title>
                            <Card.Subtitle class="review-card-date">4/4/2024</Card.Subtitle>
                            <Card.Text class="review-card-review">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
        </div>

    );

};

export default CustomersSay;

