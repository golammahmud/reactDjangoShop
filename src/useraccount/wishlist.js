import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import { Container, Box } from "@material-ui/core";
import {
  Row,
  Col,
  // Container,
  Badge,
  ListGroup,
  Navbar,
  Button,
} from "react-bootstrap";
import Styles from "./useraccount.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Shop from "../pages/shop";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Media(props) {
  const { loading = false } = props;

  return (
    <Container fluid>
      <div>
        <div className={Styles.div1}>
          <h1 className={Styles.header1}>
            <span>
              <FavoriteIcon
                style={{ fontSize: "30px", color: "red", marginRight: "10px" }}
              />
            </span>
            Orders Details
          </h1>
          <Button className={Styles.hbutton} variant="outline-secondary">
            Add to Cart
          </Button>{" "}
        </div>
      </div>
      <Row>
        <Col lg="auto" xl={3} className="card-col p-md-3 ">
          <Card className={Styles.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={Styles.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              className={Styles.media}
              image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Col>
      </Row>

      <Container>
        {" "}
        <Stack
          spacing={2}
          className="justify-center mt-5 align-center justify-content-center me-auto"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Pagination count={10} color="primary" />
        </Stack>
      </Container>
    </Container>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

function Wishlist() {
  return (
    <div>
      {/* <Media loading /> */}
      <Media />
    </div>
  );
}
export default Wishlist;
