import React from 'react';
import Row from 'react-bootstrap/Row';
import ButtonLink from './ButtonLink';
import { cardItem } from './cardItem.js';
import SpecialsCards from './SpecialsCards.js';

function Specials() {
    return (
        <div class="specials-main">
            <div class="specials-header">
                <h1>This week's Specials!</h1>
                <ButtonLink variant="contained" id="btnYellow" to="/Menu">Full Menu</ButtonLink>
            </div>

            <div class='container'>
                <Row>
                    {cardItem.map(special => (
                        <SpecialsCards key={special.id} special={special} />
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Specials;

// changed specials to "Specials() {" from "const Specials = () => { " //