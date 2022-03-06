import React, { useEffect, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { categoryContext, loadContext } from "../shopContext";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  // Button,
  Dropdown,
  NavDropdown,
  Container,
  DropdownButton,
  Col,
  Row,
  // Badge,
} from "react-bootstrap";
import { NavLink, Link, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../App.css";
import * as icon from "react-icons/fc";
import * as bicon from "react-icons/fa";
import * as bsicon from "react-icons/bs";

import "semantic-ui-css/semantic.min.css";
import AddCart from "../../products/cart";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function NavBar({itemCount}) {

  
 
  const [category, setCategory] = useContext(categoryContext);

  const [isLoading, setLoading] = useContext(loadContext);
  const [input, setInput] = useState();

  function handleInputChange(event) {
    setInput({
      city: event.target.value,
    });
  }

  return (
    // <div className="navbar-div">
    <>
      <Navbar expand="sm" bg="none">
        <Container className="nav1-con" fluid>
          <Navbar.Brand
            href="#home"
            size="large"
            className="brand-logo text-white"
          >
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
                textDecoration: "none",
              }}
            >
              Electro Hub
            </NavLink>
          </Navbar.Brand>
          <div className="form-div w-50">
            <Form className="s-form  d-flex w-100">
              {/* justify-content-center w-50 me-auto */}
              {/* <DropdownButton
                      variant="none"
                      className="d-input"
                      id="dropdown-item-button"
                      title="All"
                    >
                      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                      <Dropdown.Item as="button">Action</Dropdown.Item>
                      <Dropdown.Item as="button">Another action</Dropdown.Item>
                      <Dropdown.Item as="button">Something else</Dropdown.Item>
                    </DropdownButton> */}
              {/* <div className="form-row"> */}
              <div
                className="d-input me-auto form-group"
                style={{ width: "auto" }}
              >
                <select
                  className="form-control"
                  name="city"
                  onChange={handleInputChange}
                >
                  <option selected>All</option>
                  {category.map((cat, index) => {
                    return (
                      <option className="me-auto" value={cat.title}>
                        {cat.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* </div> */}
              <FormControl
                // size="lg"
                type="search"
                placeholder="search here "
                className=" form-input"
                aria-label="Search"
              />
              <Button className="s-btn me-auto" variant="none">
                <icon.FcSearch className="btn-icon" size={25} />
              </Button>
            </Form>
          </div>
          {/* <Navbar.Toggle className='navbar-toggle'  aria-controls="responsive-navbar-nav"/>
           */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            {" "}
            <bicon.FaBars color="white" />{" "}
          </Navbar.Toggle>
          <Navbar.Collapse className="navbar-collaps justify-content-end text-white">
            <Nav
              className="nav-cls justify-content-space-between px-lg-4"
              size="large"
            >
              <NavLink
                className="nav-link"
                to="/order"
                style={{ textDecoration: "none", color: "white" }}
              >
                Order{" "}
                <Badge bg="dark" color="white" variant="dark">
                  0
                </Badge>
              </NavLink>

              {/* <NavLink
                className="nav-link"
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              > */}
              <Button
                style={{ textDecoration: "none", color: "white" }}
                className="nav-link"
                onClick={() => <AddCart />}
              >
                <Badge color="secondary" badgeContent={itemCount}>
                  <ShoppingCartIcon />{" "}
                </Badge>
              </Button>

              <NavLink
                className="nav-link"
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                login
              </NavLink>

              <NavLink
                className="nav-link"
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                register
              </NavLink>
            </Nav>
            {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Navbar
          // collapseOnSelect
          // expand="sm"
          className="navcon justify-content-space-between "
        >
          {/* <Container > */}
          {/* <NavDropdown
            className="cat-d  text-white"
            variant="info"
            title="category "
            id="collasible-nav-dropdown"
          > */}

          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            title="Category"
            className="cat-d  "
          >
            {category.map((category, index) => {
              return (
                <Dropdown.Item key={index}>
                  <NavLink
                    exact
                    to={`/category/${category.slug}`}
                    className="navlink"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {category.title}
                  </NavLink>
                </Dropdown.Item>
              );
            })}
          </DropdownButton>

          {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}

          {/* </NavDropdown> */}

          {/* <Nav className=" d-flex me-auto">
                <Nav.Link className=" text-white" href="#features">Features</Nav.Link>
                <Nav.Link className="text-white" href="#pricing">Pricing</Nav.Link>
              </Nav> */}

          <Nav className="me-auto">
            {/* <Nav.Link className="nav2-link text-white " href="#features"> */}
            <NavLink
              className="nav2-link"
              to="/shop"
              style={{ textDecoration: "none", color: "white" }}
            >
              Shop
            </NavLink>

            <NavLink
              className="nav2-link"
              to="/pricing"
              style={{ textDecoration: "none", color: "white" }}
            >
              Pricing
            </NavLink>
            <NavLink
              className="nav2-link"
              to="/seller"
              style={{ textDecoration: "none", color: "white" }}
            >
              Seller
            </NavLink>

            {/* </Nav.Link> */}
            {/* <Nav.Link className="nav2-link text-white ">
                Pricing
              </Nav.Link> */}
            {/* <Nav.Link className="nav-link text-white" href="#features">
                Register
              </Nav.Link> */}
            {/* <Nav.Link className="nav2-link nav-link text-white ">
                Seller
              </Nav.Link> */}
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            {" "}
            <bicon.FaBars
              style={{ marginBottom: "10px" }}
              className=""
              color="white"
            />{" "}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav ">
            {/* <Nav className="me-auto">
              <Nav.Link className=" text-white bg-dark" href="#features">
                Features
              </Nav.Link>
              <Nav.Link className=" text-white bg-dark" href="#pricing">
                Pricing
              </Nav.Link>
              {/* <Nav.Link className="nav-link text-white" href="#features">
                Register
              </Nav.Link> */}
            {/* <Nav.Link className="nav-link text-white bg-dark" href="#features">
                Seller
              </Nav.Link> */}
            {/* </Nav>  */}
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;

// <Navbar className="navbar"   expand="lg"  >
//         <Navbar.Brand>
//           {" "}
//           <NavLink
//             to="/"
//             activeStyle={{
//               fontWeight: "bold",
//               color: "red",
//               textDecoration: "none",
//             }}
//           >
//             Navbar scroll
//           </NavLink>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto ml-auto mr-auto my-2 my-lg-0 "
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Item className="navitem">
//               <NavLink
//                 to="/"
//                 className="navlink"
//                 style={{ textDecoration: "none", color: "lightpurple" }}
//               >
//                 Home
//               </NavLink>
//             </Nav.Item>
//             <Dropdown >

//               <Dropdown.Toggle variant="blue" id="dropdown-basic" className="navitem"
//                 style={{  color: "lightpurple" ,fontSize:"40" ,marginTop:'12px' }}>

//                 Categories
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//           {    category.map((cat) =>{
//             return (
//               <Dropdown.Item ><NavLink  to={`category/${cat.slug}`}  className="navlink"
//               style={{ textDecoration: "none", color: "lightpurple" }}>{cat.title}</NavLink></Dropdown.Item>
//             )
//           })}
//               </Dropdown.Menu>
//             </Dropdown>

//             <Nav.Item className="navitem ">
//               <NavLink
//                 className="navlink"
//                 to="/about"
//                 style={{ textDecoration: "none" }}
//               >
//                 About
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item className="navitem ">
//               <NavLink
//                 className="navlink"
//                 to="/items"
//                 style={{ textDecoration: "none" }}
//               >
//                 Items
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item className="navitem ">
//               <NavLink
//                 className="navlink"
//                 to="/shop"
//                 style={{ textDecoration: "none" }}
//               >
//                 Shop
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item className="navitem ">
//               <NavLink
//                 className="navlink"
//                 to="/contact"
//                 style={{ textDecoration: "none", fontFamily: "italic" }}
//               >
//                 Contact
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item className="navitem ">
//               <NavLink
//                 className="navlink"
//                 to="/user"
//                 style={{ textDecoration: "none" }}
//               >
//                 Profile
//               </NavLink>
//             </Nav.Item>
//             {/* <NavDropdown
//               className="navdrop"
//               title="Link"
//               id="navbarScrollingDropdown"
//             >
//               <NavDropdown.Item>
//                 <NavLink to="/user">Profile</NavLink>
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item>
//                 <NavLink to="/user">Profile</NavLink>
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </Nav>
//           <Form className="d-flex">
//             <FormControl
//               type="search"
//               placeholder="Search"
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Navbar><Navbar className="navbar"   expand="lg"  >
//         <Navbar.Brand>
//           {" "}
//           <NavLink
//             to="/"
//             activeStyle={{
//               fontWeight: "bold",
//               color: "red",
//               textDecoration: "none",
//             }}
//           >
//             Navbar scroll
//           </NavLink>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto ml-auto mr-auto my-2 my-lg-0 "
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Item className="navitem">
//               <NavLink
//                 to="/"
//                 className="navlink"
//                 style={{ textDecoration: "none", color: "lightpurple" }}
//               >
//                 Home
//               </NavLink>
//             </Nav.Item>
//             <Dropdown >

//               <Dropdown.Toggle variant="blue" id="dropdown-basic" className="navitem"
//                 style={{  color: "lightpurple" ,fontSize:"40" ,marginTop:'12px' }}>

//                 Categories
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//           {    category.map((cat) =>{
//             return (
//               <Dropdown.Item ><NavLink  to={`category/${cat.slug}`}  className="navlink"
//               style={{ textDecoration: "none", color: "lightpurple" }}>{cat.title}</NavLink></Dropdown.Item>
//             )
//           })}
//               </Dropdown.Menu>
//             </Dropdown>

//             <Nav.Item className="navitem ">
//               <NavLink
//                 className="navlink"
//                 to="/about"
//                 style={{ textDecoration: "none" }}
//               >
//                 About
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item className="navitem ">
//               <NavLink
//                 className="navlink"
//                 to="/items"
//                 style={{ textDecoration: "none" }}
//               >
//                 Items
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item className="navitem ">
//               <NavLink
//                 className="navlink"
//                 to="/shop"
//                 style={{ textDecoration: "none" }}
//               >
//                 Shop
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item className="navitem ">
//               <NavLink
//                 className="navlink"
//                 to="/contact"
//                 style={{ textDecoration: "none", fontFamily: "italic" }}
//               >
//                 Contact
//               </NavLink>
//             </Nav.Item>
//             <Nav.Item className="navitem ">
//               <NavLink
//                 className="navlink"
//                 to="/user"
//                 style={{ textDecoration: "none" }}
//               >
//                 Profile
//               </NavLink>
//             </Nav.Item>
//             {/* <NavDropdown
//               className="navdrop"
//               title="Link"
//               id="navbarScrollingDropdown"
//             >
//               <NavDropdown.Item>
//                 <NavLink to="/user">Profile</NavLink>
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item>
//                 <NavLink to="/user">Profile</NavLink>
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </Nav>
//           <Form className="d-flex">
//             <FormControl
//               type="search"
//               placeholder="Search"
//               className="mr-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Navbar>
