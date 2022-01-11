import React, { useContext } from "react";
import Card from "../ui/layout/Card";
import Product from "./Product";
import classes from "./ProductList.module.css";
// import project context
import { ProductContext } from "../../contexts/ProductContext";
const ProductList = (props) => {
  //  Destructure context values
  const { products } = useContext(ProductContext);
  return (
    <Card className='container' classes={classes}>
      {/* Loop over products */}
      {products.map((product) => (
        <Product key={product.id} {...product} product={product} />
      ))}
    </Card>
  );
};

// Export the component
export default ProductList;
