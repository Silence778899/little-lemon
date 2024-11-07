import React from "react";
import ImageGallery from "react-image-gallery";
import chicagoImage1 from './img/chicagoImage1.jpg';
import chicagoImage2 from './img/chicagoImage2.jpg';
import chicagoImage3 from './img/chicagoImage3.jpg';
import chicagoImage4 from './img/chicagoImage4.jpg';

const images = [
  {
    original: chicagoImage1,
    thumbnail: chicagoImage1,
  },
  {
    original: chicagoImage2,
    thumbnail: chicagoImage2,
  },
  {
    original: chicagoImage3,
    thumbnail: chicagoImage3,
  },
  {
  original: chicagoImage4,
  thumbnail: chicagoImage4,
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery;
