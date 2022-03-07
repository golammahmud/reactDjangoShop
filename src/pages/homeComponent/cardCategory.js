import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import {
  MDBCardHeader,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import {NavLink , Link} from 'react-router-dom';
import PreviewIcon from '@mui/icons-material/Preview';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CardCategory() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      {" "}
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Shrimp and Chorizo Paella" />

            <CardContent>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                   <Link to="/category"><MDBCard className="h-100">
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                      alt="..."
                      position="top"
                      height="80px"
                      width="80px"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>Apple</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard></Link>

                  <Link to="/category"><MDBCard className="h-100">
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                      alt="..."
                      position="top"
                      height="80px"
                      width="80px"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>Apple</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard></Link>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                   <Link to="/category"><MDBCard className="h-100">
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                      alt="..."
                      position="top"
                      height="80px"
                      width="80px"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>Apple</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard></Link>
                  <Link to="/category"><MDBCard className="h-100">
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                      alt="..."
                      position="top"
                      height="80px"
                      width="80px"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>Apple</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard></Link>
                </Stack>
              </Stack>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <PreviewIcon />
                <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
                fontSize: "1rem",
              fontFamily: "Helvetica Neue",
              };
            }}
            to="/"
            // key={invoice.number}
          >
           See More...
          </NavLink>
              </IconButton>
              
            </CardActions>
          </Card>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default CardCategory;
