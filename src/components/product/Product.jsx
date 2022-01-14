import React, { useContext } from "react";
import classes from "./Product.module.css";
import propTypes from "prop-types";
import Button from "../ui/form/Button";
import { formatCurrency } from "../../utility/numberFunctions";
import { formatDate } from "../../utility/dateFunctions";
import { ProductContext } from "../../contexts/ProductContext";
const Product = (props) => {
  const { changeSelectedProduct, deleteProduct } = useContext(ProductContext);
  const { product, title, price, date, description } = props;
  return (
    <div className={classes["product-container"]}>
      <div className={classes["product-grid"]}>
        <h2 className={classes["center"]}>{title}</h2>
        <p className={classes["center"]}>{formatCurrency(price)}</p>
        <p className={classes["center"]}>{formatDate(date)}</p>
        <p className={classes["center"]}>{description}</p>
        <p className={classes["center"]}>
          <Button
            type='button'
            className='primary'
            onClick={() => changeSelectedProduct(product)}
          >
            Edit
          </Button>
          <Button
            type='button'
            className='danger'
            onClick={() => deleteProduct(product)}
          >
            Delete
          </Button>
        </p>
      </div>
    </div>
  );
};

// PropTypes define the types of values that are passed to the components
Product.propTypes = {
  title: propTypes.string,
  price: propTypes.number,
  date: propTypes.string,
  description: propTypes.string,
};

// Default Props of the component
Product.defaultProps = {
  title: "Product",
  price: 1,
  date: new Date().toString(),
  description: "Some dummy description",
};

// Export the component
export default Product;
