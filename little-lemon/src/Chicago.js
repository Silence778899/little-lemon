import React from 'react';
import MyGallery from './ImgGallery';

function Chicago() {
    return (
        <div class="chicago-main">
            <div class="chicago-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
            <div class="chicago-gallery">
                <MyGallery></MyGallery>
            </div>
        </div>
    );

};

export default Chicago;