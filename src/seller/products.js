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
import paginationFactory, { PaginationProvider, PaginationListStandalone } from "react-bootstrap-table2-paginator";

import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, {
  textFilter,
  numberFilter,
  dateFilter,
  Comparator,
} from "react-bootstrap-table2-filter";

import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
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

function Products() {
    const products=[
        {
            id:1,
            name:"Product 1",
            price:100,
        },
        {
            id:2,
            name:"Product 2",
            price:200,
        },
        {
            id:3,
            name:"Product 3",
            price:300,
        },
        {
            id:4,
            name:"Product 4",
            price:400,
        },
        {
            id:5,
            name:"Product 5",
            price:500,

        },
        {
            id:6,
            name:"Product 6",
            price:600,
        },
        {
            id:7,
            name:"Product 7",
            price:700,
        },
        {
            id:8,
            name:"Product 8",
            price:800,
        },
        {
            id:9,
            name:"Product 9",
            price:900,
        },
        {
            id:10,
            name:"Product 10",
            price:1000,
        },

    ];
    const columns = [{
        dataField: 'id',
        text: 'Product ID'
      }, {
        dataField: 'name',
        text: 'Name',
        sort: true,
        
      }, {
        dataField: 'price',
        text: 'Price',
        sort:true,
       
      }];

      const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
          Showing { from } to { to } of { size } Results
        </span>
      );
      
      const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
          text: '5', value: 5
        }, {
          text: '10', value: 10
        }, {
          text: 'All', value: products.length
        }] // A numeric array is also available. the purpose of above example is custom the text
      };

 return (
<Container fluid>
<ToolkitProvider
  keyField='id' bootstrap4 data={ products } columns={ columns }  
  search
>
  {
    props => (
      <div>
        <h3 className="text-start">Products</h3>
        <SearchBar { ...props.searchProps } style={{width:"50%",justifyContent:"center" ,alignItems:"center" ,justifyItems:"center"}} placeholder=" search by all properties"/>
        <hr />
        <BootstrapTable
          { ...props.baseProps }  pagination={ paginationFactory(options) }
        />
      </div>
    )
  }
</ToolkitProvider>
</Container>
 );
}

export default Products;
