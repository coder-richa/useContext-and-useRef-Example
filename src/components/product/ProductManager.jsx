import React from "react";
import propTypes from "prop-types";
import classes from "./ProductManager.module.css";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
//  Holds data for product listing and CRUD operations
const ProductManager = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{props.title}</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

// PropTypes define the types of values that are passed to the components
ProductManager.propTypes = {
  title: propTypes.string,
};

// Default Props of the component
ProductManager.defaultProps = {
  title: "Manage Product(s)",
};

// Export the component
export default ProductManager;
