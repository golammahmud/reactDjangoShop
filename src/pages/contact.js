import React, { useReducer,useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import styles from "../../src/mystyle.module.css";
import "../App.css";

const initialState = {
  email: "",
  password: "",
  termsAccepted: true,
};
const reducer = (state, action) => {
  console.log(state)
  return { ...state, [action.input]: action.value };
};



const validateState = (state) =>{

  let errors={};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!state.email){
    errors.email = "Can not be blank"
  }else if (!regex.test(state.email)) {
    errors.email = "Invalid email format";
  }
  if(!state.password){
    errors.password=" password can not be blank"
  }else if(state.password.length<4){
    errors.password=" password must be more than 4 characters long"
  }


  return errors;
  // return state.email && state.password && state.termsAccepted ;
};


function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);
const [error,setError]=useState({});
 console.log(error)

  const handleClick = (event) => {
    event.preventDefault();
    setError(validateState(state));
      alert(`email:${state.email} and password:${state.password}`)

 
    
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    const action = {
      input: name,
      value: name==='termsAccepted'? checked : value,
    };
    dispatch(action );
  };

  

  return (
    <div>
      <h1>This is a contact page|useReducer hooks</h1>

      <Container className={styles.formcontainer}>
        <Form className="formcontainer">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            {error?<small style={{color:'red'}}>{error.email}</small>:null}
            {/* {error.map(error=><small>{error.email}</small>)} */}
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
               {error?<small style={{color:'red'}}>{error.password}</small>:null}
             {/* {error.map(error=><small>{error.email}</small>)} */}
          </Form.Group>
          <Form.Group
            className="checkboxlabel mb-3"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              className="checkbox "
              type="checkbox"
              name="termsAccepted"
              label="Check me out"
              onChange={handleChange}
            />
               {error?<small style={{color:'red'}}>{error.termsAccepted}</small>:null}
             {/* {error.map(error=><small>{error.email}</small>)} */}
          </Form.Group>

          <Button
            onClick={handleClick}
            disabled={!validateState(state)}
           className={!validateState(state)?"disabled":null}
          >
            Submit
          </Button>
        </Form>

        {/* <p>{showData ? `the email:${emailRef.current.value} and the password:${passwordRef.current.value} `:' '}</p> */}
      </Container>
    </div>
  );
}

export default Contact;
