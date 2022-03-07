import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-bootstrap";
import Styles from "../home.module.css";

const MainBanner = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item className="text-white">
        <img
          className="d-block w-100 "
          src="https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?cs=srgb&dl=pexels-garrett-morrow-682933.jpg&fm=jpg"
          alt="First slide"
          height="350"
        />
        <Carousel.Caption className="text-white">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100 "
          src="https://images.pexels.com/photos/39290/mother-board-electronics-computer-board-39290.jpeg?cs=srgb&dl=pexels-pixabay-39290.jpg&fm=jpg"
          alt="Second slide"
          height="350"
        />
        <Carousel.Caption className="text-white">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
        <img
          className="d-block w-100 "
          src="https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?cs=srgb&dl=pexels-parag-deshmukh-577769.jpg&fm=jpg"
          alt="Third slide"
          height="350"
        />
        <Carousel.Caption className="text-white">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainBanner;

// <Carousel showArrows={true} showIndicators={false} showThumbs={false} swipeable={true} infiniteLoop={true} >
// <div>
//   <img   height="350" src="https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?cs=srgb&dl=pexels-parag-deshmukh-577769.jpg&fm=jpg" />
//   <p className="legend">Legend 1</p>
// </div>
// <div>
//   <img   height="350" src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?cs=srgb&dl=pexels-elvis-2528118.jpg&fm=jpg" />
//   <p className="legend">Legend 2</p>
// </div>
// <div>
//   <img   height="350" src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?cs=srgb&dl=pexels-hasan-albari-1229861.jpg&fm=jpg" />
//   <p className="legend">Legend 3</p>
// </div>
// </Carousel>
