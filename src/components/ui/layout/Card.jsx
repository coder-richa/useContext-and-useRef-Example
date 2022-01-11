import React from "react";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Card.module.css";
import propTypes from "prop-types";
// Component to present a card
const Card = (props) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <div
      className={`${classes.card}  ${
        props.className
          ? props.classes
            ? props.classes[props.className]
            : classes[props.className]
          : ""
      }`}
    >
      {props.children}
    </div>
  );
};
// PropTypes define the types of values that are passed to the components
Card.propTypes = {
  className: propTypes.string,
};
// Default Props of the component
Card.defaultProps = {
  className: "",
};
// Export the component
export default Card;
