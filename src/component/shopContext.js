import React, { useEffect, useState, useContext, createContext } from "react";

const productContext = new createContext();
const categoryContext = new createContext();
const loadContext = new createContext();
export { productContext, categoryContext, loadContext };
function ShopContext(props) {
  const url = "http://127.0.0.1:8000/products/";
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setLoading] = useState(true);



  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } else {
        throw new Error("data not found");
      }
    } catch (err) {
      err.message = "some thing wrong to fetching the data";
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  const fetchCategory = async () => {
    try {
      // const response = await fetch(
      //   "https://fakestoreapi.com/products/categories"
      // );
      const response = await fetch(`http://127.0.0.1:8000/category/`);
      if (response.status === 200) {
        const data = await response.json();
        setCategory(data);
        setLoading(false);
      } else {
        throw new Error(response.status);
      }
    } catch (err) {
      err.message = "some thing wrong to fetching the data";
    }
  };
  return (
    <div>
      <productContext.Provider value={[product, isLoading, setProduct]}>
        <categoryContext.Provider value={[category, setCategory]}>
          <loadContext.Provider value={[isLoading, setLoading]}>
            {props.children}
          </loadContext.Provider>
        </categoryContext.Provider>
      </productContext.Provider>
    </div>
  );
}

export default ShopContext;
