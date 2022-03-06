import React, { useEffect, useContext, useState }from "react";
import PlusCircleIcon from "mdi-react/PlusCircleIcon";
import MinusCircleIcon from "mdi-react/MinusCircleIcon";
import TrashIcon from "mdi-react/TrashIcon";
import {Link} from "react-router-dom";

// import productContext from "./"

function AddCart() {
  const [itemCount, setItemCount] = React.useState(14);
  
  const [product, setProducts] = React.useState([]);

  const increase = (product) => {
    const newProduct = [...product];
    const index = product.indexOf(product);
    newProduct[index].quantity += 1;
    setProducts(newProduct);
  };

  const decrease = (product) => {
    const newProduct = [...product];
    const index = product.indexOf(product);
    newProduct[index].quantity -= 1;
    setProducts(newProduct);
  };
  const removeProduct = (product) => {
    const newProduct = [...product];
    const index = product.indexOf(product);
    newProduct.splice(index, 1);
    setProducts(newProduct);
  };

  return (
    // addcart pages
	<div className="cart-page">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="cart-table table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th className="pro-thumbnail">Image</th>
									<th className="pro-title">Product</th>
									<th className="pro-price">Price</th>
									<th className="pro-quantity">Quantity</th>
									<th className="pro-subtotal">Total</th>
									<th className="pro-remove">Remove</th>
								</tr>
							</thead>
							<tbody>
								{product.map((product) => (
									<tr>
										<td className="pro-thumbnail"><img src={product.image} alt="Product" /></td>
										<td className="pro-title"><Link to={`/product/${product.id}`}>{product.name}</Link></td>
										<td className="pro-price"><span>${product.price}</span></td>
										<td className="pro-quantity">
											<div className="pro-qty">
												<div className="count-input">
													<span className="decrease" onClick={() => decrease(product)}><MinusCircleIcon /></span>
													<input type="text" value={product.quantity} />
													<span className="increase" onClick={() => increase(product)}><PlusCircleIcon /></span>
												</div>
											</div>
										</td>
										<td className="pro-subtotal"><span>${product.price * product.quantity}</span></td>
										<td className="pro-remove"><span onClick={() => removeProduct(product)}><TrashIcon /></span></td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 offset-lg-8">
					<div className="cart-total-area">
						<div className="cart-total">
							<h2>Cart Total</h2>
							<ul className="cart-total-chart">
								<li>Subtotal<span>${itemCount * 10}</span></li>
								<li>Shipping<span>Free</span></li>
								<li className="total">Total<span>${itemCount * 10}</span></li>
							</ul>
							<Link to="/checkout" className="checkout-btn">Proceed to checkout</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


    
   
  );
}

export default AddCart;
{/* <div className="container my-5">
<h2 className="text-center">AddCart </h2>
<div className="row no-gutters py-2">
<div className="col-sm-2 p-2">
<img
alt="..."
style={{ margin: "0 auto", maxHeight: "50px" }}
src="https://cdn.shopify.com/s/files/1/0289/1534/products/IMG_20191205_WA0015_1024x1024.jpg?v=1576048982"
className="img-fluid d-block"
/>
</div>
<div className="col-sm-10 p-2">
<div className="row">
<div className="col-sm-6">
  <h5 className="text-dark">Product Name</h5>
  <p className="text-muted">
	  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	  Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
	  adipiscing nec, ultricies sed, dolor.
  </p>
</div>
<div className="col-sm-6">
  <div className="row">
	  <div className="col-sm-6">
		  <div className="row">
			  <div className="col-sm-6">
				  <h5 className="text-dark">Price</h5>
				  <p className="text-muted">$100</p>
			  </div>
			  <div className="col-sm-6">
				  <h5 className="text-dark">Quantity</h5>
				  <p className="text-muted">{itemCount}</p>
			  </div>
		  </div>
	  </div>
	  <div className="col-sm-6">
		  <div className="row">
			  <div className="col-sm-6">
				  <h5 className="text-dark">Total</h5>
				  <p className="text-muted">$100</p>
			  </div>
			  <div className="col-sm-6">
				  <h5 className="text-dark">Action</h5>
				  <div className="row">
					  <div className="col-sm-6">
						  <button
							  className="btn btn-primary btn-sm"
							  onClick={() => increase(product)}
						  >
							  <PlusCircleIcon />
						  </button>
					  </div>
					  <div className="col-sm-6">
						  <button
							  className="btn btn-primary btn-sm"
							  onClick={() => decrease(product)}
						  >
							  <MinusCircleIcon />
						  </button>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </div>
</div>
</div>
</div>
</div>
</div> */}
