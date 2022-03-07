import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {
  Row,
  Col,
  Container,
  Badge,
  ListGroup,
  Navbar,
  Button,
} from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import Styles from "./useraccount.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Address() {
  return (
    <div>
      <div className={Styles.div1}>
        <h1 className={Styles.header1}>
          <span>
            <LocationOnIcon
              style={{ fontSize: "30px", color: "red", marginRight: "10px" }}
            />
            Address
          </span>
        </h1>
        <Button className={Styles.hbutton} variant="outline-secondary">
          Add new Address
        </Button>{" "}
      </div>
     <Container>
     <Item style={{padding:"20px 10px 20px 10px" ,fontSize:"15px"}}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent="space-evenly"
              alignItems="center"
            > 
            <p>Ralf Edward</p>
            <p>777 Brockton Avenue, Abington MA 2351</p>
            <p>+1 (781) 765-4321</p>
           <div className="float-right ml-28">
           <Button variant="none"><EditIcon/></Button>
            <Button variant="none"><DeleteIcon/></Button>
           </div>

              
              </Stack>
          </Item>
     </Container>
    </div>
  );
}
