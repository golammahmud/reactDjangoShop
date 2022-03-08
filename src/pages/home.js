import React, { useEffect, useContext, useState } from "react";
import MainBanner from "./homeComponent/banner";
import { Container, Row, Col } from "react-bootstrap";
import CardCategory from "./homeComponent/cardCategory";
import MultiCarouselPage from "./homeComponent/Multi_item_carousel";
import Styles from "./home.module.css";
import {Link} from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


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
    <div style={{ backgroundColor: " #ffffff" }}>
      <div>
        <MainBanner />
      </div>
      <Container fluid className={Styles.containerview}>
        {" "}
        <div className={Styles.componentsView}>
          {" "}
          <CardCategory />
        </div>
      </Container>
      <Container fluid className={Styles.containerview}>
        <h2 className={Styles.title}>Popular products </h2>
        <Link to="/popular-products" ><p className={Styles.seelink}>see More<ArrowRightIcon/></p></Link>
        <div>
          {" "}
          <MultiCarouselPage />
        </div>
      </Container>
      <div>
        <Container fluid className={Styles.containerview}>
          {" "}
          <div>
            {" "}
            <CardCategory />
          </div>
        </Container>
        <Container fluid className={Styles.containerview}>
          <h2 className={Styles.title}>New products</h2>
          <Link to="/new-products" ><p className={Styles.seelink}>see More<ArrowRightIcon/></p></Link>
          <div>
            {" "}
            <MultiCarouselPage />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
