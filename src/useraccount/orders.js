import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import React from "react";
import { Card } from "semantic-ui-react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { BiShoppingBag } from "react-icons/bi";
import { Outlet,NavLink,useParams } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';


import OrdersModal from "./component/ordersmodal";
import Ordersdetails from "./ordersdetails";


function Orders(props) {
  
  const [open, setOpen] = React.useState(false);
  console.log(open);
  const [orders, setOrders] = React.useState([
    {
      id: 1,
      order_id: "1",
      order_date: "2020-01-01",
      order_status: "Pending",
      order_total: "100",
      order_shipping: "10",
      order_tax: "10",
      order_discount: "10",
      order_payment_method: "Cash On Delivery",
      order_payment_status: "Pending",
      order_payment_date: "2020-01-01",
      order_payment_amount: "100",
      order_payment_transaction_id: "1",
      order_payment_transaction_status: "Pending",
      order_payment_transaction_message: "Pending",
      order_payment_transaction_date: "2020-01-01",
      order_payment_transaction_amount: "100",
      order_payment_transaction_currency: "USD",
      order_payment_transaction_currency_code: "USD",
    },
    {
      id: 2,
      order_id: "2",
      order_date: "2020-01-01",
      order_status: "Pending",
      order_total: "100",
      order_shipping: "10",
      order_tax: "10",
      order_discount: "10",
      order_payment_method: "Cash On Delivery",
      order_payment_status: "Pending",
      order_payment_date: "2020-01-01",
      order_payment_amount: "100",
      order_payment_transaction_id: "1",
      order_payment_transaction_status: "Pending",
      order_payment_transaction_message: "Pending",
      order_payment_transaction_date: "2020-01-01",
      order_payment_transaction_amount: "100",
      order_payment_transaction_currency: "USD",
      order_payment_transaction_currency_code: "USD",
    },
    {
      id: 2,
      order_id: "2",
      order_date: "2020-01-01",
      order_status: "Pending",
      order_total: "100",
      order_shipping: "10",
      order_tax: "10",
      order_discount: "10",
      order_payment_method: "Cash On Delivery",
      order_payment_status: "Pending",
      order_payment_date: "2020-01-01",
      order_payment_amount: "100",
      order_payment_transaction_id: "1",
      order_payment_transaction_status: "Pending",
      order_payment_transaction_message: "Pending",
      order_payment_transaction_date: "2020-01-01",
      order_payment_transaction_amount: "100",
      order_payment_transaction_currency: "USD",
      order_payment_transaction_currency_code: "USD",
    },
  ]);
  const [order, setOrder] = React.useState([]);


  return (
    <div>
      <div className="container">
        
        <div className="row">
          <div className="col-sm-12">
            <h1>
              <span>
                <BiShoppingBag
                  style={{ fontSize: "40px", marginRight: "5px" }}
                />
              </span>
              My Order 
            </h1>
            <hr />

            <Table className="table table-striped" responsive>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Order Status</th>
                  <th> Total</th>
                
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.order_id}</td>
                    <td>{order.order_date}</td>
                    <td>{order.order_status}</td>
                    <td>{order.order_total}</td>

                    <td>
                      <NavLink to="45">
                        <span><OrdersModal Ordersdetails={Ordersdetails} VisibilityIcon={VisibilityIcon}/></span>
                        </NavLink>
                      {/* <button
                        className="btn btn-primary"
                       
                      >
                        View
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Orders;
