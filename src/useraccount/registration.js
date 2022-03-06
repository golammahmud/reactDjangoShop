import React, { useEffect, useContext, useState } from "react";

import { MDBValidation, MDBInput, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";

import "../index.css";

function Registration() {
  const [formValue, setFormValue] = useState({
    fname: "",
    lname: "",
    email: "",
    city: "",
    state: "",
    zip: "",
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div id="register"   className="container  bg-light   border me-auto p-lg-3   text-warning mt-sm-5 mt-md-5 mt-lg-5 ">
      {" "}
     
        <h1 className="text-center   my-sm-4">Registration Form</h1>
        <MDBValidation className="row g-3  px-5  " noValidate>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bg-md-primary">
          <MDBInput
            value={formValue.fname}
            name="fname"
            onChange={onChange}
            id="validationCustom01"
            required
            label="First name"
            validation="Looks good!"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bg-md-primary ">
          <MDBInput
            value={formValue.lname}
            name="lname"
            onChange={onChange}
            id="validationCustom02"
            required
            label="Last name"
            validation="Looks good!"
          />
        </div>
        <div className="col-lg-12 col-md-12  bg-md-primary mb-3 ">
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              placeholder="Username"
              required
            />
            <div className="invalid-feedback mb-22">Please choose a username.</div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12  bg-md-primary mb-3 ">
          <div className="input-group has-validation">
            {/* <span className="input-group-text" id="inputGroupPrepend">
              @
            </span> */}
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              placeholder="Address"
              required
            />
            <div className="invalid-feedback mb-22">Please choose a username.</div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6  bg-md-primary">
          <MDBInput
            value={formValue.city}
            name="city"
            onChange={onChange}
            id="validationCustom03"
            required
            label="City"
            validation="Please provide a valid city."
            invalid
          />
        </div>
        <div className="col-lg-6 col-md-6  bg-md-primary">
          <MDBInput
            value={formValue.zip}
            name="zip"
            onChange={onChange}
            id="validationCustom05"
            required
            label="Zip"
            validation="Please provide a valid zip."
            invalid
          />
        </div>
        <div className="col-lg-12 col-md-12  bg-md-primary">
          <MDBInput
            value={formValue.phone}
            name="phone"
            onChange={onChange}
            id="validationCustom05"
            required
            label="Phone"
            validation="Please provide a valid Phone Number."
            invalid
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-md-primary">
          <MDBInput
            value={formValue.password}
            type="password"
            onChange={onChange}
            id="validationCustom03"
            required
            label="Password"
            validation="Please provide a valid city."
            invalid
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-md-primary">
          <MDBInput
            value={formValue.password2}
            type="password"
            name="password2"
            onChange={onChange}
            id="validationCustom03"
            required
            label="Confirm Password"
            validation="Please provide a valid city."
            invalid
          />
        </div>
        <div className="col-12">
          <MDBCheckbox
            label="Agree to terms and conditions"
            id="invalidCheck"
            validation="You must agree before submitting."
            invalid
            required
          />
        </div>
        <div className="col-12 my-sm-4 w-sm-75 ">
          <MDBBtn type="submit">Submit form</MDBBtn>
        </div>
      </MDBValidation>
    </div>
  );
}

export default Registration;
