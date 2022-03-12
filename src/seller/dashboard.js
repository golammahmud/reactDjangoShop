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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function SellerDashboard() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "100",
      quantity: "10",
      description: "This is product 1",
      image: "https://source.unsplash.com/random/400x200",
      createData: "2020-01-01",
    },
    {
      id: 2,
      name: "Product 2",
      price: "200",
      quantity: "20",
      description: "This is product 2",
      image: "https://source.unsplash.com/random/400x200",
      createData: "2020-01-11",
    },
    {
      id: 3,
      name: "Product 3",
      price: "300",
      quantity: "30",
      description: "This is product 3",
      image: "https://source.unsplash.com/random/400x200",
      createData: "2020-03-01",
    },
    {
      id: 4,
      name: "Product 4",
      price: "400",
      quantity: "40",
      description: "This is product 4",
      image: "https://source.unsplash.com/random/400x200",
      createData: "2020-05-11",
    },
    {
      id: 5,
      name: "Product 5",
      price: "500",
      quantity: "50",
      description: "This is product 5",
      image: "https://source.unsplash.com/random/400x200",
      createData: "2020-07-01",
    },
    {
      id: 6,
      name: "Product 6",
      price: "600",
      quantity: "60",
      description: "This is product 6",
      image: "https://source.unsplash.com/random/400x200",
      createData: "2020-09-11",
    },
    {
      id: 7,
      name: "Product 7",
      price: "700",
      quantity: "70",
      description: "This is product 7",
      image: "https://source.unsplash.com/random/400x200",
      createData: "2020-11-01",
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
  const columns = [
    {
      dataField: "image",
      text: "Image",
      sort: true,

      title: (cell, row, rowIndex, colIndex) => `This is product image ${cell}`,
      formatter: imageFormatter,
      headerStyle: {
        width: "auto%",
        overflow: "auto",
      },
    },
    {
      dataField: "name",
      text: "Name",
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
      headerFormatter: priceFormatter,
    },
    {
      dataField: "price",
      text: "Price",
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
      dataField: "quantity",
      text: "Quantity",
      sort: true,
      filter: numberFilter({
        defaultValue: {
          comparator: Comparator.EQ,
        },
        style: {
          // width: "auto",
          overflow: "auto",
        },
      }),
      headerFormatter: priceFormatter,
      // headerClasses: "text-center overflow-auto",
      headerStyle: {
        // width: "auto%",
        overflow: "auto",
      },
    },
    {
      dataField: "createData",
      text: "Create Date",
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
    <span className="react-bootstrap-table-pagination-total ml-3">
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
    <Container fluid >
      <div>
        <div className={Styles.div1}>
          <h1 className={Styles.header1}>
            <span>
              <ShoppingBagIcon
                style={{ fontSize: "30px", color: "red", marginRight: "10px" }}
              />
            </span>
            Dashboard
          </h1>
          <Button className={Styles.hbutton} variant="outline-secondary">
            edit profile
          </Button>{" "}
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Item>
                <Stack style={{ marginLeft: "5px" }} direction="column">
                  <h6>
                    <span style={{ color: "gray" }}>
                      Earnings (before taxes)
                    </span>
                  </h6>
                  <h2>
                    <span style={{ color: "red" }}>$30450.00</span>
                  </h2>
                  <h6>
                    <span style={{ color: "gray" }}>
                      after associated vendor fees
                    </span>
                  </h6>
                </Stack>
              </Item>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={4}>
              <Item>
                <Stack style={{ marginLeft: "5px" }} direction="column">
                  <h6>
                    <span style={{ color: "gray" }}>Your balance</span>
                  </h6>
                  <h2>
                    <span style={{ color: "red" }}>$4000.00</span>
                  </h2>
                  <h6>
                    <span style={{ color: "gray" }}>
                      Will be processed on Feb 15, 2021
                    </span>
                  </h6>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={4}>
              <Item>
                {" "}
                <Stack style={{ marginLeft: "5px" }} direction="column">
                  <h6>
                    <span style={{ color: "gray" }}>Pending Orders</span>
                  </h6>
                  <h2>
                    <span style={{ color: "red" }}>08</span>
                  </h2>
                  <h6>
                    <span style={{ color: "gray" }}>7/3/2020 - 8/1/2020</span>
                  </h6>
                </Stack>
              </Item>
            </Grid>
          
          </Grid>
          <Grid container spacing={2}></Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: "10vh" }}>
         <Grid container spacing={{ xs: 2, md: 3 }}>
         <Grid
            // container
            spacing={2}
            item
            xs={12}
            sm={12}
            md={8}
            className={Styles.profileinfobox}
          >
            <BootstrapTable
              filterPosition="top"
              bootstrap4
              keyField="id"
              data={products}
              caption={<CaptionElement />}
              pagination={paginationFactory(options)}
              columns={columns}
              filter={filterFactory()}
            />
          </Grid>

          <Grid
           
            item
            xs={12}
            sm={12}
            md={4}
            style={{ padding:"0 5px 0 5px 0",height:"100%" }}
            className={Styles.profileinfobox}
          >
            <div>
              <h3 style={{margin:"10px 0 20px 0"} } className="text-start">
                <span style={{ color: "gray" }}>
                  <ShoppingBagIcon
                    style={{
                      fontSize: "30px",
                      color: "red",
                      marginRight: "10px",
                    }}
                  />
                </span>
                Top Countries
              </h3>
            </div>
            <Stack style={{ marginLeft: "5px" }} direction="column" spacing={2}>
              <Stack spacing={2} direction="row"><Avatar
                style={{ marginLeft: "5px" }}
                name="India"
                round={true}
                size="md"
              />
              <h5>Bangladesh</h5>

              <h5 className="float-right">$5000</h5></Stack>
              <Stack spacing={2} direction="row"><Avatar
                style={{ marginLeft: "5px" }}
                name="India"
                round={true}
                size="md"
              />
              <h5>Austrilia</h5>

              <h5 className="float-right">$5000</h5></Stack>
              <Stack spacing={2} direction="row"><Avatar
                style={{ marginLeft: "5px" }}
                name="India"
                round={true}
                size="md"
              />
              <h5>USA</h5>

              <h5 className="float-right">$5000</h5></Stack>
              <Stack spacing={2} direction="row"><Avatar
                style={{ marginLeft: "5px" }}
                name="India"
                round={true}
                size="md"
              />
              <h5>Japan</h5>

              <h5 className="float-right">$5000</h5></Stack>
              <Stack spacing={2} direction="row"><Avatar
                style={{ marginLeft: "5px" }}
                name="India"
                round={true}
                size="md"
              />
              <h5>China</h5>

              <h5 className="float-right">$5000</h5></Stack>
              
            </Stack>
          </Grid>
         </Grid>
        </Box>
      </div>
    </Container>
  );
}

export default SellerDashboard;
