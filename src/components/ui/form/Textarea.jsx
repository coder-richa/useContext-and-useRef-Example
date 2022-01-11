import React from "react";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Textarea.module.css";
import propTypes from "prop-types";
// Component to present a form textarea
const Textarea = React.forwardRef((props,ref) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <textarea
      id={props.id || null}
      name={props.name || null}
      defaultValue={props.defaultValue || ""}
      onChange={props.onChange}
      onBlur={props.onBlur || null}
      onFocus={props.onFocus || null}
      ref={ref}
      className={`${classes.textarea} ${
        props.className
          ? props.classes
            ? props.classes[props.className]
            : classes[props.className]
          : ""
      }`}
    ></textarea>
  );
});
// PropTypes define the types of values that are passed to the components
Textarea.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  defaultValue: propTypes.string,
  className: propTypes.string,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  onFocus: propTypes.func,
  classes: propTypes.object,
};
// Default Props of the component
Textarea.defaultProps = {
  id: null,
  name: null,
  className: "",
  onChange: null,
  onBlur: null,
  onFocus: null,
  classes: null,
  defaultValue:""
};
// Export the component
export default Textarea;
