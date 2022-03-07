import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useContext, useState } from "react";
import { productContext, categoryContext } from "../component/shopContext";
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { MDBRipple } from "mdb-react-ui-kit";

function Shop() {
  const [product, isLoading, setProduct] = useContext(productContext);
  const [category, setCategory] = useContext(categoryContext);

  const [cart, setCart] = useState([]);
  console.log(cart);
  // const [isLoading, setLoading] =useContext(productContext)

  // console.log(product);
  // console.log(`the category list is:${category}`);
  // console.log(isLoading);

  return (
    <div>
      {isLoading ? (
        <div>
          <center>
            <h2>Loading...</h2>
          </center>
        </div>
      ) : (
        <div>
          <Container className="card-container " fluid>
            <Row className=" justify-content-md-center p-md-3  ">
              {product.map((item, index) => {
                return (
                  <Col
                    lg="auto"
                    xl={3}
                    className="card-col p-md-3 "
                    key={index}
                  >
                    {/* <div key={index}> */}
                    {/* <Container className="justify-content-md-center" fluid >  */}

                    <MDBRipple rippleTag="div">
                      <Card
                        className="card"
                        key={item.id}
                        style={{ width: "19rem", height: "28rem" }}
                      >
                        <MDBRipple
                          rippleTag="div"
                          className="bg-image hover-overlay hover-zoom hover-shadow"
                          style={{ maxWidth: "24rem" }}
                        >
                          <img
                            className="w-100 card-image"
                            variant="top"
                            src={item.image}
                            alt={item.title}
                            width="380"
                            height="250"
                            // src="https://mdbootstrap.com/img/new/fluid/city/113.webp"
                          />
                         <NavLink to={`/shop/product/${item.slug}`}>
                         <div
                              className="mask"
                              style={{
                                zIndex: 1,
                                // backgroundColor: "rgba(157, 142, 237, 0.2)",
                              }}
                            ></div>
                         </NavLink>
                        </MDBRipple>

                        {/* <NavLink to={`/shop/product/${item.slug}`}>
                        <Card.Img
                       
                          className="card-image"
                          variant="top"
                          src={item.image}
                          alt={item.title}
                          width="380"
                          height="250"
                        />
                      </NavLink> */}

                        <Card.Body className="p-md-3">
                          <Card.Title className="">
                            <NavLink to={`/shop/product/${item.slug}`}>
                              {
                                item.title.length <= 20
                                  ? item.title
                                  : `${item.title.slice(0, 26)}...`
                                // item.title.slice(0,50)
                              }
                            </NavLink>
                          </Card.Title>

                          <Card.Text>Tk {item.price}</Card.Text>

                          {
                            item.title.length <= 25 ? (
                              <>
                                <NavLink to={`/shop/product/${item.slug}`}>
                                  <Button
                                    style={{ marginTop: "10px" }}
                                    className="btn btn-outline-info m-3"
                                    variant=""
                                  >
                                    View
                                  </Button>
                                </NavLink>
                                <Button
                                  style={{ marginTop: "10px" }}
                                  className="btn btn-outline-info m-3"
                                  variant=""
                                  onClick={() => {
                                    setCart(item);
                                  }}
                                >
                                  Add Cart
                                </Button>
                              </>
                            ) : (
                              <>
                                <NavLink to={`/shop/product/${item.slug}`}>
                                  <Button
                                    style={{ marginTop: "10px" }}
                                    className=" btn btn-outline-info m-3"
                                    variant=""
                                  >
                                    View
                                  </Button>
                                </NavLink>
                                <Button
                                  style={{ marginTop: "10px" }}
                                  className=" btn btn-outline-info m-3"
                                  variant=""
                                  onClick={() => {
                                    setCart(item);
                                  }}
                                >
                                  Add Cart
                                </Button>
                              </>
                            )
                            // item.title.slice(0,50)
                          }
                        </Card.Body>
                      </Card>
                    </MDBRipple>
                    {/* </Container> */}
                    {/* </div> */}
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      )}

      {/* <Container fluid>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
</Container> */}
    </div>
  );
}

export default Shop;
