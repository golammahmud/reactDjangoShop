import { useParams,useNavigate ,useLocation } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useContext, useState } from "react";
import { productContext } from "../component/shopContext";
import { Col, Row, Card, Container, Button, Carousel } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";




function Product_details() {
  const [items, setItem] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { id,slug } = useParams();
  const [color, setColor] = useState("#80CED7");
  const [images, setImages] = useState([]);
  const [features, setFeatures] = useState([]);
  const [size, setSize] = useState([
    {
      size: "",
      title: "",
      price: 0,
    },
  ]);

console.log(items.title);
 
 let navigate = useNavigate();
 console.log(navigate);


;
  // const url =`http://127.0.0.1:8000/products/${slug}`

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      // const response = await fetch('https://fakestoreapi.com/products/1')
      const response = await fetch(`http://127.0.0.1:8000/products/${slug}`);
      if (response.status === 200) {
        const item = await response.json();
        setItem(item);
        setImages(item.products);
        setFeatures(item.features);
        setLoading(false);
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleSelection = (size, title, price) => {
    setSize({
      size: size,
      title: title,
      price: price,
    });
  };

  return (
    <div className="container">
      <div className="backbtn-div">
        <NavLink to=''>
          <Button onClick={()=>navigate(-1)} className="backbtn" variant="outline-info">
            Back
          </Button>
        </NavLink>
      </div>
      <Row className="item">
        <Col lg={6}>
          {/* image slider */}

          <Carousel>
            {images.map((img) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-details rounded p-3 mt-2"
                    src={img.images}
                    alt={items.title}
                    style={{ width: "520px", height: "500px" }}
                    // src="holder.js/800x400?text=First slide&bg=373940"
                    // alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{items.title}</h3>
                    {/* <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p> */}
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>

          {/* 
image slider */}
        </Col>

        <Col className="info">
          <h2 className="mb-lg-4">{items.title}</h2>

          <Row>
            <Col className="feature-col" style={{ textAlign: "left" }}>
              <h5>Product Feature-</h5>
              {features.map((f) => {
                return (
                  <ul style={{ listStyleType: "square" }}>
                    <li style={{ listStyleType: "square" }}>{f.feature}</li>
                  </ul>
                );
              })}
            </Col>
            <Col style={{ textAlign: "right" }}>
              <h5 className="item-price">Price:Tk {items.price}</h5>
            </Col>
          </Row>
          <Row className="size-row">
            <Col className="size-col" style={{ textAlign: "left" }}>
              <br></br>
              <div>
                <p className="item-size-selected">Selected Size:{size.size}</p>
                {/* <p className="item-size-text">SIZE</p>
                            <p className="item-size-star">*</p>
                            <p className="item-size-selected">{size.size}</p> */}
              </div>
              <button
                className="btn-size"
                onClick={() => handleSelection("S", items.title, items.price)}
              >
                S
              </button>
              <button
                className="btn-size btn-middle"
                onClick={() => handleSelection("M", items.title, items.price)}
              >
                M
              </button>
              <button
                className="btn-size"
                onClick={() => handleSelection("L", items.title, items.price)}
              >
                L
              </button>
              <br></br>
            </Col>
          </Row>
          <br />
          <br />

          <Row className="buttonRow">
            <Col className="buttonRow-col">
              <p>Available Colors:</p>
              <div className="color-box">
                <Button id="blue" onClick={() => setColor("#80CED7")}></Button>
                <Button id="flax" onClick={() => setColor("#E9D985")}></Button>
                <Button id="red" onClick={() => setColor("#BF211E")}></Button>
              </div>
            </Col>
            <Col style={{ textAlign: "right" }}>
              {/* <a href={items.checkout_url.display}> */}
              <NavLink to={`shop/buy/${items.slug}`}>
                <Button id="buy" variant="primary">
                  Buy Now
                </Button>
              </NavLink>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col className="description-col">
            <h5>Description:</h5>
            <p>{items.description}</p>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Product_details;
