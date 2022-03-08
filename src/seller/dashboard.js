import React from "react";
import { Container, Button } from "react-bootstrap";
import Styles from "../useraccount/useraccount.module.css";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function SellerDashboard() {
  return (
    <Container fluid>
      <div>
        <div className={Styles.div1}>
          <h1 className={Styles.header1}>
            <span>
              <ShoppingBagIcon
                style={{ fontSize: "30px", color: "red", marginRight: "10px" }}
              />
            </span>
           Dashboard
          </h1>
          <Button className={Styles.hbutton} variant="outline-secondary">
            edit profile
          </Button>{" "}
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Item>
                <div>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />

                    <Stack style={{ marginLeft: "5px" }} direction="column">
                      <h6>
                        <span>Ralph Edwards</span>
                      </h6>
                      <p>
                        Blance:<span style={{ color: "blue" }}>$500</span>
                      </p>
                    </Stack>

                    <div className={Styles.userstatusdiv}>
                      <h6 className={Styles.userstatus}>
                        <span>
                          <LocalPoliceIcon />
                        </span>
                        Silver User
                      </h6>
                    </div>
                  </Stack>
                </div>
              </Item>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={4}>
              <Item>
                <Stack style={{ marginLeft: "5px" }} direction="column">
                  <h3>
                    <span style={{ color: "red" }}>16</span>
                  </h3>
                  <h6>
                    <span style={{ color: "green" }}>All Orders</span>
                  </h6>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={4}>
              <Item>
                {" "}
                <Stack style={{ marginLeft: "5px" }} direction="column">
                  <h3>
                    <span style={{ color: "red" }}>02</span>
                  </h3>
                  <h6>
                    <span style={{ color: "green" }}>Awaiting Payments</span>
                  </h6>
                </Stack>
              </Item>
            </Grid>
            {/* <Grid item xs={6} sm={6} md={6} lg={2}>
              <Item>
                {" "}
                <Stack style={{ marginLeft: "5px" }} direction="column">
                  <h3>
                    <span style={{ color: "red" }}>08</span>
                  </h3>
                  <h6>
                    <span style={{ color: "green" }}>Awaiting Shipment</span>
                  </h6>
                </Stack>
              </Item>
            </Grid> */}
            {/* <Grid item xs={6} sm={6} md={6} lg={2}>
              <Item>
                {" "}
                <Stack style={{ marginLeft: "5px" }} direction="column">
                  <h3>
                    <span style={{ color: "red" }}>02</span>
                  </h3>
                  <h6>
                    <span style={{ color: "green" }}>Awaiting Delivery</span>
                  </h6>
                </Stack>
              </Item>
            </Grid> */}
          </Grid>
          <Grid container spacing={2}></Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: "10vh" }}>
          <Grid container spacing={2} item xs={6} sm={6} md={8}  className={Styles.profileinfobox}>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              {" "}
              <Stack style={{ marginLeft: "5px" }} direction="column">
                <h6>
                  <span style={{ color: "gray" }}>First Name</span>
                </h6>
                <h6>
                  <span style={{ color: "blue" }}>Jhon</span>
                </h6>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              {" "}
              <Stack style={{ marginLeft: "5px" }} direction="column">
                <h6>
                  <span style={{ color: "gray" }}>Last Name</span>
                </h6>
                <h6>
                  <span style={{ color: "blue" }}>Dou</span>
                </h6>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              {" "}
              <Stack style={{ marginLeft: "5px" }} direction="column">
                <h6>
                  <span style={{ color: "gray" }}>email</span>
                </h6>
                <h6>
                  <span style={{ color: "blue" }}>jhondou@gmail.com</span>
                </h6>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              {" "}
              <Stack style={{ marginLeft: "5px" }} direction="column">
                <h6>
                  <span style={{ color: "gray" }}>Phone</span>
                </h6>
                <h6>
                  <span style={{ color: "blue" }}>+12355158521</span>
                </h6>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              {" "}
              <Stack style={{ marginLeft: "5px" }} direction="column">
                <h6>
                  <span style={{ color: "gray" }}>Address</span>
                </h6>
                <h6>
                  <span style={{ color: "blue" }}>Dhaka ,Bangladesh</span>
                </h6>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}

export default SellerDashboard;
