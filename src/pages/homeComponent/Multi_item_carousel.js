import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./carouselcard";

function MultiCarouselPage() {
  return (
    <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1000}
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
      items: 3,
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
  
    <CarouselCard />
    <CarouselCard />
    <CarouselCard />
    <CarouselCard />
    <CarouselCard />
    <CarouselCard />
    <CarouselCard />
   
</Carousel>
  );
}
export default MultiCarouselPage;
