import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import {
  Row,
  Col,
  Container,
  Badge,
  ListGroup,
  Navbar,
  Button,
} from "react-bootstrap";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RedeemIcon from "@mui/icons-material/Redeem";

import Styles from "./useraccount.module.css";
import OrderDetailsTable from "./component/orderDetailsTable";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <RedeemIcon />,
    2: <LocalShippingIcon />,
    3: <AssignmentTurnedInIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function CustomizedSteppers() {
  return (
    <Container fluid>
      <div>
        <div className={Styles.div1}>
          <h1 className={Styles.header1}>Orders Details</h1>
          <Button className={Styles.hbutton} variant="outline-secondary">
            order again
          </Button>{" "}
        </div>
        <div
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#f2f2f2",
            padding: "40px 5px 40px 5px",
            margin: "10px 20px 10px 20px",
            
            boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
          }}
        >
          {" "}
          <div>
            {" "}
            <Stack sx={{ width: "100%" ,height: "100%"}} spacing={4}>
              <Stepper
                alternativeLabel
                activeStep={1}
                connector={<ColorlibConnector />}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel  StepIconComponent={ColorlibStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Stack>
          </div>
          {/* <div className={Styles.Ostatus}>
            <p>
              Estimated Delivery Date<span> 4th October</span>{" "}
            </p>
          </div> */}
        </div>

        <div>
          <Container fluid>
            <div style={{margin:"10px 0 10px 0"}}>
              {/* inline list */}
              <ListGroup className={Styles.statusbar}>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h5>Order ID : <span style={{color:"blue"}}>9001997718074513</span></h5>
                    </Col>
                    <Col>
                      <h5>Order Placed on : <span style={{color:"blue"}}>05 Mar, 2022</span></h5>
                    </Col>
                    <Col>
                      <h5>Delivered on : <span style={{color:"blue"}}>05 Mar, 2022</span></h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </div>
          <div className={Styles.orderDetailsTable}>  <OrderDetailsTable /></div>
          </Container>
        </div>
      </div>
    </Container>
  );
}
