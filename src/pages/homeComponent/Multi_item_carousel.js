import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./carouselcard";
import { Link } from "react-router-dom";
function MultiCarouselPage() {
  return (
    <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={2000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
  
   <Link to="popular-product"> <CarouselCard /></Link>
   <Link to="popular-product"> <CarouselCard /></Link>
   <Link to="popular-product"> <CarouselCard /></Link>
   <Link to="popular-product"> <CarouselCard /></Link>
   <Link to="popular-product"> <CarouselCard /></Link>
   <Link to="popular-product"> <CarouselCard /></Link>
   <Link to="popular-product"> <CarouselCard /></Link>
   
</Carousel>
  );
}
export default MultiCarouselPage;
