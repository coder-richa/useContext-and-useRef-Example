import React from "react";
import propTypes from "prop-types";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Input.module.css";
// Component to present a form input
const Input = React.forwardRef((props,ref) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      ref={ref}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      min={props.min}
      max={props.max}
      className={`${classes.input} ${
        props.className
          ? props.classes
            ? props.classes[props.className]
            : classes[props.className]
          : ""
      }`}
    />
  );
});
// PropTypes define the types of values that are passed to the components
Input.propTypes = {
  type: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  value: propTypes.string,
  className: propTypes.string,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  onFocus: propTypes.func,
  min: propTypes.number,
  max: propTypes.number,
  classes: propTypes.object,
};
// Default Props of the component
Input.defaultProps = {
  type: "text",
  id: null,
  name: null,
  className: null,
  onChange: null,
  onBlur: null,
  onFocus: null,
  min: null,
  max: null,
  classes: null,
};
// Export the component
export default Input;
