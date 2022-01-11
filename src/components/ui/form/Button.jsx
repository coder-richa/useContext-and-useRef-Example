import React from "react";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Button.module.css";

import propTypes from "prop-types";

// Component to present a form input
const Button = (props) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <button
      type={props.type}
      id={props.id}
      name={props.name}
      className={`${classes.button} ${
        props.className
          ? props.classes
            ? props.classes[props.className]
            : classes[props.className]
          : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

// PropTypes define the types of values that are passed to the components
Button.propTypes = {
  type: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
  classes: propTypes.object,
};
// Default Props of the component
Button.defaultProps = {
  type: "submit",
  id: null,
  name: null,
  className: "primary",
  onClick: null,
  classes: null,
};
// Export the component
export default Button;
