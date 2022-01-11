import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
// Define common context function for managing site products
export const ProductContext = createContext();

// Define the ProductContext provider component to pass the products to the child components
export const ProductContextProvider = (props) => {
  // Initial values are obtained from the props
  const { products: initialProducts, children } = props;

  // Use State to keep the values
  const [products, setProducts] = useState(initialProducts);

  // Function to add product to the list
  const addProduct = (product) => {
    setProducts(products.concat([product]));
  };

  // Function to delete product to the list
  const deleteProduct = (product) => {
    setProducts(
      products.filter((productItem) => productItem.id !== product.id)
    );
  };

  // Make the context object:
  const productContext = {
    products,
    setProducts,
    addProduct,
    deleteProduct,
  };

  // pass the value in provider and return
  return (
    <ProductContext.Provider value={productContext}>
      {children}
    </ProductContext.Provider>
  );
};

export const { ProductContextConsumer } = ProductContext;

ProductContextProvider.propTypes = {
  products: PropTypes.array,
  selectedProduct: PropTypes.object,
};

ProductContextProvider.defaultProps = {
  products: [],
  selectedProduct: {},
};
