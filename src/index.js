import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProductManager from "./components/product/ProductManager";
import * as serviceWorker from "./serviceWorker";
import { ProductContextProvider } from "./contexts/ProductContext";

import { products } from "./data/products";
/**
 *  Wrap ProductManager component within ProductContextProvider component
 * so that ProductManager component rerenders whenever there is change in state of ProductContextProvider
 *
 */
ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider products={products}>
      <ProductManager />
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
