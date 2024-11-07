import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import IconStar from './IconStar';


function CustomersSay() {
    return (
        <div className="review-main" style={{backgroundColor:"#495E57", fontFamily: "Karla", fontWeight: "700", textAlign: "center", paddingTop: "5%", paddingBottom: "5%"}}>
            <h1 style={{color: "white"}}>Testimonials</h1>
            <Container fluid style={{ display: 'flex', flexDirection: 'row', justifyContent: "center", gap: "10px"}}>
                            <Card class="review-card" style={{backgroundColor: "white", flex: 1, width: "100%"}}>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <Card.Title>John John</Card.Title>
                                <Card.Subtitle style={{fontWeight: "300"}}>1/1/2024</Card.Subtitle>
                                <Card.Text style={{fontWeight: "300"}}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                </Card.Text>
                            </Card>
                            <Card class="review-card" style={{backgroundColor: "white", flex: 1, width: "100%"}}>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <Card.Title>Baron Baron</Card.Title>
                                <Card.Subtitle style={{fontWeight: "300"}}>2/2/2024</Card.Subtitle>
                                <Card.Text style={{fontWeight: "300"}}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                </Card.Text>
                            </Card>
                            <Card class="review-card" style={{backgroundColor: "white", flex: 1, width: "100%"}}>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <Card.Title>Marius Marius</Card.Title>
                                <Card.Subtitle style={{fontWeight: "300"}}>3/3/2024</Card.Subtitle>
                                <Card.Text style={{fontWeight: "300"}}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                </Card.Text>
                            </Card>
                            <Card class="review-card" style={{backgroundColor: "white", flex: 1, width: "100%"}}>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <IconStar color="gold" width='16px' height='16px'></IconStar>
                                <Card.Title>Dimi Dimi</Card.Title>
                                <Card.Subtitle style={{fontWeight: "300"}}>4/4/2024</Card.Subtitle>
                                <Card.Text style={{fontWeight: "300"}}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                </Card.Text>
                            </Card>
            </Container>
        </div>
    );

};

export default CustomersSay;