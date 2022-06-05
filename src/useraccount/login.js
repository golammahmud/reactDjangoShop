import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import loginLogo from "../images/electrohub-logo.png"

function LoginPage() {
  const styles = {
    base: {
      // height: "100vh",
      marginTop: "8rem",
      marginBottom: "8rem",
      // backgroundImage: `url(${loginphoto})` /* The image used */,
      // 
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // flexDirection: "column",
      // color: "white",
      // fontSize: "1em",
      // fontWeight: "bold",
      // textShadow: "0 0 10px black",
      // textAlign: "center",
      // padding: "2em",
      // margin: "0",
      // boxShadow: "0 0 10px black",
      // borderRadius: "0",
      // border: "0",
      // overflow: "hidden",
    },

    loginForm: {
      marginTop: "0px",
      marginBottom: "0px",
      marginLeft: "auto",
      marginRight: "auto",
      // width: "400px",
      // padding: "20px",
      backgroundColor: "#fafafa",
      borderRadius: "5px",
      boxShadow: "0px 0px 5px #ccc",
    },
    loginHeader: {
      marginBottom: "30px",
    },
    loginButton: {
      marginTop: "20px",
    },
  };
  return (
    <div className="">
      <Grid
        className=""
        textAlign="center"
        style={styles.base}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
        
          <Header className="d-block p-2" style={styles.loginHeader} as="h2" color="teal" textAlign="center">
          <Image src={loginLogo} style={{width: "160px"}} className="justify-content-center" />
             <span className="d-block">Log-in to your account</span>
          </Header>
          <Form size="large" >
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
             
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="teal" fluid size="large" >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us?<Link to="/register">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default LoginPage;
