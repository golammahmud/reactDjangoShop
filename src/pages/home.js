import React, { useEffect, useContext, useState } from "react";
import MainBanner from "./homeComponent/banner";
import { Container, Row, Col } from "react-bootstrap";
import CardCategory from "./homeComponent/cardCategory";
import MultiCarouselPage from "./homeComponent/Multi_item_carousel";

function Home() {
  const [items, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/products/`);
      if (response.status === 200) {
        const item = await response.json();
        setItem(item);
        setLoading(false);
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <MainBanner />
      </div>
      <Container fluid className="mt-5 mr-2">
        {" "}
        <CardCategory />
      </Container>
      <Container fluid className="mt-4">
        <MultiCarouselPage />
        </Container>
    </div>
  );
}

export default Home;
