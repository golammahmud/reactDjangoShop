import React from "react";
import { Container, Button } from "react-bootstrap";
import Styles from "../useraccount/useraccount.module.css";
import Styles_seller from "./seller.module.css";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";

import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";

import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, {
  textFilter,
  numberFilter,
  dateFilter,
  Comparator,
} from "react-bootstrap-table2-filter";

import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { BiShoppingBag } from "react-icons/bi";

import { Outlet, NavLink, useParams } from "react-router-dom";


const { SearchBar } = Search;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function SellerOrders() {
  const products=[
    {
      id:1,
      orderId:Math.floor(Math.random() * 10),
      productName:"Product 1",
      productPrice:100,
      productQuantity:1,
      productImage:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      productStatus:"Pending",
      productDate:"2020-01-01",
      productTime:"12:00",
      productAddress:"Address 1",
      productCity:"City 1",
      productState:"State 1",
      productCountry:"Country 1",
      productPincode:"Pincode 1",
      productPhone:"Phone 1",
      productEmail:"Email 1",
      productPaymentMode:"Payment Mode 1",
      productPaymentStatus:"Payment Status 1",
      productPaymentDate:"2020-01-01",
      productPaymentTime:"12:00",
      productPaymentId:"Payment Id 1",
      productPaymentAmount:"Payment Amount 1",
      productPaymentCurrency:"Payment Currency 1",
      productPaymentGateway:"Payment Gateway 1",
      productPaymentGatewayId:"Payment Gateway Id 1",
      productPaymentGatewayStatus:"Payment Gateway Status 1",
      productPaymentGatewayResponse:"Payment Gateway Response 1",
     
    },
    {
      id:2,
      orderId:Math.floor(Math.random() * 10),
      productName:"Product 2",
      productPrice:200,
      productQuantity:2,
      productImage:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      productStatus:"Pending",
      productDate:"2020-01-01",
      productTime:"12:00",
      productAddress:"Address 2",
      productCity:"City 2",
      productState:"State 2",
      productCountry:"Country 2",
      productPincode:"Pincode 2",
      productPhone:"Phone 2",
      productEmail:"Email 2",
      productPaymentMode:"Payment Mode 2",
      productPaymentStatus:"Payment Status 2",
      productPaymentDate:"2020-01-01",
      productPaymentTime:"12:00", 

      productPaymentId:"Payment Id 2",
      productPaymentAmount:"Payment Amount 2",
      productPaymentCurrency:"Payment Currency 2",
      productPaymentGateway:"Payment Gateway 2",
      productPaymentGatewayId:"Payment Gateway Id 2",
      productPaymentGatewayStatus:"Payment Gateway Status 2",
      productPaymentGatewayResponse:"Payment Gateway Response 2",
    },
    {
      id:3,
     
      orderId:Math.floor(Math.random() * 10),
      productPrice:200,
      productQuantity:2,
      productImage:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      productStatus:"Pending",
      productDate:"2020-01-01",
      productTime:"12:00",
      productAddress:"Address 2",
      productCity:"City 2",
      productState:"State 2",
      productCountry:"Country 2",
      productPincode:"Pincode 2",
      productPhone:"Phone 2",
      productEmail:"Email 2",
      productPaymentMode:"Payment Mode 2",
      productPaymentStatus:"Payment Status 2",
      productPaymentDate:"2020-01-01",
      productPaymentTime:"12:00", 

      productPaymentId:"Payment Id 2",
      productPaymentAmount:"Payment Amount 2",
      productPaymentCurrency:"Payment Currency 2",
      productPaymentGateway:"Payment Gateway 2",
      productPaymentGatewayId:"Payment Gateway Id 2",
      productPaymentGatewayStatus:"Payment Gateway Status 2",
      productPaymentGatewayResponse:"Payment Gateway Response 2",
    },
    {
      id:4,
      orderId:Math.floor(Math.random() * 10),
      productName:"Product 2",
      productPrice:200,
      productQuantity:2,
      productImage:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      productStatus:"Pending",
      productDate:"2020-01-01",
      productTime:"12:00",
      productAddress:"Address 2",
      productCity:"City 2",
      productState:"State 2",
      productCountry:"Country 2",
      productPincode:"Pincode 2",
      productPhone:"Phone 2",
      productEmail:"Email 2",
      productPaymentMode:"Payment Mode 2",
      productPaymentStatus:"Payment Status 2",
      productPaymentDate:"2020-01-01",
      productPaymentTime:"12:00", 

      productPaymentId:"Payment Id 2",
      productPaymentAmount:"Payment Amount 2",
      productPaymentCurrency:"Payment Currency 2",
      productPaymentGateway:"Payment Gateway 2",
      productPaymentGatewayId:"Payment Gateway Id 2",
      productPaymentGatewayStatus:"Payment Gateway Status 2",
      productPaymentGatewayResponse:"Payment Gateway Response 2",
    },
    {
      id:5,
      orderId:Math.floor(Math.random() * 10),
      productName:"Product 2",
      productPrice:200,
      productQuantity:2,
      productImage:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      productStatus:"Pending",
      productDate:"2020-01-01",
      productTime:"12:00",
      productAddress:"Address 2",
      productCity:"City 2",
      productState:"State 2",
      productCountry:"Country 2",
      productPincode:"Pincode 2",
      productPhone:"Phone 2",
      productEmail:"Email 2",
      productPaymentMode:"Payment Mode 2",
      productPaymentStatus:"Payment Status 2",
      productPaymentDate:"2020-01-01",
      productPaymentTime:"12:00", 

      productPaymentId:"Payment Id 2",
      productPaymentAmount:"Payment Amount 2",
      productPaymentCurrency:"Payment Currency 2",
      productPaymentGateway:"Payment Gateway 2",
      productPaymentGatewayId:"Payment Gateway Id 2",
      productPaymentGatewayStatus:"Payment Gateway Status 2",
      productPaymentGatewayResponse:"Payment Gateway Response 2",
    },
    {
      id:6,
      orderId:Math.floor(Math.random() * 10),
      productName:"Product 2",
      productPrice:200,
      productQuantity:2,
      productImage:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      productStatus:"Pending",
      productDate:"2020-01-01",
      productTime:"12:00",
      productAddress:"Address 2",
      productCity:"City 2",
      productState:"State 2",
      productCountry:"Country 2",
      productPincode:"Pincode 2",
      productPhone:"Phone 2",
      productEmail:"Email 2",
      productPaymentMode:"Payment Mode 2",
      productPaymentStatus:"Payment Status 2",
      productPaymentDate:"2020-01-01",
      productPaymentTime:"12:00", 

      productPaymentId:"Payment Id 2",
      productPaymentAmount:"Payment Amount 2",
      productPaymentCurrency:"Payment Currency 2",
      productPaymentGateway:"Payment Gateway 2",
      productPaymentGatewayId:"Payment Gateway Id 2",
      productPaymentGatewayStatus:"Payment Gateway Status 2",
      productPaymentGatewayResponse:"Payment Gateway Response 2",
    },
    {
      id:7,
      orderId:Math.floor(Math.random() * 10),
      productName:"Product 2",
      productPrice:200,
      productQuantity:2,
      productImage:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      productStatus:"Success",
      productDate:"2020-01-01",
      productTime:"12:00",
      productAddress:"Address 2",
      productCity:"City 2",
      productState:"State 2",
      productCountry:"Country 2",
      productPincode:"Pincode 2",
      productPhone:"Phone 2",
      productEmail:"Email 2",
      productPaymentMode:"Payment Mode 2",
      productPaymentStatus:"Payment Status 2",
      productPaymentDate:"2020-01-01",
      productPaymentTime:"12:00", 

      productPaymentId:"Payment Id 2",
      productPaymentAmount:"Payment Amount 2",
      productPaymentCurrency:"Payment Currency 2",
      productPaymentGateway:"Payment Gateway 2",
      productPaymentGatewayId:"Payment Gateway Id 2",
      productPaymentGatewayStatus:"Payment Gateway Status 2",
      productPaymentGatewayResponse:"Payment Gateway Response 2",
    },
  ];
  // put image on table
  const imageFormatter = (cell, row) => {
    return (
      <img
        src={cell}
        alt={row.name}
        rounded
        className="img-responsive img-rounded rounded mx-auto d-block img-fluid"
        thumbnail
        style={{ width: "100px", height: "100px" }}
      />
    );
  };

  function priceFormatter(column, colIndex, { sortElement, filterElement }) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {filterElement}
        {column.text}
        {sortElement}
      </div>
    );
  }
  const [view,setView] = React.useState(false);
  const columns = [
    {
      dataField: "orderId",
      text: "Order Id",
      sort: true,
      headerStyle: {
        width: "20%",
      },
    },
    {
      dataField: "productStatus",
      text: "Status",
      title: (cell, row, rowIndex, colIndex) =>
        `This is custom title for ${cell}`,
      sort: true,
      // headerClasses: "text-center overflow-auto",
      headerStyle: {
        width: "auto%",
        overflow: "auto",
      },
      filter: textFilter({
        placeholder: "Search by name",
        style: {
          width: "100%",
          // height: "100%",
          fluid: true,
          display: "flex",
          Justifycontent: "start",
        },
      }),
      // headerFormatter: priceFormatter,
    },
    {
      dataField: "productPrice",
      text: "Total Price",
      sort: true,
      filter: numberFilter({
        defaultValue: {
          comparator: Comparator.EQ,
        },
        style: {
          fluid: true,
          display: "flex",
          justifyContent: "start",
          width: "100%",
        },
      }),
      headerFormatter: priceFormatter,

      // headerClasses: "text-center overflow-auto",
      headerStyle: {
        // width: "auto",
        overflow: "auto",
      },
    },
    
    {
      dataField: "productDate",
      text: "Purchase Date",
      sort: true,
      filter: dateFilter({
        dateFormat: "YYYY-MM-DD",
        delay: 1000,
        defaultValue: {
          comparator: Comparator.EQ,

          // date: new Date(),
        },

        style: {
          overflow: "auto",
          display: "flex",
          justifyContent: "start",
          width: "100%",

        },
        
      }),
      // headerClasses: "text-center overflow-auto",
      headerStyle: {
        width: "auto%",
        overflow: "auto",
      },
    },
   
  ];
   

  // custom sales pagination
  const pageButtonRenderer = ({
    page,
    active,
    disable,
    title,
    onPageChange,
  }) => {
    const handleClick = (e) => {
      e.preventDefault();
      onPageChange(page);
    };
    const activeStyle = {};
    if (active) {
      activeStyle.backgroundColor = "black";
      activeStyle.color = "white";
    } else {
      activeStyle.backgroundColor = "gray";
      activeStyle.color = "black";
    }
    if (typeof page === "string") {
      activeStyle.backgroundColor = "white";
      activeStyle.color = "black";
    }
    return (
      <li className="page-item">
        <a href="#" onClick={handleClick} style={activeStyle}>
          {page}
        </a>
      </li>
    );
  };

  const option = {
    pageButtonRenderer,
  };
  const customTotal = (from, to, size) => (
    <span style={{justifyContent: 'center',alignItems: 'center', marginLeft:"20px" ,justifyItems:"center" ,display: 'inline-block'}} className="react-bootstrap-table-pagination-total ">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    options: option,
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: products.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  const CaptionElement = () => (
    <h3
      style={{
        borderRadius: "0.25em",
        position: "top",
        textAlign: "center",
        color: "purple",
        border: "1px solid purple",
        padding: "0.5em",
      }}
    >
      Sales
    </h3>
  );

  return (
  
    <div className="px-5 py-sm-4">
        <div>
        <Item>
          {" "}
          <h1 className="text-start">
            <span>
              <BiShoppingBag style={{ fontSize: "40px", marginRight: "5px" }} />
            </span>
             Orders
          </h1>
        </Item>
       
      </div>
      <Item>
      <BootstrapTable
              filterPosition="top"
              bootstrap4
              keyField="id"
              data={products}
             
              pagination={paginationFactory(options)}
              columns={columns}
              filter={filterFactory()}
            />
       </Item>
  
    </div>
  );
}

export default SellerOrders;
