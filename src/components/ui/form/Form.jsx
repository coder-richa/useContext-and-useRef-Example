import React from "react";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Form.module.css";
import propTypes from "prop-types";
// Component to present a form
const Form = (props) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <form
      onSubmit={props.onSubmit}
      className={`${classes.form} ${
        props.className
          ? props.classes
            ? props.classes[props.className]
            : classes[props.className]
          : ""
      }`}
    >
      {props.children}
    </form>
  );
};
// PropTypes define the types of values that are passed to the components
Form.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  className: propTypes.string,
  onSubmit: propTypes.func,
  classes: propTypes.object,
};
// Default Props of the component
Form.defaultProps = {
  id: null,
  name: null,
  className: "",
  onSubmit: null,
  classes: null,
};
// Export the component
export default Form;
