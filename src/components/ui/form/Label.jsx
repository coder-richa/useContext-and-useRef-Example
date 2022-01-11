import React from "react";
import propTypes from "prop-types";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Label.module.css";
// Component to present a form input label
const Label = (props) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <label
      htmlFor={props.htmlFor}
      className={`${classes.label} ${
        props.className
          ? props.classes
            ? props.classes[props.className]
            : classes[props.className]
          : ""
      }`}
    >
      {props.children}
    </label>
  );
};
// PropTypes define the types of values that are passed to the components
Label.propTypes = {
  htmlFor: propTypes.string,
  className: propTypes.string,
  classes: propTypes.object,
};
// Default Props of the component
Label.defaultProps = {
  htmlFor: null,
  className: "",
  classes: null,
};
// Export the component
export default Label;
