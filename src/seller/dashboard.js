import React from 'react'
import { Row, Col, Container, Badge, ListGroup,Navbar } from "react-bootstrap";
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
function SellerDashboard() {
  return (
    <div>SellerDashboard

<Outlet/>
    </div>
  )
}

export default SellerDashboard;