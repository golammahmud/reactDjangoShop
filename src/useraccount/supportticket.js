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
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <div>
      <div className={Styles.div1}>
        <h1 className={Styles.header1}>
          <span>
            <HeadsetMicIcon
              style={{ fontSize: "30px", color: "red", marginRight: "10px" }}
            />
          </span>
         Support Tickets
        </h1>
        <Button className={Styles.hbutton} variant="outline-secondary">
          Add Tickets
        </Button>{" "}
      </div>
      <Stack spacing={2}>
       <Container> <Item>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Stack direction="column" spacing={2}>
              <h4>My product is broken. I need refund</h4>
              <Stack direction="row" spacing={2}>
                <h6 className={Styles.S_urgentBtn} onClick={() => console.log("urgent button works")}>
                  Urgent
                </h6>
                <h6 className={Styles.S_openBtn} onClick={() => console.log("open button works")}>Open</h6>
                <p>14 Dec 2020</p>
                <p>website Problems</p>
              </Stack>
            </Stack>
            <span
              style={{
                justifyContent: "flex-end",
                alignItems: "center",
                marginLeft: "30px",
              }}
            >
              <ArrowRightAltIcon style={{ fontSize: "30px" }} />
            </span>
          </Stack>
        </Item></Container>
       <Container> <Item>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Stack direction="column" spacing={2}>
              <h4>My product is broken. I need refund</h4>
              <Stack direction="row" spacing={2}>
                <h6 onClick={() => console.log("urgent button works")}>
                  Urgent
                </h6>
                <h6 onClick={() => console.log("open button works")}>Open</h6>
                <p>14 Dec 2020</p>
                <p>website Problems</p>
              </Stack>
            </Stack>
            <span
              style={{
                justifyContent: "flex-end",
                alignItems: "center",
                marginLeft: "30px",
              }}
            >
              <ArrowRightAltIcon style={{ fontSize: "30px" }} />
            </span>
          </Stack>
        </Item></Container>
        <Container><Item>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Stack direction="column" spacing={2}>
              <h4>My product is broken. I need refund</h4>
              <Stack direction="row" spacing={2}>
                <h6 onClick={() => console.log("urgent button works")}>
                  Urgent
                </h6>
                <h6 onClick={() => console.log("open button works")}>Open</h6>
                <p>14 Dec 2020</p>
                <p>website Problems</p>
              </Stack>
            </Stack>
            <span
              style={{
                justifyContent: "flex-end",
                alignItems: "center",
                marginLeft: "30px",
              }}
            >
              <ArrowRightAltIcon style={{ fontSize: "30px" }} />
            </span>
          </Stack>
        </Item></Container>
      </Stack>
    </div>
  );
}
