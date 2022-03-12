import * as React from "react";
import ".././index.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardHeader,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Badge, ListGroup, Navbar } from "react-bootstrap";

import { Card, Feed } from "semantic-ui-react";
import { BiHeart } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

// mui components

// materials icon
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
  NavLink,
} from "react-router-dom";

import * as bsicon from "react-icons/bs";
import * as bicon from "react-icons/fa";
import GridViewIcon from '@mui/icons-material/GridView';


const drawerWidth = 240;
function SellerNavbar(props) {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      quantity: 1,
      total: "$100",
      action: "Remove",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$100",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      quantity: 1,
      total: "$100",
      action: "Remove",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$100",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      quantity: 1,
      total: "$100",
      action: "Remove",
    },
  ];
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ];

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
    
      <ListGroup variant="flush" numbered className="my-3">
       <NavLink to="dashboard"> <h5 className=" align-items-start mt-5 items-start"><span className="ml-4 mr-3"><GridViewIcon/></span>Dashboard</h5></NavLink>
        <NavLink to="orders">
          <ListGroup.Item className="d-flex justify-content-between align-items-start my-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <span>
                  <BiShoppingBag
                    style={{ fontSize: "25px", marginRight: "4px" }}
                  />
                </span>
                Orders
              </div>
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
        </NavLink>

        <NavLink to="products">
          <ListGroup.Item className="d-flex justify-content-between align-items-start my-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <span>
                  {" "}
                  <BiHeart style={{ fontSize: "25px", marginRight: "4px" }} />
                </span>
               Products
              </div>
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
        </NavLink>

        <NavLink to="addproduct">
          <ListGroup.Item className="d-flex justify-content-between align-items-start my-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <span>
                  <BiSupport style={{ fontSize: "25px", marginRight: "4px" }} />
                </span>
                Add New Product
              </div>
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
        </NavLink>

        <h5 className="text-left mt-3">Accounts Settings</h5>

        <NavLink to="profile">
          <ListGroup.Item className="d-flex justify-content-between align-items-start my-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <span>
                  <BsFillPersonFill
                    style={{ fontSize: "25px", marginRight: "4px" }}
                  />
                </span>
                Profile Info
              </div>
            </div>
          </ListGroup.Item>
        </NavLink>

        {/* <NavLink to="address">
          <ListGroup.Item className="d-flex justify-content-between align-items-start my-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <span>
                  {" "}
                  <GoLocation
                    style={{ fontSize: "25px", marginRight: "4px" }}
                  />
                </span>
                Address
              </div>
            </div>
          </ListGroup.Item>
        </NavLink>

        <NavLink to="paymentmethod">
          <ListGroup.Item className="d-flex justify-content-between align-items-start my-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <span>
                  <BiSupport style={{ fontSize: "25px", marginRight: "4px" }} />
                </span>
                Payment Methods
              </div>
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
        </NavLink> */}
      </ListGroup>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Container fluid className="mt-md-5">
      <Row>
        <Col className="me-auto px-auto mx-auto" md={3}>
          <CssBaseline />
          <Navbar id="nav" fixed="bottom" expand="lg">
            <Container fluid>
              <Navbar.Brand className="text-white">
              <span className="ml-4 mr-3"><GridViewIcon/></span>Admin Dashboard
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="" onClick={handleDrawerToggle}>
                {" "}
                <bicon.FaBars className="ml-4 " color="white" />{" "}
              </Navbar.Toggle>
            </Container>
          </Navbar>

          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

            <SwipeableDrawer
              // anchor={anchor}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </SwipeableDrawer>

            <div id="cdashboard">
              <ListGroup
                variant="flush"
                numbered
                className="my-3"
                sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
                open
              >
                <NavLink to="dashboard"> <h5 className=" align-items-start mt-5 items-start"><span className="ml-4 mr-3"><GridViewIcon/></span>Dashboard</h5></NavLink>
                <NavLink to="orders">
                  <ListGroup.Item className="d-flex justify-content-between align-items-start my-3">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        <span>
                          <BiShoppingBag
                            style={{ fontSize: "25px", marginRight: "4px" }}
                          />
                        </span>
                        Orders
                      </div>
                    </div>
                    <Badge bg="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                </NavLink>

                <NavLink to="products">
                  <ListGroup.Item className="d-flex justify-content-between align-items-start my-3">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        <span>
                          {" "}
                          <BiHeart
                            style={{ fontSize: "25px", marginRight: "4px" }}
                          />
                        </span>
                        Products
                      </div>
                    </div>
                    <Badge bg="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                </NavLink>

                <NavLink to="addproduct">
                  <ListGroup.Item className="d-flex justify-content-between align-items-start my-3">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        <span>
                          <BiSupport
                            style={{ fontSize: "25px", marginRight: "4px" }}
                          />
                        </span>
                       Add New Product
                      </div>
                    </div>
                    <Badge bg="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                </NavLink>

                <h5 className="text-left mt-3">Accounts Settings</h5>

                <NavLink to="profile">
                  <ListGroup.Item className="d-flex justify-content-between align-items-start my-3">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        <span>
                          <BsFillPersonFill
                            style={{ fontSize: "25px", marginRight: "4px" }}
                          />
                        </span>
                        Profile Info
                      </div>
                    </div>
                  </ListGroup.Item>
                </NavLink>

               
              </ListGroup>
            </div>
          </Box>
        </Col>
        <Col variant="primary" className="outlet" md={9}>
          <div>
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SellerNavbar;


