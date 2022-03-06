import React, { useRef, useState } from "react";
import { Form, Container, Button, InputGroup } from "react-bootstrap";
import styles from "../../src/mystyle.module.css";
import "../App.css";
function About() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const headingRef = useRef();
  console.log(headingRef);
  const [showData, setData] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // headingRef.current.style.color="red";
    headingRef.current.classList.add("inputStyle");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    emailRef.current.classList.add("inputStyle");
    email === ""
      ? alert("email firlds can not be empty")
      : password === ""
      ? alert("password firlds can not be empty")
      : setData(true);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h1 className={styles.bigblue}>this is a About page!</h1>;
      <Container className={styles.formcontainer}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Enter email"
              ref={emailRef}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>
          <h2 ref={headingRef}>this is a email and password page</h2>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <p>
          {showData
            ? `the email:${emailRef.current.value} and the password:${passwordRef.current.value} `
            : " "}
        </p>
      </Container>
    </div>
  );
}

export default About;
