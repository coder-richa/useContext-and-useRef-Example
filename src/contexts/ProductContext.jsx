import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
// Define common context function for managing site products
export const ProductContext = createContext({
  products: [],
  selectedProduct: {},
  addProduct: () => {},
  editProduct: () => {},
  deleteProduct: () => {},
  changeSelectedProduct: () => {},
});

// Define the ProductContext provider component to pass the products to the child components
export const ProductContextProvider = (props) => {
  // Initial values are obtained from the props
  const { products: initialProducts, children } = props;

  // Use State to keep the values
  const [products, setProducts] = useState(initialProducts);
  // Use State to keep the values
  const [selectedProduct, setSelectedProduct] = useState({
    id: "",
    title: "",
    price: 0,
    description: "",
    date: new Date(),
  });
  // Function to add product to the list
  const addProduct = (product) => {
    setProducts((prevProducts) => {
      return [...prevProducts, product]; // Add the new product to the list
    });
  };
  // Function to edit product to the list
  const editProduct = (product) => {
    // Update product to the products array from the latest previous state snapshot
    setProducts((prevProducts) => {
      // Find the product to be edited
      let index = prevProducts.findIndex((prod) => prod.id === product.id);
      // Replace the product to be edited with the new product
      return [
        ...prevProducts.slice(0, index),
        product,
        ...prevProducts.slice(index + 1),
      ];
    });
    setSelectedProduct({});
  };
  // Function to change the selected product
  const changeSelectedProduct = (product) => {
    setSelectedProduct(product);
  };

  // Function to delete product to the list
  const deleteProduct = (product) => {
    // Removes product to the products array from the latest previous state snapshot
    setProducts((prevProducts) => {
      return prevProducts.filter(
        (productItem) => productItem.id !== product.id
      );
    });
  };

  // Make the context object:
  const productContext = {
    products,
    selectedProduct,
    addProduct,
    editProduct,
    deleteProduct,
    changeSelectedProduct,
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
