import React, { useEffect, useContext, useState } from "react";
import { NavLink, Link, useParams, useNavigate  } from "react-router-dom";
import { productContext, categoryContext,loadContext } from "../component/shopContext";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  NavDropdown,
  Container,
  DropdownButton,
  Col,
  Row,
  Badge,
  Card,
} from "react-bootstrap";
function Category_details() {
  const [category, setCategory] = useContext(categoryContext);
  const [isLoading, setLoading] = useContext(loadContext);


  const { id,slug } = useParams();

 


  const history = useNavigate ();

  console.log(`this is a slug${slug}`);

  const  category_details = (category) => {
    return category.filter((category) => category.slug === slug);
  };

  // const url =`http://127.0.0.1:8000/products/${slug}`

  // useEffect(() => {
  //   fetchItem();
  // }, []);

  // const fetchItem = async () => {
  //   try {
  //     // const response = await fetch('https://fakestoreapi.com/products/1')
  //     const response = await fetch(`http://127.0.0.1:8000/category/${id}/`);
  //     if (response.status === 200) {
  //       const item = await response.json();
  //       setCategory(item);
       
  //       setLoading(false);
  //     } else {
  //       throw new Error(response.status);
  //     }
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // };


  return (
    <div>
    
        
        <h2>This is category name is{id} slug:{category.id} </h2>
         
       
            

    </div>
  )
}

export default Category_details;


