import * as React from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Badge, ListGroup } from "react-bootstrap";

import { Card, Feed } from "semantic-ui-react";
import { BiHeart } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const drawerWidth = 240;

const Address = (props) => {
  return (
    <div>
    <>address</>
    </div>
  );
};
export default Address;
