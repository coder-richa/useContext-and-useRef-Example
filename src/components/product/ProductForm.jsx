import React, { useContext, useRef, useState } from "react";
import propTypes from "prop-types";
import Form from "../ui/form/Form";
import Input from "../ui/form/Input";
import Button from "../ui/form/Button";
import Textarea from "../ui/form/Textarea";
import Row from "../ui/layout/Row";
import Column from "../ui/layout/Column";
import Card from "../ui/layout/Card";
import Label from "../ui/form/Label";
import { getISOString } from "../../utility/dateFunctions";
import { ProductContext } from "../../contexts/ProductContext";
import { checkEmpty } from "../../utility/stringFunctions";

import Modal from "../ui/modal/Modal";
// import { products } from "../../data/products";
// This component is responsible for adding/editing the products
const ProductForm = (props) => {
  /** @description Function to update the state of the form inputs error messages
   * @param {null} null - null to present no error message
   * @returns {Array} [error, setError] - The state of the form inputs error messages and function reference to update the state
   */
  const [error, setError] = useState(null);
  // Retrieve the context values (function references)
  const { addProduct } = useContext(ProductContext);
  //  References to the form inputs
  const title = useRef(props.title);
  const price = useRef(props.price);
  const description = useRef(props.description);
  const date = useRef(props.date);

  // Event handler for the dismissing of the modal
  const onConfirmHandler = () => {
    // Reset Error state to close the error message
    setError(null);
  };
  // Form submission handler
  const addProductHandler = (event) => {
    // Prevent default form submission
    event.preventDefault();
    //  Create object from form inputs
    const userInput = {
      id: props?.id ?? new Date().toTimeString(),
      title: title.current.value,
      price: Number(price.current.value),
      description: description.current.value,
      date: date.current.value,
    };
    // Check if the form inputs are empty
    if (checkEmpty(...Object.values(userInput))) {
      setError({
        heading: "Invalid Input",
        message: "Please fill in all fields",
      });
      return;
    }
    // Check if price is zero or negative
    if (userInput.price < 0) {
      setError({
        heading: "Invalid Product Price",
        message: "Please enter valid product price",
      });
      return;
    }
    // If the form inputs are not empty, then add the product to the database
    addProduct(userInput);
    // Reset Form
    title.current.value = "";
    price.current.value = "";
    date.current.value = "";
    description.current.value = "";
    // Move cursor to the title input
    title.current.focus();
  };
  return (
    <>
      {/* Modal to display error messages when error is non-empty */}
      {error && (
        <Modal
          heading={error.heading}
          message={error.message}
          onClick={onConfirmHandler}
        ></Modal>
      )}

      <Card>
        <Form onSubmit={addProductHandler}>
          <Row>
            <Column className='is-one-half'>
              <Label htmlFor='title'>{props.titleLabel}</Label>
              <Input type='text' name='title' id='title' ref={title} />
            </Column>
            <Column className='is-one-half'>
              <Label htmlFor='price'>{props.priceLabel}</Label>
              <Input type='text' name='price' id='price' ref={price} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label htmlFor='description'>{props.descriptionLabel}</Label>
              <Textarea name='description' id='description' ref={description} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label htmlFor='date'>{props.dateLabel}</Label>
              <Input type='date' name='date' id='date' ref={date} />
            </Column>
          </Row>
          <Row>
            <Column className='center'>
              <Button type='submit'>{props.submitButtonText}</Button>
            </Column>
          </Row>
        </Form>
      </Card>
    </>
  );
};

// PropTypes define the types of values that are passed to the components
ProductForm.propTypes = {
  title: propTypes.string,
  price: propTypes.number,
  date: propTypes.string,
  description: propTypes.string,
  id: propTypes.string,
  titleLabel: propTypes.string,
  priceLabel: propTypes.string,
  dateLabel: propTypes.string,
  descriptionLabel: propTypes.string,
  isEditOperation: propTypes.bool,
  submitButtonText: propTypes.string,
};

// Default Props of the component
ProductForm.defaultProps = {
  title: "",
  price: 0,
  date: getISOString(new Date()),
  description: "",
  id: new Date().getTime().toString(),
  titleLabel: "Product Name",
  priceLabel: "Price",
  dateLabel: "Date",
  descriptionLabel: "Description",
  isEditOperation: false,
  submitButtonText: "Save",
};

// Export the component

export default ProductForm;
