import React from 'react';
import Container from 'react-bootstrap/Container';
import ButtonLink from './ButtonLink';
import { cardItem } from './cardItem.js';
import SpecialsCards from './SpecialsCards.js';

function Specials() {
    return (
        <div class="specials-main">
            <div class="specials-header">
                <h1>This week's Specials!</h1>
                <ButtonLink id="btnYellow" to="/Menu">See Our Menu</ButtonLink>
            </div>

            <Container fluid style={{display: 'flex', flexDirection: 'row', justifyContent: "center", paddingBottom: "10%", gap: "10px"}}>
                    {cardItem.map(special => (
                        <SpecialsCards key={special.id} special={special} />
                    ))}
            </Container>
        </div>
    );
};

export default Specials;

// changed specials to "Specials() {" from "const Specials = () => { " //